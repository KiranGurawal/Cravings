package com.yash.cravings.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yash.cravings.model.FoodCart;
@Repository
public interface FoodCartRepository extends JpaRepository<FoodCart,Integer> {
	@Transactional
	@Modifying
	@Query(value="select  * from food_cart where customerid=?1",nativeQuery=true)
	List<FoodCart> getCartItems(String customerid);
	@Transactional
	@Modifying
	@Query(value="delete  from food_cart where imgid=?1",nativeQuery=true)
	public void deletecartitems(int id);
	@Transactional
	@Modifying
	@Query(value="delete  from food_cart where customerid=?1",nativeQuery = true)
	public void emptyCart(String customerid);
	
	 }

