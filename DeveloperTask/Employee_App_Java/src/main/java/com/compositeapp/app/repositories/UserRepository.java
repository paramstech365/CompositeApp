package com.compositeapp.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.compositeapp.app.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
// Begin Interface
	
	
	
// End Interface
}






