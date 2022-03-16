import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userloggedin = true;
  name = "Niranjan";

  constructor(private cookieService: CookieService, private router:Router) { }

  ngOnInit(): void {
    console.log("Usertype:" + this.cookieService.get("usertype"));
    if(this.cookieService.get("usertype") == "")
    {
      this.userloggedin = false;
    }
    else{
      this.name = this.cookieService.get("name");
    }
  }
  logout=()=>{
    this.cookieService.delete("usertype");
    this.cookieService.delete("userid");
    this.cookieService.delete("name");
    this.cookieService.delete("authkey");
    window.location.href = "/login";
  }
}
