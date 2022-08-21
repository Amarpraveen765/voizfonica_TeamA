package com.VoizFonica.plans.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "mobile")
public class Mobile {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String sim;
	int price;
	String calls;
	int sms;
	double data;
	int days;
	int addon;
	
	public Mobile() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Mobile(int id, String sim, int price, String calls, int sms, double data, int days, int addon) {
		super();
		this.id = id;
		this.sim = sim;
		this.price = price;
		this.calls = calls;
		this.sms = sms;
		this.data = data;
		this.days = days;
		this.addon = addon;
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

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getCalls() {
		return calls;
	}

	public void setCalls(String calls) {
		this.calls = calls;
	}

	public int getSms() {
		return sms;
	}

	public void setSms(int sms) {
		this.sms = sms;
	}

	public double getData() {
		return data;
	}

	public void setData(double data) {
		this.data = data;
	}

	public int getDays() {
		return days;
	}

	public void setDays(int days) {
		this.days = days;
	}

	public int getAddon() {
		return addon;
	}

	public void setAddon(int addon) {
		this.addon = addon;
	}

	@Override
	public String toString() {
		return "Mobile [id=" + id + ", sim=" + sim + ", price=" + price + ", calls=" + calls + ", sms=" + sms
				+ ", data=" + data + ", days=" + days + ", addon=" + addon + "]";
	}
	
	
	
}
