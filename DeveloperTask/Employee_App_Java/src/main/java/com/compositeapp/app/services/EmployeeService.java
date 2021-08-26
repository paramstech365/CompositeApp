package com.compositeapp.app.services;

import java.util.List;

import com.compositeapp.app.entities.Employee;

public interface EmployeeService {
// Begin Interface
	
	public abstract List<Employee> listEmployees();
	public abstract Employee getEmployee(final int id);
	public abstract Employee saveEmployee(final Employee person);
	public abstract void deleteEmployee(final int id);
	public abstract List<Employee>  searchEmployee(Employee employee);
	
// End Interface
}





