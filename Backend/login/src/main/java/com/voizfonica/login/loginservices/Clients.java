package com.voizfonica.login.loginservices;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Clients")
public class Clients {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String username;
	String email;
	String usertype;
	String mobilenumber;
	int otp;
	String password;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsertype() {
		return usertype;
	}
	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	public String getMobilenumber() {
		return mobilenumber;
	}
	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}
	public int getOtp() {
		return otp;
	}
	public void setOtp(int otp) {
		this.otp = otp;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Clients(int id, String username, String email, String usertype, String mobilenumber, int otp,
			String password) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.usertype = usertype;
		this.mobilenumber = mobilenumber;
		this.otp = otp;
		this.password = password;
	}
	public Clients() {
		super();
	}
	@Override
	public String toString() {
		return "Clients [id=" + id + ", username=" + username + ", email=" + email + ", usertype=" + usertype
				+ ", mobilenumber=" + mobilenumber + ", otp=" + otp + ", password=" + password + "]";
	}
	
	
	

}