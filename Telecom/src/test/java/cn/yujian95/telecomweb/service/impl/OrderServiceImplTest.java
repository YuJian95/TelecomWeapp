package cn.yujian95.telecomweb.service.impl;

import cn.yujian95.telecomweb.pojo.Subscribe;
import cn.yujian95.telecomweb.utils.DateUtil;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.junit.Assert.*;

/**
 * OrderServiceImpl Tester.
 *
 * @author <YuJian>
 * @version 1.0
 * @since <pre>Jun 28, 2019</pre>
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class OrderServiceImplTest {

    @Autowired
    OrderServiceImpl orderService;

    @Before
    public void before() throws Exception {
    }

    @After
    public void after() throws Exception {
    }

    /**
     * Method: bookingOrder(Order order)
     */
    @Test
    public void testBookingOrder() throws Exception {
        Subscribe order = new Subscribe();
        order.setShopId(1);
        order.setCompanyId(1);
        order.setPhone("15812572219");
        order.setUserName("陈利建");
        order.setStoreId(1);
        order.setProductId(1);
        order.setOrderStatus("未处理");
        order.setNote("备注信息：11点");
        order.setCreateDate(DateUtil.getDate());

        orderService.bookingSubscribe(order);
    }

    /**
     * Method: myOrderList(Integer userId)
     */
    @Test
    public void testMyOrderList() throws Exception {
//TODO: Test goes here... 
    }

    /**
     * Method: shopList(int shopId)
     */
    @Test
    public void testShopList() throws Exception {
//TODO: Test goes here... 
    }

    /**
     * Method: companyList(int companyId)
     */
    @Test
    public void testCompanyList() throws Exception {
//TODO: Test goes here... 
    }

    /**
     * Method: manageOrder(Order order)
     */
    @Test
    public void testManageOrder() throws Exception {
//TODO: Test goes here... 
    }

    /**
     * Method: queryOrderByPhone(String phone)
     */
    @Test
    public void testQueryOrderByPhone() throws Exception {
//TODO: Test goes here... 
    }

    /**
     * Method: queryOrderByName(String name)
     */
    @Test
    public void testQueryOrderByName() throws Exception {
//TODO: Test goes here... 
    }

    /**
     * Method: queryOrderByStoreId(int storeId)
     */
    @Test
    public void testQueryOrderByStoreId() throws Exception {
//TODO: Test goes here... 
    }

    /**
     * Method: queryById(int id)
     */
    @Test
    public void testQueryById() throws Exception {
//TODO: Test goes here... 
    }


} 
