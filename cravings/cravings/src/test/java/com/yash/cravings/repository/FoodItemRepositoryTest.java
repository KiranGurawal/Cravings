package com.yash.cravings.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.yash.cravings.model.FoodItems;

public class FoodItemRepositoryTest {

	FoodItems foodItem = new FoodItems();
	
	@Autowired
	private FoodItemRepository fooditemRepository;
	
	
//	@Test
//	public void FoodlistTestCase() {
//		foodItem.setCategory("a");
//		foodItem.setItemid("17");
//		foodItem.setItemname("noodles");
//		foodItem.setItemprice(80);
//    	foodItem.setDescription("best");
//		fooditemRepository.save(foodItem);
//	}
//
//
//	@Test
//	public void FoodItemDeleteTestcase() {
//	fooditemRepository.deleteById((String) "16L");
//		assertThat(fooditemRepository.existsById((String) "16L")).isFalse();
//   }
//	

}
