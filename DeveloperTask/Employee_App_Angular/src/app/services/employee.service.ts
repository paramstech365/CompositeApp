import { Injectable } from '@angular/core';
import { Employee } from '../entities/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { Usertoken } from '../entities/usertoken';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private listEmployees: Employee[];
  public editEmployee: Employee;
	private url: string;
  private validateUrl: string;

  constructor(private http: HttpClient) {
		this.url = 'http://localhost:8080/api/employees';
	}
	public findAll(): Observable<Employee[]> {
		return this.http.get<Employee[]>(this.url);
	}
  public searchEmployee(employee: Employee): Observable<Employee[]> {
		return this.http.post<Employee[]>(this.url + '/search', employee);
	}


  public validateUser(user: User): Observable<Usertoken> {
		return this.http.post<Usertoken>(this.validateUrl, user);
	}

	public save(employee: Employee): Observable<Employee> {
		return this.http.post<Employee>(this.url + '/save', employee);
	}
	public deleteById(id: number): Observable<void> {
    console.log(id);
		  return this.http.delete<void>(this.url + '/delete/' + id);
	}

  isUserLoggedIn(): boolean {
		const user = sessionStorage.getItem('userAuth');
		return !(user === null);
	}

	logout(): void {
		sessionStorage.removeItem('userAuth');
	}
}
