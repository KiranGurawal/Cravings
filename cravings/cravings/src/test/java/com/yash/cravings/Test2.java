package com.yash.cravings;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest	
public class Test2 {
	
private int minimumOrderQunatity(int n) {
		
		return n;
	}
	
	
	
	@Test
	public void minOrderQuantitytest() {
		
		Test2 test=new Test2();
		int output=test.minimumOrderQunatity(1);
		assertEquals(1, output);
	
	}
	

}
