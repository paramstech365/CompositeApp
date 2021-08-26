package com.compositeapp.app.entities;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder(value = {"username", "password"})
public class UserToken implements Serializable  {
		/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
		public String username;
		public String jwtToken;
		
		public UserToken(){
			
		}
		public UserToken(String username, String token){
			this.username =username;
			this.jwtToken = token;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getJwtToken() {
			return jwtToken;
		}
		public void setJwtToken(String jwtToken) {
			this.jwtToken = jwtToken;
		}
		
}