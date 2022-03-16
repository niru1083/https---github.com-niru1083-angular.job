import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-post-resume',
  templateUrl: './post-resume.component.html',
  styleUrls: ['./post-resume.component.css']
})
export class PostResumeComponent implements OnInit {

  resume: any;
  id:string | null = "";
  // candidates:any;
  // jobid:any;

  

  constructor(private api:ApiService, private cookie: CookieService, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  joblistid:any;

  ngOnInit(): void {
    
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    // alert(this.id)
    if(this.id != "0")
    {
      let apiurl = "joblist/get";
      let data = this.api.post(apiurl, { data: { id: this.id } });
      data.subscribe((mydata: any) => {
        this.resume = mydata.data;
        this.show();
      });
    }
 
    this.show();
   
  }
  
  
  show = ()=>{
    let candidateid = this.cookie.get("userid");
    let jobid = this.cookie.get("jobid");
  
    this.joblistid = jobid;
    
    

    
    this.resume = new FormGroup({
      id: new FormControl(this.resume == null ? "" : this.resume._id),
      joblistid: new FormControl(this.resume == null ? "" : this.resume.joblistid, Validators.compose([Validators.required])),
      // candidatesid: new FormControl(this.resume == null ? "" : this.resume.candidatesid, Validators.compose([Validators.required])),
      name: new FormControl(this.resume == null ? "" : this.resume.name, Validators.compose([Validators.required])),
      AdditionalInformation: new FormControl(this.resume == null ? "" : this.resume.AdditionalInformation, Validators.compose([Validators.required])),
      photocode: new FormControl(this.resume == null ? "" : this.resume.photocode, Validators.compose([Validators.required])),
      objective: new FormControl(this.resume == null ? "" : this.resume.objective, Validators.compose([Validators.required])),
      Fathername: new FormControl(this.resume == null ? "" : this.resume.Fathername, Validators.compose([Validators.required])),
      mothername: new FormControl(this.resume == null ? "" : this.resume.mothername, Validators.compose([Validators.required])),
      bdate: new FormControl(this.resume == null ? "" : this.resume.bdate, Validators.compose([Validators.required])),
      bplace: new FormControl(this.resume == null ? "" : this.resume.bplace, Validators.compose([Validators.required])),
      nationality: new FormControl(this.resume == null ? "" : this.resume.nationality, Validators.compose([Validators.required])),
      sex: new FormControl(this.resume == null ? "" : this.resume.sex, Validators.compose([Validators.required])),
      address: new FormControl(this.resume == null ? "" : this.resume.address, Validators.compose([Validators.required])),
      declaration: new FormControl(this.resume == null ? "" : this.resume.declaration, Validators.compose([Validators.required])),
      
    });
  }
  
  submit = (resume: any) => {
    let apiurl = "joblist/save";
    let data = this.api.post(apiurl, { data: resume });
    data.subscribe((mydata: any) => {
      this.router.navigate(["/job-list"]);
    });
    // jobid(){
    //   let apiurl = "joblist/get";
    //   let data = this.api.post(apiurl, { data: { id: this.id } });
    //   data.subscribe((mydata: any) => {
    //     this.resume = mydata.data._id;
    //     alert(this.jobid)
    
    // }
  }
}
