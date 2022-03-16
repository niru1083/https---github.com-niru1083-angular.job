import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  import { ApiService } from 'src/app/api.service';
  import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-total-company',
  templateUrl: './total-company.component.html',
  styleUrls: ['./total-company.component.css']
})
export class TotalCompanyComponent implements OnInit {

   
  company:any;
  
    constructor(private api:ApiService, private cookie:CookieService, private router: Router) {
    }
  
    ngOnInit(): void {
      this.list();
    }
  
    list()
    {
      let apiurl = "companies/list";
      let data = this.api.post(apiurl, {});
      data.subscribe((mydata: any) => {
        this.company= mydata.data;
        console.log(this.company);
      });
    }
  
    delete(id:string)
    {
      if(confirm("Sure to delete?"))
      {
        let apiurl = "companies/delete";
      let data = this.api.post(apiurl, {data:{id:id}});
      data.subscribe((mydata: any) => {
        this.list();
      });
      }
    }
  
  }