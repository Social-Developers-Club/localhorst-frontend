import { Component } from '@angular/core';

import { Subject, Observable, from, merge } from 'rxjs';
import { scan } from 'rxjs/operators';

import { Message, User, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';

import { Agent } from './agent';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  public feed: Observable<Message[]>;

  public readonly user: User = {
    id: 1
  };

  public readonly bot: User = {
    id: 0,
    name: 'Horsti',
    avatarUrl: 'assets/images/horsti.jpg'
  };

  private agent: Agent = new Agent(this.bot);
  private local: Subject<Message> = new Subject<Message>();

  constructor() {
    // Merge local and remote messages into a single stream
    this.feed = merge(
      this.local,
      this.agent.responses
    ).pipe(
      // ... and emit an array of all messages
      scan((acc: Message[], x: Message) => [...acc, x], [])
    );
  }

  public sendMessage(e: SendMessageEvent): void {
    this.send(e.message);
  }

  public heroAction(button: any) {
    if (button.type === 'postBack') {
      const message = {
        author: this.user,
        text: button.value
      };

      this.send(message);
    }
  }

  private send(message: Message) {
    this.local.next(message);
    this.local.next({
      author: this.bot,
      typing: true
    });
    this.agent.submit(message.text);
  }
}
