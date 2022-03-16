import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FooterComponent } from './admin/footer/footer.component';
import { HeaderComponent } from './admin/header/header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ApiService } from './api.service';
import { CookieService } from './cookie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AboutComponent } from './about/about.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ContactComponent } from './contact/contact.component';
import { LiveJobsComponent } from './admin/live-jobs/live-jobs.component';
import { LiveJobsAddComponent } from './admin/live-jobs-add/live-jobs-add.component';
import { TotalCompanyComponent } from './admin/total-company/total-company.component';
import { TotalCompanyAddComponent } from './admin/total-company-add/total-company-add.component';
import { TotalCandidatesListComponent } from './admin/total-candidates-list/total-candidates-list.component';
import { AppildeJobsComponent } from './appilde-jobs/appilde-jobs.component';
import { PostResumeComponent } from './post-resume/post-resume.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,    
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AboutComponent,
    JobListComponent,
    JobDetailsComponent,
    ContactComponent,
    LiveJobsComponent,
    LiveJobsAddComponent,
    TotalCompanyComponent,
    TotalCompanyAddComponent,
    TotalCandidatesListComponent,
    AppildeJobsComponent,
    PostResumeComponent,
    
    
  
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
