import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-live-jobs-add',
  templateUrl: './live-jobs-add.component.html',
  styleUrls: ['./live-jobs-add.component.css']
})
export class LiveJobsAddComponent implements OnInit {
  
 
    job_list: any;
    id:string | null = "";
  
    constructor(private api:ApiService, private cookie: CookieService, private router: Router, private activatedRoute: ActivatedRoute) {
    }
  
    ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.paramMap.get("id");
      if(this.id != "0")
      {
        let apiurl = "joblist/get";
        let data = this.api.post(apiurl, { data: { id: this.id } });
        data.subscribe((mydata: any) => {
          this.job_list = mydata.data;
          this.show();
        });
      }
      this.show();
    }
  
    show = ()=>{
      this.job_list = new FormGroup({
        id: new FormControl(this.job_list == null ? "" : this.job_list._id),
        companyid: new FormControl(this.job_list == null ? "" : this.job_list.companyid, Validators.compose([Validators.required])),
        title: new FormControl(this.job_list == null ? "" : this.job_list.title, Validators.compose([Validators.required])),
        content: new FormControl(this.job_list == null ? "" : this.job_list.content, Validators.compose([Validators.required])),
        description: new FormControl(this.job_list == null ? "" : this.job_list.description, Validators.compose([Validators.required])),
        location: new FormControl(this.job_list == null ? "" : this.job_list.location, Validators.compose([Validators.required])),
        package: new FormControl(this.job_list == null ? "" : this.job_list.package, Validators.compose([Validators.required])),
        createdate: new FormControl(this.job_list == null ? "" : this.job_list.createdate, Validators.compose([Validators.required])),
        qualificationreq: new FormControl(this.job_list == null ? "" : this.job_list.qualificationreq, Validators.compose([Validators.required])),
        time: new FormControl(this.job_list == null ? "" : this.job_list.time, Validators.compose([Validators.required])),
       
      });
    }
  
    submit = (job_list: any) => {
      let apiurl = "joblist/save";
      let data = this.api.post(apiurl, { data: job_list });
      data.subscribe((mydata: any) => {
        this.router.navigate(["/live-jobs"]);
      });
    }
  }
  