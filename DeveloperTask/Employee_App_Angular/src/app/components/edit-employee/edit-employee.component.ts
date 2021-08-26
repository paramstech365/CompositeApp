import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/entities/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
   private employee: Employee;
   valid = true;
   validMsg = 'error';
  constructor(private service: EmployeeService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  public onSubmit() {
      console.log(this.service.editEmployee);
      this.service.save(this.service.editEmployee).subscribe(response => {
            if (response === undefined) {
              this.validMsg = 'error while saving data';
              this.valid = false;
            } else {
              this.validMsg = '';
              this.valid = true;
              this.service.editEmployee = null;
              this.router.navigate(['dashboard']);
            }
      });
  }

  public goToDashBoard() {
    this.router.navigate(['dashboard']);
  }

}
