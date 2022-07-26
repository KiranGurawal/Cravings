package com.yash.cravings.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yash.cravings.model.Admin;
import com.yash.cravings.service.AdminService;
/*Controller class for admin. All the http request will come here than the specific functionality will be performed.*/

@RestController//RestController is used for making restful web services with the help of the @RestController annotation. 
@RequestMapping("/admin")// map HTTP requests to handler methods of REST controllers
@CrossOrigin(origins="http://localhost:3000/")
public class AdminController {
	@Autowired
	private AdminService adminservice;

//	@PostMapping("/add")
//	public String add(@RequestBody Admin admin)
//	{	
////		admin.setEmail("admin@cravings.com");
////		admin.setName("Pradeep Lowanshi");
////		admin.setPassword("abc123");
//		adminservice.saveAdmin(admin);
//		return "admin added";
//		
//	}
	
	/*the login request will come here to match the credentials with the data base.*/
	@RequestMapping("/username")
	public String login(@RequestBody Admin a) {
		System.out.println("Hello");
		Admin acheck = this.adminservice.loginAdmin(a.getEmail());
		if (acheck == null) {
			return "Invalid username or password";
		}
		if (!acheck.getPassword().equals(a.getPassword())) {
			return "Invalid username or password";
		}
		return "You can login";
	}
}
