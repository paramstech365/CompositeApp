package com.compositeapp.app.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.compositeapp.app.entities.Employee;
import com.compositeapp.app.repositories.EmployeeRepository;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

	
	private final EmployeeRepository rep;
	
	@Autowired
	@Lazy
	public EmployeeServiceImpl(final EmployeeRepository rep) {
		this.rep = rep;
	}
	
	@Override
	public List<Employee> listEmployees() {
		return Collections.unmodifiableList(this.rep.findAll());
	}
	
	@Override
	public Employee getEmployee(final int id) {
		try {
			return this.rep.findById(id).get();
		}catch(Exception e) {
			return null;
		}
		
	}
	
	@Override
	public Employee saveEmployee(final Employee person) {
		return this.rep.save(person);
	}
	
	@Override
	public void deleteEmployee(final int id) {
		this.rep.deleteById(id);
	}
	@Override
	public  List<Employee> searchEmployee(Employee employee) {
		List<Employee> list=new ArrayList<Employee>();
		if(employee!=null && employee.getId()>0 && employee.getName()!=null && !"".equalsIgnoreCase(employee.getName().trim())) {
			return 	this.rep.findByIdAndName(employee.getId(), employee.getName());
		}else if (employee!=null && employee.getId()>0) {
			Employee e=getEmployee(employee.getId());
			if(e!=null)list.add(e);
			return list;
		}else if (employee.getName()!=null && !"".equalsIgnoreCase(employee.getName().trim())) {
			return this.rep.findByName(employee.getName());
		}else {
			return this.rep.findAll();
		}
	}
	
	
// End Class
}









