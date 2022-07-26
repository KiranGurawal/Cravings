package com.yash.cravings.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yash.cravings.model.OrderList;
import com.yash.cravings.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService{
	@Autowired
	private OrderRepository orderrepository;
	@Override
	public OrderList saveOrder(OrderList order) {
		// TODO Auto-generated method stub
		return  orderrepository.save(order);
	}

	@Override
	public List<OrderList> getAllOrder() {
		// TODO Auto-generated method stub
		return orderrepository.findAll();
	}

	@Override
	public List<OrderList> getAllOrderById(String customerid) {
		// TODO Auto-generated method stub
		List<OrderList> lst=this.orderrepository.getOrdersById(customerid);
		return lst;
	}

	@Override
	public void updatestatus(String status,int orderid) {
		// TODO Auto-generated method stub
		orderrepository.updateStatus(status,orderid);
	}

}
