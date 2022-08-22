package com.voizfonica.emailservice.sendingmail;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
@RequestMapping("/email")
public class Controller {
	
	@Autowired
	private EmailService emailService;


	@GetMapping("/sendotp/{otp}/{to}")
	public ResponseEntity<?> sendEmail(@PathVariable("otp") int otp,
			@PathVariable("to") String to) {
		System.out.println(otp);
		System.out.println(to);
		this.emailService.sendEmail(to, otp);
		return ResponseEntity.ok("email sent...");
	}
	

}
