package com.yash.cravings.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/*Entity class for food cart Module */
@Entity
@Table(name="food_cart")
public class FoodCart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="imgid")
	private int imgid;
	@Column(name="itemid")
	private String itemid;
	private long itemprice;
	@Column(name="customerid")
	private String customerid;
	private String itemname;
	public String getItemname() {
		return itemname;
	}
	public void setItemname(String itemname) {
		this.itemname = itemname;
	}
	public int getImgid() {
		return imgid;
	}
	public void setImgid(int imgid) {
		this.imgid = imgid;
	}
	public String getItemid() {
		return itemid;
	}
	public void setItemid(String itemid) {
		this.itemid = itemid;
	}
	public long getItemprice() {
		return itemprice;
	}
	public void setItemprice(long itemprice) {
		this.itemprice = itemprice;
	}
	public String getCustomerid() {
		return customerid;
	}
	public void setCustomerid(String customerid) {
		this.customerid = customerid;
	}
	
}
