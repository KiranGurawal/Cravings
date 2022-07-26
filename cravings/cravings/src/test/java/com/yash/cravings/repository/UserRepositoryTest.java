package com.yash.cravings.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import com.yash.cravings.model.Customer;

@SpringBootTest
public class UserRepositoryTest {
	@Autowired
    private UserRepository userrepository;
	
	@Test
    public void loginTestCase()
    {

        List<Customer> list = userrepository.findByEmail("plowanshi4@gmail.com");
        assertThat(list).size().isGreaterThan(0);
    }
	
	@Test
    public void loginTestCasePass()
    {

        List<Customer> list = userrepository.findByPassword("Abc@12345");
        assertThat(list).size().isGreaterThan(0);
    }
 
	

}
