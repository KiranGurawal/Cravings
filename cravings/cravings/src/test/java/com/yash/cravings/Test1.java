package com.yash.cravings;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest	
	public class Test1 {
		


		public int maximumOrderQunatity(int i) {
			// TODO Auto-generated method stub
			return i;
		}
		
		
		
		@Test
		public void maxOrderQuantitytest() {
			
			Test1 test=new Test1();
			int output=test.maximumOrderQunatity(10);
			assertEquals(10, output);
		
		}






}
