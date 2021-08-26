package com.compositeapp.app.services;

import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.compositeapp.app.entities.User;
import com.compositeapp.app.repositories.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	
	private final UserRepository rep;
	
	@Autowired
	@Lazy
	public UserServiceImpl(final UserRepository rep) {
		this.rep = rep;
	}
	@Override
	public  User getUser(final String userName) {
		try {
			return this.rep.findById(userName).get();
		}catch(NoSuchElementException e) {
			return null;
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		
		
	}
}









