package com.compositeapp.app.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.compositeapp.app.entities.Employee;
import com.compositeapp.app.services.EmployeeService;

@RestController
@CrossOrigin
@RequestMapping("/api/employees")
public class EmployeeRestController {
// Begin Class
	
	private final EmployeeService service;
	
	@Autowired
	@Lazy
	public EmployeeRestController(final EmployeeService service) {
		this.service = service;
	}
	
	@GetMapping(value = {"","/"})
	public List<Employee> listEmployees() {
		return this.service.listEmployees();
	}
	
	@GetMapping(value = {"/{id}"})
	public Employee getEmployeeByID(@PathVariable("id") @Valid final Integer id) {
		return this.service.getEmployee(id);
	}
	
	@PostMapping(value = {"","/save"})
	public Employee saveEmployee(@RequestBody @Valid final Employee employee) {
		System.out.println(employee.toString());
		if(employee!=null && employee.getId()<0) {
			Employee e=new Employee(employee.getName(), employee.getPhoneNumber(), employee.getSupervisor());
			return this.service.saveEmployee(e);
		}else {
			return this.service.saveEmployee(employee);	
		}
		
		
	}
	
	@PostMapping(value = {"","/search"})
	public List<Employee> searchEmployee(@RequestBody @Valid final Employee employee) {
		System.out.println(employee.toString());
		return this.service.searchEmployee(employee);
	}
	
	
	
	@DeleteMapping(value = {"{id}","/delete/{id}"})
	public void deletePerson(@PathVariable("id") @Valid final Integer id) {
		this.service.deleteEmployee(id);
	}
	
	
	
// End Class
}









