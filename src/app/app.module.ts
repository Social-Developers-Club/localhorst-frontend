import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentPlanCardComponent } from './chat/payment-plan-card.components';
import { QuoteCardComponent } from './chat/quote-card.components';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PaymentPlanCardComponent,
    QuoteCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ChatModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
