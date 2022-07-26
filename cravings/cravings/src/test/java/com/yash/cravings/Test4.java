package com.yash.cravings;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest	
	public class Test4 {
		


		public int noOfOrdersTakenAtATime(int i) {
			
			return i;
		}
		
		
		
		@Test
		public void orderTest() {
			
			Test4 test=new Test4();
			int output=test.noOfOrdersTakenAtATime(50);
			assertEquals(50, output);
		
		}






}