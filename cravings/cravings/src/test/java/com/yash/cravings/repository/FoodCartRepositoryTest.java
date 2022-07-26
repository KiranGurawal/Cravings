package com.yash.cravings.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.yash.cravings.model.FoodCart;

@SpringBootTest
public class FoodCartRepositoryTest {

	FoodCart foodcart = new FoodCart();
	@Autowired
	private FoodCartRepository foodcartRepository;
	@Test
	public void FoodCreateTestCase() {
		foodcart.setItemname("a");
		foodcart.setImgid(1);
		foodcart.setItemid("red");
		foodcart.setItemprice(80);
		foodcart.setCustomerid("Men");
		foodcartRepository.save(foodcart);
	}

	
	@Test
	public void FoodDeleteTestcase() {
		foodcartRepository.deleteById((int) 14L);
		assertThat(foodcartRepository.existsById((int) 14L)).isFalse();
	}

	@Test
	public void GetAllFoodTestCase() {
		List<FoodCart> list = (List<FoodCart>) foodcartRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

// 
////    @Test
////    void getCartItems() {
////    	FoodCart foodcart = new FoodCart(1001, "1", 78, "1001", "Sandwich");
////        foodcartRepository.save(foodcart);
////    }
    @Test
    public void CartTestCase()
    {

        List<FoodCart> list = foodcartRepository.getCartItems("plowanshi4@gmail.com");
        assertThat(list).size().isGreaterThan(0);
    }
    @Test
	public void FoodCartTest() {
		List<FoodCart> list =  foodcartRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

}
