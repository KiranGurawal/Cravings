package com.yash.cravings.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FoodItems {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String itemid;
	private String itemname;
	private long itemprice;
	private String description;
	private String category;

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getId() {
		return id;
	}

	public FoodItems() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getItemid() {
		return itemid;
	}

	public void setItemid(String itemid) {
		this.itemid = itemid;
	}

	public String getItemname() {
		return itemname;
	}

	public void setItemname(String itemname) {
		this.itemname = itemname;
	}

	public long getItemprice() {
		return itemprice;
	}

	public void setItemprice(long itemprice) {
		this.itemprice = itemprice;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "FoodItems [id=" + id + ", itemid=" + itemid + ", itemname=" + itemname + ", itemprice=" + itemprice
				+ ", description=" + description + "]";
	}

}
