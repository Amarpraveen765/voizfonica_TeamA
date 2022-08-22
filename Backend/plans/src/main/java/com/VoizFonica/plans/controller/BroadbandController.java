package com.VoizFonica.plans.controller;

import java.util.ArrayList;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.VoizFonica.plans.entity.Broadband;
import com.VoizFonica.plans.entity.CreateEmail;
import com.VoizFonica.plans.entity.Email;
import com.VoizFonica.plans.entity.SNMPSetup;
import com.VoizFonica.plans.entity.SendEmail;
import com.VoizFonica.plans.repository.BroadbandRepository;
import com.VoizFonica.plans.repository.EmailRepository;


@RestController
@CrossOrigin
public class BroadbandController {
	
	
	@Autowired
    private BroadbandRepository broadbandRepository;
	private Email email;
	private EmailRepository mail;
	 
	 
	 @GetMapping("/getBroadbandPlans")
    public List<Broadband> getAllPlans(){
        return broadbandRepository.findAll();
    }      

    // create employee rest api
    @PostMapping("/addBroadbandPlans")
    public Broadband createPlans(@RequestBody Broadband plans) {
        return broadbandRepository.save(plans);
    }
    
    // delete customer 
    @DeleteMapping("/deleteBroadbandPlans/{id}")
    public void deletePlans(@PathVariable("id") int id) {
    	   broadbandRepository.deleteById(id);
         
    }

    
    @GetMapping("/updateBroadband/{id}/{speed}")
    public ResponseEntity<List<Broadband>> mobilecheck(@PathVariable("id") int id,@PathVariable("speed") int speed) {
        List<Broadband> ar = broadbandRepository.findAll();
        ArrayList al = new ArrayList<Broadband>(ar);
        for(Broadband c: ar) {
        	System.out.println("Plan records are :"+c);
            if(c.getId()==id) {
                System.out.println("authorized to change");
                c.setSpeed(speed);
                broadbandRepository.save(c);
                System.out.println("After change:"+c);
                break;
            }else {
            	System.out.println("You are not authorized to change");
            }

        }
        return ResponseEntity.ok(ar);

    }
    @GetMapping("sendMail/{mail}")
    public void mail(@PathVariable("mail") String[] mail) throws AddressException, MessagingException {
//    	String[]  tomail = {"akshaigowda01@gmail.com"}; 
    	SNMPSetup.setMailServerProperties();
		CreateEmail.createEmailMessage(mail);
		SendEmail.sendEmail();
    }

}
