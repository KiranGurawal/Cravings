package com.yash.cravings;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest	
public class Test8 {
	
private int foodVarietyAvailability(int n) {
		
		return n;
	}
	
	
	
	@Test
	public void foodVarietyTest() {
		
		Test8 test=new Test8();
		int output=test.foodVarietyAvailability(4);
		assertEquals(4, output);
	
	}
	

}