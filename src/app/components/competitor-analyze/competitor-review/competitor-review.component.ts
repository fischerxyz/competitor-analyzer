import { Component, Input } from '@angular/core';
import { CompetitorReview } from 'src/app/classes/competitorReview';

@Component({
  selector: 'competitor-review',
  templateUrl: './competitor-review.component.html',
  styleUrls: ['./competitor-review.component.css']
})
export class CompetitorReviewComponent {
  @Input() competitorReviews: CompetitorReview[] = [];

  constructor(){
  }
}
