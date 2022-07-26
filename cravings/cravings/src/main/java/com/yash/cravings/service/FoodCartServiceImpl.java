package com.yash.cravings.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yash.cravings.model.FoodCart;
import com.yash.cravings.repository.FoodCartRepository;
@Service
public class FoodCartServiceImpl implements FoodCartService{
	@Autowired
	private FoodCartRepository foodcartrepository;

	@Override
	public FoodCart addcart(FoodCart cartitem) {
		// TODO Auto-generated method stub
		return foodcartrepository.save(cartitem);
	}

//	@Override
//	public List<FoodCart> getCartitems(Iterable<Integer> id) {
//		// TODO Auto-generated method stub
//		return foodcartrepository.findAllById(id);
//	}

	@Override
	public List<FoodCart> getCartitems(String customerid) {
		// TODO Auto-generated method stub
		return foodcartrepository.getCartItems(customerid);
	}

	@Override
	public void deletitem(int id) {
		// TODO Auto-generated method stub
		foodcartrepository.deletecartitems(id);
	}

	@Override
	public void emptyCart(String customerid) {
		// TODO Auto-generated method stub
		foodcartrepository.emptyCart(customerid);
		
	}
	
}
