export class NewMarket{
  name?: string;
  description?: string;

  constructor(name: string, description: string){
    this.name = name;
    this.description = description;
  }
}

export class NewMarkets{
  newMarkets: NewMarket[];

  constructor(){
    this.newMarkets = [];
  }
}
