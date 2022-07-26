package com.yash.cravings;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest	
public class Test6 {
	
private int noOfAdmin(int n) {
		
		return n;
	}
	
	
	
	@Test
	public void adminTest() {
		
		Test6 test=new Test6();
		int output=test.noOfAdmin(1);
		assertEquals(1, output);
	
	}
	

}