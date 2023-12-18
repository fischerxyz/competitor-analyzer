import { Component, EventEmitter, Output } from '@angular/core';
import { OpenAiService } from '../../services/open-ai/open-ai.service';
import { CompanyDetail, CompanyDetails } from 'src/app/classes/companyDetail';

@Component({
  selector: 'company-selector',
  templateUrl: './company-selector.component.html',
  styleUrls: ['./company-selector.component.css']
})
export class CompanySelectorComponent {
  @Output() companySelectedEvent = new EventEmitter<CompanyDetail>();
  result = "1. Fuchs Petrolub SE - Größe: Großunternehmen - Bereich: Schmierstoffe und verwandte Produkte - Mitarbeiterzahl: Über 5.500 weltweit 2. Fuchs Gewürze GmbH - Größe: Mittelständisches Unternehmen - Bereich: Gewürzproduktion und Handel - Mitarbeiterzahl: Über 200 3. Fuchs & Söhne GmbH - Größe: Mittelständisches Unternehmen - Bereich: Hoch- und Tiefbau, Baustoffhandel - Mitarbeiterzahl: Über 300 4. Fuchs Schrauben GmbH - Größe: Mittelständisches Unternehmen - Bereich: Produktion von Schraubverbindungen - Mitarbeiterzahl: Über 150 5. Fuchs Maschinen AG - Größe: Mittelständisches Unternehmen - Bereich: Maschinenbau - Mitarbeiterzahl: Über 400 6. Fuchs Solar GmbH - Größe: Mittelständisches Unternehmen - Bereich: Solarenergiesysteme - Mitarbeiterzahl: Über 100 7. Fuchs Fahrzeugbau GmbH - Größe: Mittelständisches Unternehmen - Bereich: Fahrzeugbau und -anpassung - Mitarbeiterzahl: Über 150 8. Fuchs Tanklager GmbH - Größe: Mittelständisches Unternehmen - Bereich: Lagertankdienste für Flüssigkeiten - Mitarbeiterzahl: Über 50 9. Fuchs Diamantwerkzeug GmbH - Größe: Mittelständisches Unternehmen - Bereich: Herstellung von Diamantwerkzeugen - Mitarbeiterzahl: Über 70 10. Fuchs Kartonagen GmbH - Größe: Mittelständisches Unternehmen - Bereich: Verpackungen und Kartonagen - Mitarbeiterzahl: Über 100 Bitte beachten Sie, dass diese Informationen möglicherweise nicht auf dem neuesten Stand sind und sich jederzeit ändern können.";
  companyDetails: CompanyDetail[] = [];
  search = "";
  isSearching: boolean = false

  constructor(private openaiService: OpenAiService){
    this.openaiService.companySelectorObservable.subscribe(cd => {
      this.companyDetails = cd;
      this.isSearching = false;
    });
  }

  getCompanyAnalyze(companyDetail: CompanyDetail){
    this.companySelectedEvent.emit(companyDetail);
    this.openaiService.getCompanyAnalyze(companyDetail);
  }

  sendRequest(){
    this.isSearching = true;
    this.openaiService.getCompanySelector(this.search);
  }
}
export { CompanyDetail };

