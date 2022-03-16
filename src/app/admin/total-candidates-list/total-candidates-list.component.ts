import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-total-candidates-list',
  templateUrl: './total-candidates-list.component.html',
  styleUrls: ['./total-candidates-list.component.css']
})
export class TotalCandidatesListComponent implements OnInit {




  candidates: any;

  constructor(private api: ApiService, private cookie: CookieService, private router: Router) {
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    let apiurl = "candidates/list";
    let data = this.api.post(apiurl, {});
    data.subscribe((mydata: any) => {
      this.candidates = mydata.data;
      console.log(this.candidates);
    });
  }

  delete(id: string) {
    if (confirm("Sure to delete?")) {
      let apiurl = "candidates/delete";
      let data = this.api.post(apiurl, { data: { id: id } });
      data.subscribe((mydata: any) => {
        this.list();
      });
    }
  }

}