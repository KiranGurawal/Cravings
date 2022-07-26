package com.yash.cravings.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.yash.cravings.model.FoodCart;
import com.yash.cravings.repository.FoodCartRepository;
import com.yash.cravings.service.FoodCartService;

@RestController
@RequestMapping("/cart")
@CrossOrigin("http://localhost:3000")
public class FoodCartController {
	@Autowired
	private FoodCartService cartitemservice;
	// total price store
	private int total;

	@Autowired
	private FoodCartRepository food;

	@PostMapping("/addcart")
	public String add(@RequestBody FoodCart cartitems) {
		cartitemservice.addcart(cartitems);
		return "New Cart Item Added";
	}

	@GetMapping("/getcartitems/{id}")
	public List<FoodCart> getitem(@PathVariable("id") String customerid) {
		List lst = cartitemservice.getCartitems(customerid);
		for (int i = 0; i < lst.size(); i++) {
			FoodCart fc = (FoodCart) lst.get(i);
			total += fc.getItemprice();
		}
		return lst;

	}

	// api to send total of carted items.
	// return total
	@GetMapping("/total")
	public int gettotal() {
		int local = total;
		total = 0;
		return local;
	}
	@GetMapping("/deleteitems/{id}")
	public String   delete(@PathVariable("id") int imgid)
	{   
		cartitemservice.deletitem(imgid);
		return "Deleted";
			
		//return "Deleted";
		
	}
	@GetMapping("/emptycart/{customerid}")
	public String empty(@PathVariable("customerid") String customerid)
	{
		cartitemservice.emptyCart(customerid);
		return "Cart is empty";
		
	}

}
