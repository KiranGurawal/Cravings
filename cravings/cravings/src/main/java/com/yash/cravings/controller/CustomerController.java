package com.yash.cravings.controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yash.cravings.model.Customer;
import com.yash.cravings.service.CustomerService;
import com.yash.cravings.service.EmailSenderService;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {
	@Autowired
	private CustomerService customerservice;
	@Autowired
	private EmailSenderService emailservice;

	@PostMapping("/add")
	public String add(@RequestBody Customer customer) {
		  if(this.customerservice.isUserExist(customer.getEmail()))
	        {
	            return "User already exists";
	        }
		  else {
			  customerservice.saveCustomer(customer);
				return "New Customer Added";
		  }
	}

	@RequestMapping("/id")
	public String login(@RequestBody Customer c) {
		System.out.println("Hello");
		Customer ccheck = this.customerservice.loginCustomer(c.getEmail());
		if (ccheck == null) {
			System.out.println("Null");
			return "Invalid username or password";
		}
		if (!ccheck.getPassword().equals(c.getPassword())) {
			System.out.println("Wrong");
			return "Invalid username or password";
		}
		return "You can login";
	}

	@GetMapping("/getcustomer")// maps HTTP GET requests onto specific handler methods. 
	public List<Customer> getcustomer() {
		return customerservice.getAll();
	}

	public int generateOtp() {
		Random r = new Random();
		int x = r.nextInt();
		return x;
	}

	// @EventListener(ApplicationReadyEvent.class)
	public void triggerMail(String sendTo, String otp) {
		emailservice.sendSimpleEmail(sendTo, otp, "Otp for Cravings");
	}

	String otp = "";

	@GetMapping("/getOtp/{email}")
	public String getOtp(@PathVariable("email") String mail) {
		int y = generateOtp();
		while (y < 1000 || y > 9999) {
			y = generateOtp();
		}
		otp = String.valueOf(y);
		triggerMail(mail, String.valueOf(y));
		System.out.print(otp);
		return otp;
	}

	@GetMapping("/validateOtp/{checkOtp}")
	public String validateUser(@PathVariable("checkOtp") String checkOtp) {
		if (checkOtp.equals(otp)) {
			otp = "";
			return "You can Login";
		} else {
			return "Invalid otp";
		}
	}

}
