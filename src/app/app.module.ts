import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { CompanySelectorComponent } from './components/company-selector/company-selector.component';
import { AcquisitionTargetsComponent } from './components/competitor-analyze/aqcuisition-targets/aqcuisition-targets.component';
import { CompetitorReviewComponent } from './components/competitor-analyze/competitor-review/competitor-review.component';
import { NewMarketsComponent } from './components/competitor-analyze/new-markets/new-markets.component';
import { TrendAnalyzeComponent } from './components/competitor-analyze/trend-analyze/trend-analyze.component';
import { CompetitorAnalyzeComponent } from './components/competitor-analyze/competitor-analyze.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanySelectorComponent,

    CompetitorAnalyzeComponent,
    AcquisitionTargetsComponent,
    CompetitorReviewComponent,
    NewMarketsComponent,
    TrendAnalyzeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    //Material
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
