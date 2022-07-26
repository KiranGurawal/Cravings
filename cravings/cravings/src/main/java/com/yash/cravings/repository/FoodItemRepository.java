package com.yash.cravings.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yash.cravings.model.FoodItems;

public interface FoodItemRepository extends JpaRepository<FoodItems, String> {

}
