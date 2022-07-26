package com.yash.cravings.repository;
import java.util.List;

//This class is used for usng jpa annotations.
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yash.cravings.model.Customer;
@Repository
public interface UserRepository extends JpaRepository<Customer,String>{

	List<Customer> findByEmail(String string);

	List<Customer> findByPassword(String string);

}
