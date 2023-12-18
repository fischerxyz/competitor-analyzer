export class CompanyDetail{
    name?: string;
    business_area?: string;
    employee_count?: string;
    size?: string;
  
    constructor(name: string, business_area: string, employee_count: string, size: string){
      this.name = name;
      this.business_area = business_area;
      this.employee_count = employee_count;
      this.size = size;
    }
}

export class CompanyDetails{
  companies: CompanyDetail[];

  constructor(){
    this.companies = [];
  }
}

