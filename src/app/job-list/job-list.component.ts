import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CookieService } from '../cookie.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})

export class JobListComponent implements OnInit {

  job_list:any;
  candidates:any;
  id:string | null = "";
  jobid:any;

  constructor(private api:ApiService, private cookie: CookieService, private router: Router , private activatedRoute:ActivatedRoute) {
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
      console.log(this.job_list)
    });
  }


  apply=(jobid:string)=>{
    // alert(jobid)
    this.cookie.set("jobid",jobid);
    
    let candidateid = this.cookie.get("userid");
    if(candidateid == "")
    {
      this.router.navigate(["/login"]);
    }
    else{
      this.router.navigate(["/post-resume"])
      
    }
     
  }
    
}

