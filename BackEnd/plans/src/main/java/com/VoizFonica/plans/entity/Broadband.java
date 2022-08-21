package com.VoizFonica.plans.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="broadband")
public class Broadband {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String sim;
	double price;
	String data;
	int speed;
	String calls;
	public Broadband(int id, String sim, double price, String data, int speed, String calls) {
		super();
		this.id = id;
		this.sim = sim;
		this.price = price;
		this.data = data;
		this.speed = speed;
		this.calls = calls;
	}
	public Broadband() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSim() {
		return sim;
	}
	public void setSim(String sim) {
		this.sim = sim;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public int getSpeed() {
		return speed;
	}
	public void setSpeed(int speed) {
		this.speed = speed;
	}
	public String getCalls() {
		return calls;
	}
	public void setCalls(String calls) {
		this.calls = calls;
	}
	@Override
	public String toString() {
		return "Broadband [id=" + id + ", sim=" + sim + ", price=" + price + ", data=" + data + ", speed=" + speed
				+ ", calls=" + calls + "]";
	}
}
