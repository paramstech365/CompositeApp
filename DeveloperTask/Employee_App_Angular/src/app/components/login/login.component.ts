import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/entities/user';
import { Usertoken } from 'src/app/entities/usertoken';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
	password: string;
	valid = true;
	validMsg = 'error';
  private validateUrl: string;
  constructor(private service: EmployeeService, private router: Router, private http: HttpClient) {
    this.validateUrl = 'http://localhost:8080/validate/';
	}

  ngOnInit(): void {

  }


public validateUser(user: User): Observable<Usertoken> {
  return this.http.post<Usertoken>(this.validateUrl, user);
}

	public onSubmit() {

    const user: User = new User(this.username, this.password);
    this.validateUser(user).subscribe( (response: Usertoken) => {
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

	}

}
