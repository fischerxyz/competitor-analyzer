import { Component, Input } from '@angular/core';
import { TrendAnalyze } from 'src/app/classes/trendAnalyze';

@Component({
  selector: 'trend-analyze',
  templateUrl: './trend-analyze.component.html',
  styleUrls: ['./trend-analyze.component.css']
})
export class TrendAnalyzeComponent {
  @Input() trendAnalyzes: TrendAnalyze[] = [];

  constructor(){
  }
}
