package com.yash.cravings.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yash.cravings.model.FoodItems;
import com.yash.cravings.repository.FoodItemRepository;

@Service
public class FoodItemServiceImpl implements FoodItemService {
	@Autowired
	private FoodItemRepository fooditemrepository;

	@Override
	public FoodItems saveItem(FoodItems item) {
		// TODO Auto-generated method stub
		return fooditemrepository.save(item);
	}

	@Override
	public List<FoodItems> getItems() {
		// TODO Auto-generated method stub
		return fooditemrepository.findAll();
	}

}
