package com.yash.cravings.service;


import java.util.List;

//import java.util.List;

import com.yash.cravings.model.Customer;


public interface CustomerService {
	public Customer saveCustomer(Customer customer);
	public Customer loginCustomer(String customerid );
	public List<Customer> getAll();
	public boolean isUserExist(String email);
}
