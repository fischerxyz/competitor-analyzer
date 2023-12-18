export class CompetitorReview{
  name?: string;
  location?: string;
  size?: string;
  revenue?: string;
  employee_count?: string;
  business_area?: string;

  constructor(name: string, location: string, size: string, revenue: string, employee_count: string, business_area: string){
    this.name = name;
    this.location = location;
    this.size = size;
    this.revenue = revenue;
    this.employee_count = employee_count;
    this.business_area = business_area;
  }
}

export class CompetitorReviews{
  competitors: CompetitorReview[];

  constructor(){
    this.competitors = [];
  }
}