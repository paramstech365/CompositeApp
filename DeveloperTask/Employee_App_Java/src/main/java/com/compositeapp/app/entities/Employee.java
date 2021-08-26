package com.compositeapp.app.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

import org.springframework.data.annotation.Immutable;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@Entity
@Table(name = "Employee")
@Immutable
@JsonPropertyOrder(value = {"id", "name", "phoneNumber", "supervisor"})
public final class Employee implements Serializable {
// Begin Class
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonProperty(value = "id")
	@Column(name = "id")
	private int id;
	
	@JsonProperty(value = "name")
	@Column(name = "name")
	private String name;
	
	@JsonProperty(value = "phoneNumber")
	@Column(name = "phoneNumber")
	private String phoneNumber;
	
	@JsonProperty(value = "supervisor")
	@Column(name = "supervisor")
	private String supervisor;
	
	
	public Employee() {
		
	}
	
	public Employee(String name, String phoneNumber, String supervisor) {
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.supervisor = supervisor;
	}
	
	public Employee(int id,String name, String phoneNumber, String supervisor) {
		this.id=id;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.supervisor = supervisor;
	}
	
	
	
	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", phoneNumber=" + phoneNumber + ", supervisor=" + supervisor + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getSupervisor() {
		return supervisor;
	}

	public void setSupervisor(String supervisor) {
		this.supervisor = supervisor;
	}
	
	
	
	
// End Class
}









