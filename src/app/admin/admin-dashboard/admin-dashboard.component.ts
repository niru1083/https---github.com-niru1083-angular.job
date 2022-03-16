import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  jobcount = 0;
  candidatcount = 0;
  Companycount = 0;

  constructor(private api:ApiService, private cookie:CookieService, private router: Router) { }

  ngOnInit(): void {

    // auto count
    {
      let apiurl = "joblist/list";
      let data = this.api.post(apiurl, {});
      data.subscribe((mydata: any) => {
        this.jobcount = mydata.data.length;
      });
   }
        // End auto count
    
   { 
      let apiurl = "candidates/list";
      let data = this.api.post(apiurl, {});
      data.subscribe((mydata: any) => {
        this.candidatcount = mydata.data.length;
      });
    }


   { 
      let apiurl = "companies/list";
      let data = this.api.post(apiurl, {});
      data.subscribe((mydata: any) => {
        this.Companycount = mydata.data.length;
      });
    }
  }
  
}
