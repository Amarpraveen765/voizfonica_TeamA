package com.voizfonica.emailservice.sendingmail;

public class emaildata {
	String to;
	int otp;
	public emaildata(String to, int otp) {
		super();
		this.to = to;
		this.otp = otp;
	}
	public emaildata() {
		super();
	}
	@Override
	public String toString() {
		return "emaildata [to=" + to + ", otp=" + otp + "]";
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public int getOtp() {
		return otp;
	}
	public void setOtp(int otp) {
		this.otp = otp;
	}
	

}
