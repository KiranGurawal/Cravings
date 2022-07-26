package com.yash.cravings.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yash.cravings.model.FoodItems;
import com.yash.cravings.service.FoodItemService;

@RestController
@RequestMapping("/fooditem")
@CrossOrigin
public class FoodItemController {
	@Autowired
	private FoodItemService itemservice;

	@PostMapping("/add")
	public String add(@RequestBody FoodItems items) {
		itemservice.saveItem(items);
		return "New Item Added";
	}

	@GetMapping("/getitems")
	public List<FoodItems> getitem() {

		return itemservice.getItems();
	}

}
