package com.yash.cravings.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.yash.cravings.model.Admin;

@SpringBootTest
	public class AdminRepositoryTest {
			Admin admin = new Admin();
			@Autowired
			AdminRepository adminrepository;
			@Test
			public void AdminTest() {
				admin.setName("nainan");
				admin.setEmail("dubeynainan146@gmail.com");
				admin.setPassword("4312");
				
				adminrepository.save(admin);
				//assertNotNull(adminrepository.findById((int) 1).get());
			}
			


}
	