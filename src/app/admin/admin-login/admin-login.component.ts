import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {


  user: any;

  constructor(private router: Router, private api: ApiService, private cookie: CookieService) {

  }



  ngOnInit(): void {
    this.user = new FormGroup({
      email: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))


    })

  }
  submit = (user: any) => {

    // this.router.navigate(["/admin/dashboard"]);
    let apiurl = "admin_authentication/admin_login";
    let data = this.api.post(apiurl,
      {
        data: user
      });
    data.subscribe((mydata: any) => {
      console.log(mydata);
      console.log(data);


      if (mydata.data.status == "success") {
        this.cookie.set("usertype", "admin");
        this.cookie.set("authkey", mydata.data.authkey);
        this.router.navigate(["/admin_dashboard"]);

      }
      else {
        alert("invalid email or password")
      }
    });


  }
}