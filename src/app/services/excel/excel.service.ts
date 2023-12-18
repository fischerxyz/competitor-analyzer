import { Injectable } from '@angular/core';
import { AcquisitionTarget } from 'src/app/classes/acquisitionTarget';
import { CompetitorReview } from 'src/app/classes/competitorReview';
import { NewMarket } from 'src/app/classes/newMarket';
import { TrendAnalyze } from 'src/app/classes/trendAnalyze';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor() { }

  exportExcel(fileName: string, acquisitionTargets: AcquisitionTarget[], competitorReviews: CompetitorReview[], newMarkets: NewMarket[], trendAnalyze: TrendAnalyze[]): void
  {
    console.log("Export");
    const wsAcquisitionTarget: XLSX.WorkSheet = XLSX.utils.json_to_sheet(acquisitionTargets);
    const wsCompetitorReview: XLSX.WorkSheet = XLSX.utils.json_to_sheet(competitorReviews);
    const wsNewMarket: XLSX.WorkSheet = XLSX.utils.json_to_sheet(newMarkets);
    const wsTrendAnalyze: XLSX.WorkSheet = XLSX.utils.json_to_sheet(trendAnalyze);
 
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
 
    XLSX.utils.book_append_sheet(wb, wsCompetitorReview, 'Competitor Review');
    XLSX.utils.book_append_sheet(wb, wsTrendAnalyze, 'Trend Research');
    XLSX.utils.book_append_sheet(wb, wsNewMarket, 'New Market Identification');
    XLSX.utils.book_append_sheet(wb, wsAcquisitionTarget, 'M&A Target Scouting');
 
    XLSX.writeFile(wb, fileName + ".xlsx");
  }
}
