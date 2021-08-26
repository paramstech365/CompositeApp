package com.compositeapp.app.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.compositeapp.app.entities.User;
import com.compositeapp.app.entities.UserToken;
import com.compositeapp.app.services.UserService;

@RestController
@CrossOrigin
@RequestMapping("/validate")
public class UserRestController {
	private final UserService service;
	
	@Autowired
	@Lazy
	public UserRestController(final UserService service) {
		this.service = service;
	}
	
	
	@PostMapping(value = {"","/"})
	public UserToken validateUser(@RequestBody @Valid final User user) {
		
		User u= this.service.getUser(user.getUsername());
	
		if(u!=null && u.getPassword()!=null && u.getPassword().equalsIgnoreCase(user.getPassword())) {
			return new UserToken(user.getUsername(), "SomeToken");
		}else {
			return new UserToken(user.getUsername(), "");
		}
	}
	

}









