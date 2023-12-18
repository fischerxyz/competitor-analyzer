import { Component, Input } from '@angular/core';
import { NewMarket } from 'src/app/classes/newMarket';

@Component({
  selector: 'new-markets',
  templateUrl: './new-markets.component.html',
  styleUrls: ['./new-markets.component.css']
})
export class NewMarketsComponent {
  @Input() newMarkets: NewMarket[] = [];

  constructor(){
  }
}
