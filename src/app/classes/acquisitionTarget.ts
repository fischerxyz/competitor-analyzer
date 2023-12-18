export class AcquisitionTarget{
    name?: string;
    description?: string;
    location?: string;
    patents?: string;
    revenue?: string;
  
    constructor(name: string, description: string, location: string, patents: string, revenue: string){
      this.name = name;
      this.description = description;
      this.location = location;
      this.patents = patents;
      this.revenue = revenue;
    }
  }

export class AcquisitionTargets{
  acquisitionTargets: AcquisitionTarget[];

  constructor(){
    this.acquisitionTargets = [];
  }
}

