import { Component } from '@angular/core';
import { OpenAiService } from './services/open-ai/open-ai.service';
import { OpenAiMessage } from './classes/openaiMessage';
import { CompanyDetail } from './classes/companyDetail';
import { AcquisitionTarget } from './classes/acquisitionTarget';
import { TrendAnalyze } from './classes/trendAnalyze';
import { NewMarket } from './classes/newMarket';
import { CompetitorReview } from './classes/competitorReview';
import { ExcelService } from './services/excel/excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'competitor-analyzer';
  search = "";
  messageBlock: OpenAiMessage[] = [];
  companySelected?: CompanyDetail;

  isReady: boolean = false;

  companyDetails: CompanyDetail[] = [];
  acquisitionTargets: AcquisitionTarget[] = [];
  competitorReviews: CompetitorReview[] = [];
  newMarkets: NewMarket[] = [];
  trendAnalyzes: TrendAnalyze[] = [];
  
  constructor(private openaiService: OpenAiService, private excelService: ExcelService){
    this.openaiService.messageObservable.subscribe(m => this.messageBlock = m);

    this.openaiService.companySelectorObservable.subscribe(cd => {
      this.companyDetails = cd;
    });
    this.openaiService.acquisitionTargetObservable.subscribe(at => { 
      this.acquisitionTargets = at;
      this.isReady = true;
    });
    this.openaiService.competitorReviewObservable.subscribe(cr => {
      this.competitorReviews = cr;
      this.isReady = true;
      console.log(this.competitorReviews);
    });
    this.openaiService.newMarketObservable.subscribe(nm => {
      this.newMarkets = nm;
      this.isReady = true;
    });
    this.openaiService.trendAnalyzeObservable.subscribe(ta => {
      this.trendAnalyzes = ta;
      this.isReady = true;
    });
  }

  companySelectedEvent($event: CompanyDetail) {
    this.companySelected = $event;
  }

  generateExcel(){
    console.log("click")
    this.excelService.exportExcel("Competitor-Analyze_" + this.companySelected?.name, this.acquisitionTargets, this.competitorReviews, this.newMarkets, this.trendAnalyzes);
  }
}
