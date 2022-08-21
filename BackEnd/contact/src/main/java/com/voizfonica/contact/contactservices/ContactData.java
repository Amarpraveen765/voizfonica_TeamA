package com.voizfonica.contact.contactservices;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer_querys")
public class ContactData {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String cname;
	String email;
	String query;
	String message;
	String status;
	public ContactData(int id, String cname, String email, String query, String message, String status) {
		super();
		this.id = id;
		this.cname = cname;
		this.email = email;
		this.query = query;
		this.message = message;
		this.status = status;
	}
	public ContactData() {
		super();
	}
	@Override
	public String toString() {
		return "ContactData [id=" + id + ", cname=" + cname + ", email=" + email + ", query=" + query + ", message="
				+ message + ", status=" + status + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getQuery() {
		return query;
	}
	public void setQuery(String query) {
		this.query = query;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
}
