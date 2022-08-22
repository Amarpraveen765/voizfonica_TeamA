package com.VoizFonica.plans.entity;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class CreateEmail {
	static Session mailSession;
	static MimeMessage emailMessage;

	public static void createEmailMessage(String[] tomail ) throws AddressException, MessagingException {
		String[] toEmails = tomail;
		System.out.println("Receviers who will receive the mail are ");

		for (int i = 0; i < toEmails.length; i++) {
			System.out.println(toEmails[i]);
		}
		
		String emailSubject = "Your plan is expiring soon";
		String emailBody = "Your Plan will expire soon. Recharge as soon as possible."
				+"   "
				+ "   Click Here to recharge : http://localhost:4200/prepaid";

		mailSession = Session.getDefaultInstance(SNMPSetup.emailProperties, null);
		emailMessage = new MimeMessage(mailSession);

		for (int i = 0; i < toEmails.length; i++) {
			emailMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(toEmails[i]));
		}

		emailMessage.setSubject(emailSubject);
		emailMessage.setContent(emailBody, "text/html");// for a html email
	}

}

