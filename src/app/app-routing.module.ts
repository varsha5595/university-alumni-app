import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobListingComponent } from './job-listing/job-listing.component';


const routes: Routes = [
  { path: 'job-posting', component:  JobListingComponent},
  { path: '**', redirectTo: 'job-posting', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
