package com.VoizFonica.plans.entity;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

public class Email {

	public void generateEmail() throws AddressException, MessagingException {
		SNMPSetup.setMailServerProperties();
//		CreateEmail.createEmailMessage();
		SendEmail.sendEmail();
	}

}
