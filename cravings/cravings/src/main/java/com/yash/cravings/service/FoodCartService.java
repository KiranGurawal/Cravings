package com.yash.cravings.service;

import java.util.List;

import com.yash.cravings.model.FoodCart;

public interface FoodCartService {
public FoodCart addcart(FoodCart item);
public List<FoodCart> getCartitems(String customerid);
//List<FoodCart> getCartitems(String id);
public void deletitem(int id);
public void emptyCart(String customerid);

}
