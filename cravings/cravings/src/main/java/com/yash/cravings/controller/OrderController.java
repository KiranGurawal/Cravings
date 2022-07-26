package com.yash.cravings.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yash.cravings.model.OrderList;
import com.yash.cravings.service.OrderService;

@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrderController {
	@Autowired
	private OrderService orderservice;

	@PostMapping("/saveorder")
	public String savorder(@RequestBody OrderList order) {
		orderservice.saveOrder(order);
		return "Order saved";
	}
	@GetMapping("/getallorder")
	public List<OrderList> getallorders(){
		return orderservice.getAllOrder();
	}
	@GetMapping("/getorderbyid/{customerid}")
	public List<OrderList> getorders(@PathVariable("customerid") String customerid){
		System.out.println(customerid);
		return orderservice.getAllOrderById(customerid);
	}
@PostMapping("/update")
public String update(@RequestBody List<String> lst)
{
	System.out.println(lst);
	int id=Integer.parseInt(lst.get(0));
	String status=lst.get(1);
	orderservice.updatestatus(status,  id);
	return "Updated";
	}
}
