import { Component, Input } from '@angular/core';
import { AcquisitionTarget } from 'src/app/classes/acquisitionTarget';
import { CompetitorReview } from 'src/app/classes/competitorReview';
import { NewMarket } from 'src/app/classes/newMarket';
import { TrendAnalyze } from 'src/app/classes/trendAnalyze';

@Component({
  selector: 'competitor-analyze',
  templateUrl: './competitor-analyze.component.html',
  styleUrls: ['./competitor-analyze.component.css']
})
export class CompetitorAnalyzeComponent {
  @Input() acquisitionTargets: AcquisitionTarget[] = [];
  @Input() competitorReviews: CompetitorReview[] = [];
  @Input() newMarkets: NewMarket[] = [];
  @Input() trendAnalyzes: TrendAnalyze[] = [];
}
