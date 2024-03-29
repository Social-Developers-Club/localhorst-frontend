/**
 * Code copied from https://www.telerik.com/kendo-angular-ui/components/conversationalui/integrations/dialogflow/
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject, from } from 'rxjs';

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { Message, User } from '@progress/kendo-angular-conversational-ui';
import { SurveyResult } from '../../models/survey-result';

// See https://dialogflow.com/docs/reference/agent/message-objects
const enum MessageType {
    PlainText = 0,
    QuickReply = 2
}

const mapActions = (data: any) => (data || []).map(action => {
    if (action.type === 'postBack') {
        action.type = 'reply';
    }

    return action;
});

const mapReplies = (msg: any) => (msg.replies || []).map(reply =>
    ({ type: 'reply', value: reply })
);

export class Agent {
    public readonly responses: Subject<Message> = new Subject<Message>();
    private client: ApiAiClient;
    
    private surveyResult: SurveyResult = new SurveyResult();

    constructor(private user: User) {
        this.client = new ApiAiClient({
            accessToken: 'eb48648d8886410ab35b07da87e097ab'
        });

        const req = this.client.eventRequest('Welcome');
        from(req).subscribe(data => this.onResponse(data));
    }


    public submit(question: string): void {
        const req = this.client.textRequest(question);
        from(req).subscribe(data => this.onResponse(data));
    }

    private onResponse(response: any): void {
        // See https://dialogflow.com/docs/fulfillment
        const fulfillment = response.result.fulfillment;
        if (!fulfillment) {
            return;
        }

        const timestamp = new Date(response.timestamp);
        let messages: Message[] = [{
            author: this.user,
            timestamp
        }];

        if (fulfillment.messages.length > 0) {
            // Extract plain text messages
            messages = fulfillment.messages
                .filter(msg => msg.type === MessageType.PlainText)
                .map(msg => (
                    {
                        author: this.user,
                        text: msg.speech,
                        timestamp
                    }
                ));
        }

        const lastMessage = messages[messages.length - 1];
        const suggestedActions = [];

        // Extract quick replies which are a type of message in DialogFlow V1 API
        fulfillment.messages
            .filter(msg => msg.type === MessageType.QuickReply)
            .forEach(msg =>
                suggestedActions.push(...mapReplies(msg))
            );

        // Our webhook sends attachments and quick replies in "data".
        // See https://dialogflow.com/docs/fulfillment#response
        if (fulfillment.data && fulfillment.data.null) {
            // The webhook response is, oddly enough, stored in a "null" object.
            const payload = fulfillment.data.null;
            lastMessage.attachments = payload.attachments;
            suggestedActions.push(...mapActions(payload.suggestedActions));
        }

        lastMessage.suggestedActions = suggestedActions;

        this.extractRelevantParametersFromDialogflowResponse(response.result.parameters);

        if (this.surveyResult.isComplete()) {
            console.log('result is completed');
        }

        messages.forEach(msg => this.responses.next(msg));
    }

    public extractRelevantParametersFromDialogflowResponse(parameters: object) {
        if (parameters['companyType']) {
            this.surveyResult.companyType = parameters['companyType'];
        }
        if (parameters['customerCount']) {
            this.surveyResult.customerCount = Number.parseInt(parameters['customerCount']);
        }
        if (parameters['financialSituationRating']) {
            this.surveyResult.financialSituationRating = Number.parseInt(parameters['financialSituationRating']);
        }
    }

}

