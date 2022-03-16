import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { ApiService } from 'src/app/api.service';
  import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-live-jobs',
  templateUrl: './live-jobs.component.html',
  styleUrls: ['./live-jobs.component.css']
})
export class LiveJobsComponent implements OnInit {

  
  
  job_list:any;
  
    constructor(private api:ApiService, private cookie:CookieService, private router: Router) {
    }
  
    ngOnInit(): void {
      this.list();
    }
  
    list()
    {
      let apiurl = "joblist/list";
      let data = this.api.post(apiurl, {});
      data.subscribe((mydata: any) => {
        this.job_list= mydata.data;
        console.log(this.job_list);
      });
    }
  
    delete(id:string)
    {
      if(confirm("Sure to delete?"))
      {
        let apiurl = "joblist/delete";
      let data = this.api.post(apiurl, {data:{id:id}});
      data.subscribe((mydata: any) => {
        this.list();
      });
      }
    }
  
  }