package com.VoizFonica.plans.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity 
@Table (name = "Email")
public class Mail {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String[] Email;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String[] getEmail() {
		return Email;
	}
	public void setEmail(String[] email) {
		Email = email;
	}
	public Mail(int id, String[] email) {
		super();
		this.id = id;
		Email = email;
	}
	public Mail() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Mail [id=" + id + ", Email=" + Email + "]";
	}
	

}
