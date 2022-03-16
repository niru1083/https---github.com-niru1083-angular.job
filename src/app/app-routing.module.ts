import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AboutComponent } from './about/about.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ContactComponent } from './contact/contact.component';
import { LiveJobsAddComponent } from './admin/live-jobs-add/live-jobs-add.component';
import { LiveJobsComponent } from './admin/live-jobs/live-jobs.component';
import { TotalCompanyComponent } from './admin/total-company/total-company.component';
import { TotalCompanyAddComponent } from './admin/total-company-add/total-company-add.component';
import { TotalCandidatesListComponent } from './admin/total-candidates-list/total-candidates-list.component';
import { AppildeJobsComponent } from './appilde-jobs/appilde-jobs.component';
import { PostResumeComponent } from './post-resume/post-resume.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"",component:DashboardComponent},
  {path:"admin_login",component:AdminLoginComponent},
  {path:"admin_dashboard",component:AdminDashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"job-list",component:JobListComponent},
  {path:"job-details",component:JobDetailsComponent},
  {path:"contact",component:ContactComponent},
  {path:"live-jobs",component:LiveJobsComponent},
  {path:"live-jobs-add",component:LiveJobsAddComponent},
  {path:"total-company",component:TotalCompanyComponent},
  {path:"total-company-add/:id",component:TotalCompanyAddComponent},
  {path:"total-candidates-list",component:TotalCandidatesListComponent},
  {path:"appilde-jobs",component:AppildeJobsComponent},
  {path:"post-resume",component:PostResumeComponent}

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
