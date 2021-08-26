package com.compositeapp.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.compositeapp.app.entities.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
// Begin Interface
	 List<Employee> findByName( String name);
	 List<Employee> findByIdAndName(int id, String name);
	
// End Interface
}






