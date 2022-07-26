package com.yash.cravings;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest	
public class Test7 {
	
private int noOfTimesAnOtpCanBeGenerated(int n) {
		
		return n;
	}
	
	
	
	@Test
	public void otpTest() {
		
		Test7 test=new Test7();
		int output=test.noOfTimesAnOtpCanBeGenerated(3);
		assertEquals(3, output);
	
	}
	

}