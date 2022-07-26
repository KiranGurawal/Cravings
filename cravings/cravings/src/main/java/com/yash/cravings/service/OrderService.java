package com.yash.cravings.service;

import java.util.List;

import com.yash.cravings.model.OrderList;

public interface OrderService {
public OrderList saveOrder(OrderList order);
public List<OrderList> getAllOrder();
public List<OrderList> getAllOrderById(String customerid);
public void updatestatus(String status,int orderid);
}
