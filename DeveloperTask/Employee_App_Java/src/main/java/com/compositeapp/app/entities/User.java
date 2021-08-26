package com.compositeapp.app.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.Immutable;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


@Entity
@Table(name = "Users")
@Immutable
@JsonPropertyOrder(value = {"username", "password"})
public final class User implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@JsonProperty(value = "username")
	@Column(name = "username")
	private String username;
	
	@JsonProperty(value = "password")
	@Column(name = "password")
	private String password;
	
	
	
	public User() {
		
	}
	
	public User(String userName, String password) {
		this.username = userName;
		this.password = password;
	}
	
	
	@Override
	public String toString() {
		return "User [userName=" + username + ", password=" + password +"]";
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
}
