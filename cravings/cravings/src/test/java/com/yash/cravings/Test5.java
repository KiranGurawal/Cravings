package com.yash.cravings;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest	
public class Test5 {
	
private int noOfFoodItemsStoredAtATime(int n) {
		
		return n;
	}
	
	
	
	@Test
	public void fooditemsTest() {
		
		Test5 test=new Test5();
		int output=test.noOfFoodItemsStoredAtATime(5000);
		assertEquals(5000, output);
	
	}
	

}