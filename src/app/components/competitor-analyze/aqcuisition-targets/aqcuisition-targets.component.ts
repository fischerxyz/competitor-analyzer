import { Component, Input } from '@angular/core';
import { AcquisitionTarget } from 'src/app/classes/acquisitionTarget';

@Component({
  selector: 'aqcuisition-targets',
  templateUrl: './aqcuisition-targets.component.html',
  styleUrls: ['./aqcuisition-targets.component.css']
})
export class AcquisitionTargetsComponent {
  @Input() acquisitionTargets: AcquisitionTarget[] = [];
  
  constructor(){
  }
}
