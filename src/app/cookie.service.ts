import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }
  set=(name:string,value:string)=>{
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 10);
    document.cookie = name + "=" + (value) + ";expires=" + exdate;

  }
  get=(name:string)=>{
    let cookie = document.cookie;
    let cookies = cookie.split(";");
    for(let i = 0; i < cookies.length; i++)
    {
      let mycookie = cookies[i].split('=');
      if(mycookie[0].trim() == name)
        return mycookie[1];
    }
    return "";

  }
  delete=(name:string)=>{
    var exdate = new Date();
    exdate.setDate(exdate.getDate() - 10);
    document.cookie = name + "=" + ("") + ";expires=" + exdate;


  }
  }