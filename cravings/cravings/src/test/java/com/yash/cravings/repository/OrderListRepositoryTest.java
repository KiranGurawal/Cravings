package com.yash.cravings.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.yash.cravings.model.FoodCart;
import com.yash.cravings.model.OrderList;

@SpringBootTest
public class OrderListRepositoryTest {

	OrderList orderlist = new OrderList();

	@Autowired
	private OrderRepository orderlistRepository;

	@Test
	public void OrderCreateTestCase() {
		orderlist.setTransactionid("124455");
		orderlist.setOrderid(1);
		orderlist.setAddress("Shivaji society solapur ");
		orderlist.setItemname("Roll");
		orderlist.setCustomerid("1");
		orderlist.setTotalprice(150);
		orderlist.setStatus("Pending");
		//orderlist.setItemquantity("5");
		orderlistRepository.save(orderlist);
	}

	@Test
	public void OrderDeleteTestcase() {
		orderlistRepository.deleteById((int) 7L);
		assertThat(orderlistRepository.existsById((int) 7L)).isFalse();
	}

	@Test
	public void GetAllFoodTestCase() {
		List<OrderList> list = (List<OrderList>) orderlistRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

//	@Test
//	 void isFoodOrderListExitsById() {
//    	OrderList orderlist = new OrderList();
//        orderlistRepository.save(orderlist);
//        List<OrderList> actualResult = orderlistRepository.getOrdersById("101");
//        assertThat(actualResult).allMatch(null, "101");
//	}	

}
