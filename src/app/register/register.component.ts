import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CookieService } from '../cookie.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  candidate: any;
  image:string="";
  resume:string="";


  constructor(private api: ApiService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.candidate = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", Validators.compose([Validators.required])),
      email: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required])),
      mobileno: new FormControl("", Validators.compose([Validators.required])),
      city: new FormControl("", Validators.compose([Validators.required])),
      address: new FormControl("", Validators.compose([Validators.required])),
      gender: new FormControl("", Validators.compose([Validators.required])),
      qualification: new FormControl("", Validators.compose([Validators.required])),
      explevel: new FormControl("", Validators.compose([Validators.required])),
      photopath: new FormControl("", Validators.compose([Validators.required])),
      resumepath: new FormControl("", Validators.compose([Validators.required])),
      authkey: new FormControl("", Validators.compose([Validators.required]))
    })
  }

  submit = (candidate: any) => {
    console.log(candidate);
    let apiurl = "candidates/save";
    let data = this.api.post(apiurl, { data: candidate });
    data.subscribe((mydata: any) => {
      this.router.navigate(["/"]);
    });
  }
  handleUpload(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = ()=>{
      if(reader.result != null)
        this.image = reader.result.toString();
      if(reader.result != null)
        this.resume = reader.result.toString();
    }
  }
}



