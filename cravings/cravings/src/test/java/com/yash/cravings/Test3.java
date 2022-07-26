package com.yash.cravings;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest	
public class Test3 {
	
private int minimumDeliveryAmount(int n) {
		
		return n;
	}
	
	
	
	@Test
	public void minDeliveryAmount() {
		
		Test3 test=new Test3();
		int output=test.minimumDeliveryAmount(50);
		assertEquals(50, output);
	
	}
	

}
