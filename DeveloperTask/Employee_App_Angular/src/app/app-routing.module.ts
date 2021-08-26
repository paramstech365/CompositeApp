import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';


const routes: Routes = [
	{path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'edit', component: EditEmployeeComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


