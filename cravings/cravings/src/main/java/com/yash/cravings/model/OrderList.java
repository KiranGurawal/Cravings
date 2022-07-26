package com.yash.cravings.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
/*Entity class for Order Module*/
@Entity
@Table(name="order_list")
public class OrderList {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)//This annotation is used to specify the primary key generation strategy to use. 
	@Column(name="orderid")
	private int orderid;
	private String address;
	private String itemname;
	//private long itemprice;
	private String customerid;
	//private String itemquantity;
	private int totalprice;
	private String transactionid;
	private String status;
	//private String itemid;
	public String getTransactionid() {
		return transactionid;
	}
	public void setTransactionid(String transactionid) {
		this.transactionid = transactionid;
	}
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
//	public String getItemid() {
//		return itemid;
//	}
//	public void setItemid(String itemid) {
//		this.itemid = itemid;
//	}
	public int getOrderId() {
		return orderid;
	}
	public void setOrderId(int id) {
		this.orderid = id;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getItemname() {
		return itemname;
	}
	public void setItemname(String itemname) {
		this.itemname = itemname;
	}
	public String getCustomerid() {
		return customerid;
	}
	public void setCustomerid(String customerid) {
		this.customerid = customerid;
	}
//	public String getItemquantity() {
//		return itemquantity;
//	}
//	public void setItemquantity(String itemquantity) {
//		this.itemquantity = itemquantity;
//	}
	public int getTotalprice() {
		return totalprice;
	}
	public void setTotalprice(int totalprice) {
		this.totalprice = totalprice;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
