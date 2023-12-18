import { Injectable } from '@angular/core';
import OpenAI from 'openai';
import { Subject } from 'rxjs';
import { AcquisitionTarget, AcquisitionTargets } from 'src/app/classes/acquisitionTarget';
import { CompanyDetail, CompanyDetails } from 'src/app/classes/companyDetail';
import { CompetitorReview, CompetitorReviews } from 'src/app/classes/competitorReview';
import { NewMarket, NewMarkets } from 'src/app/classes/newMarket';
import { OpenAiMessage } from 'src/app/classes/openaiMessage';
import { TrendAnalyze, TrendAnalyzes } from 'src/app/classes/trendAnalyze';
import { RequestType } from 'src/app/enums/requestType';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  constructor() { }

  protected messageObserver = new Subject<any>();
  messageObservable = this.messageObserver.asObservable();

  protected stateObserver = new Subject<any>();
  stateObservable = this.stateObserver.asObservable();

  protected acquisitionTargetObserver = new Subject<AcquisitionTarget[]>();
  acquisitionTargetObservable = this.acquisitionTargetObserver.asObservable();

  protected companySelectorObserver = new Subject<CompanyDetail[]>();
  companySelectorObservable = this.companySelectorObserver.asObservable();

  protected competitorReviewObserver = new Subject<CompetitorReview[]>();
  competitorReviewObservable = this.competitorReviewObserver.asObservable();

  protected newMarketObserver = new Subject<NewMarket[]>();
  newMarketObservable = this.newMarketObserver.asObservable();

  protected trendAnalyzeObserver = new Subject<TrendAnalyze[]>();
  trendAnalyzeObservable = this.trendAnalyzeObserver.asObservable();

  private messages: OpenAiMessage[] = [];

  readonly openai = new OpenAI({
    organization: environment.OPENAI_ORGANIZATION,
    apiKey: environment.OPENAI_APIKEY,
    dangerouslyAllowBrowser: true
  });

  getCompanySelector(input: string){
    //Company Selector
    var content = this.addQuestionForCompanySelector(input);

    //Define the JSON Schema by creating a schema object
   
    this.sendMessage(content, RequestType.CompanySelector);
  }

  getCompanyAnalyze(companyDetail: CompanyDetail){
    //Competitor Review
    var content = this.addQuestionForCompetitorReview(companyDetail);
    this.sendMessage(content, RequestType.CompetitorReview);
    //Trend Analyze
    var content = this.addQuestionForTrendAnalyze(companyDetail);
    this.sendMessage(content, RequestType.TrendAnalyze);
    //New Market Identification
    var content = this.addQuestionForNewMarketIdentification(companyDetail);
    this.sendMessage(content, RequestType.NewMarket);
    //Acquisition Target
    var content = this.addQuestionForAcquisitionTarget(companyDetail);
    this.sendMessage(content, RequestType.AcquisitionTarget);
  }


  private sendMessage(content: string, requestType: RequestType){
    this.messages.push(new OpenAiMessage("user", content));
    var message = "";
    const stream = this.openai.chat.completions.create({
      model: "gpt-3.5-turbo",
     
      messages: [{ role: "user", content: content }],
    }
      
    ).then(r => {
      console.log(r);
      r.choices.forEach(choice => {
        this.messages.push(new OpenAiMessage(choice.message.role, choice.message.content))
        message = choice.message.content as string;
      });
   
      switch(requestType) { 
        case RequestType.AcquisitionTarget: { 
            var returnValueAcquisitionTarget = JSON.parse(message) as AcquisitionTargets;
            console.log(returnValueAcquisitionTarget)

            this.acquisitionTargetObserver.next(returnValueAcquisitionTarget.acquisitionTargets);
            break; 
        } 
        case RequestType.CompanySelector: { 
            var returnValueCompanySelector = JSON.parse(message) as CompanyDetails;
            console.log(returnValueCompanySelector)

            this.companySelectorObserver.next(returnValueCompanySelector.companies);
            break; 
        }  
        case RequestType.CompetitorReview: { 
            var returnValueCompetitorReview = JSON.parse(message) as CompetitorReviews;
            console.log(returnValueCompetitorReview)
   
            this.competitorReviewObserver.next(returnValueCompetitorReview.competitors);
            break; 
        } 
        case RequestType.NewMarket: { 
            var returnValueNewMarket = JSON.parse(message) as NewMarkets;
            console.log(returnValueNewMarket)
   
            this.newMarketObserver.next(returnValueNewMarket.newMarkets);
            break; 
        }  
        case RequestType.TrendAnalyze: { 
            var returnValueTrendAnalyze = JSON.parse(message) as TrendAnalyzes;
            console.log(returnValueTrendAnalyze)
  
            this.trendAnalyzeObserver.next(returnValueTrendAnalyze.trendAnalyzes);
            break; 
        }    
        default: { 
           //statements; 
           break; 
        } 
      }  
    });
  }

  private addQuestionForCompanySelector(content: string): string{
    var companies = new CompanyDetails();
    companies.companies.push(new CompanyDetail("Testname", "Semiconductors", "10,000", "Large"));

    return "Create an overview with the size, employee_count and business_area about the 10 biggest companies with the name '" + content + "'. The data doesn't have to be current. The data schema should be like this:" + JSON.stringify(companies);
  }
  private addQuestionForCompetitorReview(companyDetail: CompanyDetail): string{
    var competitorReviews = new CompetitorReviews();
    competitorReviews.competitors.push(new CompetitorReview("Testname", "Berlin, Germany", "Large", "3 Million", "10,000", "Semiconductors"));

    return  "Create a competitor review with location, size, revenue and employee_count for the company " + companyDetail.name + " in the business area " + companyDetail.business_area + ". The data doesn't have to be current. The data schema should be like this:" + JSON.stringify(competitorReviews); 
  }
  private addQuestionForTrendAnalyze(companyDetail: CompanyDetail): string{
    var trendAnalyzes = new TrendAnalyzes();
    trendAnalyzes.trendAnalyzes.push(new TrendAnalyze("Testarea", "Creating new products"));

    return  "Create a trend research for the company " + companyDetail.name + " in the business area " + companyDetail.business_area + ". The data doesn't have to be current. The data schema should be like this:" + JSON.stringify(trendAnalyzes);
  }
  private addQuestionForNewMarketIdentification(companyDetail: CompanyDetail): string{
    var newMarket = new NewMarkets();
    newMarket.newMarkets.push(new NewMarket("Testmarket", "Creating new products"));

    return  "Create an identification of possible new markets for the company " + companyDetail.name + " in the business area " + companyDetail.business_area + ". The data doesn't have to be current.  The data schema should be like this:" + JSON.stringify(newMarket); 
  }
  private addQuestionForAcquisitionTarget(companyDetail: CompanyDetail): string{
    var acquisitionTargets = new AcquisitionTargets();
    acquisitionTargets.acquisitionTargets.push(new AcquisitionTarget("Testmarket", "Producing Semiconductors", "Berlin, Germany", "Semiconductor manifacturing", "3 Million"));

    return  "Create a review of possible acquisition targets, with the patents, revenue, location and employee_count for the company " + companyDetail.name + " in the business area " + companyDetail.business_area + ". The data doesn't have to be current. .  The data schema should be like this:" + JSON.stringify(acquisitionTargets); 
  }
}
