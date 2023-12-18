export class TrendAnalyze{
  name?: string;
  description?: string;

  constructor(name: string, description: string){
    this.name = name;
    this.description = description;
  }
}

export class TrendAnalyzes{
  trendAnalyzes: TrendAnalyze[];

  constructor(){
    this.trendAnalyzes = [];
  }
}

