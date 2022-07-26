package com.yash.cravings.service;

import java.util.List;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.yash.cravings.model.Customer;
import com.yash.cravings.repository.UserRepository;

@Service/*@Service annotation is used with classes that provide some business functionalities. 
Spring context will autodetect these classes when annotation-based configuration and classpath scanning is used.*/
public class CustomerServiceImpl implements CustomerService {
@Autowired
	private UserRepository userrepository;
	@Override
	public Customer saveCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return userrepository.save(customer);
	}
	@Override
	public Customer loginCustomer(String customerid) {
		// TODO Auto-generated method stub
		Customer c = null;
		try {
			c = userrepository.findById(customerid).get();
		}
		catch(Exception e)
		{
			return null;
		}
		return  c;
		
	}
	@Override
	public List<Customer> getAll() {
		// TODO Auto-generated method stub
		return userrepository.findAll();
	}
	   public boolean isUserExist(String mail) {
	        return this.userrepository.existsById(mail);

	    }

}
