package com.VoizFonica.plans.entity;

import javax.mail.MessagingException;
import javax.mail.Transport;
import javax.mail.internet.AddressException;

public class SendEmail 
{

	public static void sendEmail() throws AddressException, MessagingException {

		String emailHost = "smtp.gmail.com";
		
		String fromUser = "akshai.narayanappa@gmail.com";
		String fromUserEmailPassword = "pcempeemmnradkyc";
		
		System.out.println("\n\nSender of Email is "+ fromUser);
		
		
		Transport transport = CreateEmail.mailSession.getTransport("smtp");

		transport.connect(emailHost, fromUser, fromUserEmailPassword);
		transport.sendMessage(CreateEmail.emailMessage, CreateEmail.emailMessage.getAllRecipients());
		transport.close();
		System.out.println("please check your Email to see sent mail.");
	}
	
}

