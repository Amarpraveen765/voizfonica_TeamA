package com.voizfonica.contact.contactservices;

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
@RequestMapping("/contact")
public class Controller {

	@Autowired
	private CustomrRepository customrRepository;

	// Get All Clients::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	@GetMapping("/getquery")
	public List<ContactData> getAllClients() {
		return customrRepository.findAll();

	}

	// Create Client::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	@PostMapping("/addquery")
	public ContactData createClient(@RequestBody ContactData Clients) {
		Clients.setStatus("Active");
		return customrRepository.save(Clients);
	}

	// Update Password::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	@GetMapping("/Updatequery/{id}/{status}") //
	public ResponseEntity<List<ContactData>> customerCheck(@PathVariable("id") int id,
			@PathVariable("status") String status) {
		List<ContactData> elect = customrRepository.findAll();
		for (ContactData c : elect) {

			System.out.println("Customers records are :" + c);
			if (c.getId() == id) {
				c.setStatus(status);
				customrRepository.save(c);
				break;
			} else {
				System.out.println("You are not allowed to update the changes");
			}
		}
		return ResponseEntity.ok(elect);
	}



}
