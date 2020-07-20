import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component'
import { NoFoundComponent } from './no-found/no-found.component'


const routes: Routes = [
  { path:'', component:MainPageComponent },
  { path:'**', component:NoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
