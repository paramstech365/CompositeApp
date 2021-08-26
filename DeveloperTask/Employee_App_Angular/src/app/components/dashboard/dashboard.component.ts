import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/entities/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employeeID: number;
	employeeName: string;
  headers = ['ID', 'NAME', 'PHONE NUMBER', 'SUPERVISOR', '', ''];
	listemployees: Employee[];
	now: Date = new Date();

  constructor(private service: EmployeeService, private router: Router) { }
  reloadData(): void {
	/*	this.service.findAll().subscribe(
			response => {
				this.listemployees = response;
			}
		);
    */
   const employee: Employee = new Employee(this.employeeID, this.employeeName, '', '');
   this.service.searchEmployee(employee).subscribe(
			response => {
				this.listemployees = response;
			}
		);
	}
  ngOnInit() {
    this.reloadData();
  }

  public onSubmit() {
    const employee: Employee = new Employee(this.employeeID, this.employeeName, '', '');
    this.service.searchEmployee(employee).subscribe(
			response => {
				this.listemployees = response;
			}
		);
   }


   public editEmployee(employee: Employee) {
      console.log(employee);
      this.service.editEmployee = employee;
      this.router.navigate(['edit']);
   }

     public createNew() {
      console.log('create new');
      this.service.editEmployee = new Employee(-1, '', '', '');
      this.router.navigate(['edit']);
   }

   public deleteEmployee(employee: Employee) {
            console.log(employee.id);
            this.service.deleteById(employee.id).subscribe(data =>{
              this.reloadData();
            });


      }
  /*this.validateUser(user).subscribe( (response: Usertoken) => {
       console.log(response.username);
       console.log(response.jwtToken);
       sessionStorage.setItem('userAuth', response.jwtToken);
       console.log(response);
		     if (response.jwtToken !== '') {
			this.valid = true;
			this.validMsg = '';
			console.log('Login Success');
			this.router.navigate(['dashboard']);
		} else {
      console.log('Failed ');
      this.valid = false;
			   this.validMsg = 'Invalid UserName and  Password';
			   console.log(this.validMsg );
		}
    }
    );
*/


}
