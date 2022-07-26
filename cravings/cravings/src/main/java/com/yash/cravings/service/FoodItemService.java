package com.yash.cravings.service;

import java.util.List;

import com.yash.cravings.model.FoodItems;

public interface FoodItemService {
	public FoodItems saveItem(FoodItems item);

	public List<FoodItems> getItems();
}
