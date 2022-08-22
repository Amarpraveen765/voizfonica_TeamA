package com.VoizFonica.plans.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailMessage;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.VoizFonica.plans.entity.Mobile;
import com.VoizFonica.plans.repository.EmailRepository;
import com.VoizFonica.plans.repository.MobileRepository;

@RestController
@CrossOrigin	
@Service
@Component
public class MobileController {

	@Autowired
	private MobileRepository mobileRepository;
	
	

	@GetMapping("/getPlans")
	public List<Mobile> getAllPlans() {
		return mobileRepository.findAll();
	}

	// create employee rest api
	@PostMapping("/addPlans")
	public Mobile createPlans(@RequestBody Mobile plans) {
		return mobileRepository.save(plans);
	}

	// delete customer
	@DeleteMapping("/deletePlans/{id}")
	public void deletePlans(@PathVariable("id") int id) {
		mobileRepository.deleteById(id);

	}

	@GetMapping("/update/{id}/{data}")
	public ResponseEntity<List<Mobile>> mobilecheck(@PathVariable("id") int id, @PathVariable("data") double data) {
		List<Mobile> ar = mobileRepository.findAll();
		ArrayList al = new ArrayList<Mobile>(ar);
		for (Mobile c : ar) {
//			System.out.println("Plan records are :" + c);
			if (c.getId() == id) {
//				System.out.println("authorized to change");
				c.setData(data);
				mobileRepository.save(c);
				System.out.println("After change:" + c);
				break;
			} else {
				System.out.println("Id Does not Match");
//				System.out.println("You are not authorized to change");
			}

		}
		return ResponseEntity.ok(ar);

	}

	@GetMapping("/update/{id}")
	public Optional<Mobile> getmobile(@PathVariable("id") int id) {

		return mobileRepository.findById(id);

	}

//	@PostMapping("/email")
//	public void setMailSender(MailSender mailSender) {
//		this.mailSender = mailSender;
//	}
	
//
//	@GetMapping("/sendemail")
//	public void sendEmail(String toEmail, String subject, String body) {
//		SimpleMailMessage message = new SimpleMailMessage();
//		message.setFrom("akshai.narayanappa@gmail.com");
//		message.setTo(toEmail);
//		message.setText(body);
//		message.setSubject(subject);
//    	 MailMail leaveEmail=new MailMail();
//    	 //set the mailSender to the MailMail class
//    	 mailSender.setMailSender(mailSender);
//    	 message.setMailSender(mailSender);

//		mailSender.send(message);
//
//		System.out.println("Mail Sent successfully");
//	}

	

	

}
