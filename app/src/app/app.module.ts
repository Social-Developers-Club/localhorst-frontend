import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentPlanCardComponent } from './chat/payment-plan-card.components';
import { QuoteCardComponent } from './chat/quote-card.components';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { SolutionOverviewComponent } from './solution-overview/solution-overview.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeChecklistComponent } from './home-page/home-checklist/home-checklist.component';
import { HomeMainComponent } from './home-page/home-main/home-main.component';
import { HomeMoreInfoComponent } from './home-page/home-more-info/home-more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PaymentPlanCardComponent,
    QuoteCardComponent,
    HeaderComponent,
    SolutionOverviewComponent,
    HomePageComponent,
    HomeChecklistComponent,
    HomeMainComponent,
    HomeMoreInfoComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ChatModule,
    ButtonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
