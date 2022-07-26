package com.yash.cravings;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest	
public class Test9 {
	
private String foodDeliveredStatus(String n) {
		
		return n;
}
	
	
	
	@Test
	public void foodStatusTest() {
		
		Test9 test=new Test9();
		String output=test.foodDeliveredStatus("Success");
		assertEquals("Success", output);
	
	}
	

}