package com.yash.cravings.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yash.cravings.model.FoodCart;
import com.yash.cravings.model.OrderList;
@Repository
public interface OrderRepository extends JpaRepository<OrderList,Integer>{
@Transactional
@Modifying
@Query(value="select * from order_list where customerid=?1",nativeQuery=true)
List<OrderList> getOrdersById(String id);
@Transactional
@Modifying
@Query(value="UPDATE order_list SET status=?1 where orderid=?2",nativeQuery=true)
public void updateStatus(String status,int orderid);
}
