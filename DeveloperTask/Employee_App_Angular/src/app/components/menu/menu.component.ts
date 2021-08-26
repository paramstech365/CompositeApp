import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service: EmployeeService) {

	}

  ngOnInit() {

  }

	isUserLoggedIn(): boolean {
		return this.service.isUserLoggedIn();
	}

	logout(): void {
		this.service.logout();
	}
}
