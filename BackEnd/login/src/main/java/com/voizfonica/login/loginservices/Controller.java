package com.voizfonica.login.loginservices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/login")
public class Controller {

	@Autowired
	private LoginRepository loginRepository;

	// Get All Clients::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	@GetMapping("/getclient")
	public List<Clients> getAllClients() {
		return loginRepository.findAll();

	}

	// Create Client::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	@PostMapping("/addclient")
	public Clients createClient(@RequestBody Clients Clients) {
		return loginRepository.save(Clients);
	}

	// Update Password::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	@GetMapping("/Updatepass/{id}/{pass}") //
	public ResponseEntity<List<Clients>> customerCheck(@PathVariable("id") int id,
			@PathVariable("pass") String pass) {
		List<Clients> elect = loginRepository.findAll();
		for (Clients c : elect) {

			System.out.println("Customers records are :" + c);
			if (c.getId() == id) {
				c.setPassword(pass);
				loginRepository.save(c);
				break;
			} else {
				System.out.println("You are not allowed to update the changes");
			}
		}
		return ResponseEntity.ok(elect);
	}
	
	// Update email::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
		@GetMapping("/Updatemail/{id}/{email}") //
		public ResponseEntity<List<Clients>> changeemail(@PathVariable("id") int id,
				@PathVariable("email") String email) {
			List<Clients> elect = loginRepository.findAll();
			for (Clients c : elect) {

				System.out.println("Customers records are :" + c);
				if (c.getId() == id) {
					c.setEmail(email);
					loginRepository.save(c);
					break;
				} else {
					System.out.println("You are not allowed to update the changes");
				}
			}
			return ResponseEntity.ok(elect);
		}
		
		// Update User Name::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
		@GetMapping("/Updateuser/{id}/{username1}") //
		public ResponseEntity<List<Clients>> changeusername(@PathVariable("id") int id,
				@PathVariable("username1") String username1) {
			List<Clients> elect = loginRepository.findAll();
			for (Clients c : elect) {

				System.out.println("Customers records are :" + c);
				if (c.getId() == id) {
					c.setUsername(username1);
					loginRepository.save(c);
					break;
				} else {
					System.out.println("You are not allowed to update the changes");
				}
			}
			return ResponseEntity.ok(elect);
		}
		

}
