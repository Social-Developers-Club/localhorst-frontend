import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './shared-components/chat/chat.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentPlanCardComponent } from './shared-components/chat/payment-plan-card.components';
import { QuoteCardComponent } from './shared-components/chat/quote-card.components';

import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './shared-components/header/header.component';
import { SolutionOverviewComponent } from './pages/solution-overview/solution-overview.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChecklistComponent } from './shared-components/checklist/checklist.component';
import { HomeMainComponent } from './pages/home-page/home-main/home-main.component';
import { HomeMoreInfoComponent } from './pages/home-page/home-more-info/home-more-info.component';
import { MenuComponent } from './shared-components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PaymentPlanCardComponent,
    QuoteCardComponent,
    HeaderComponent,
    SolutionOverviewComponent,
    HomePageComponent,
    ChecklistComponent,
    HomeMainComponent,
    HomeMoreInfoComponent,
    MenuComponent,
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
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
