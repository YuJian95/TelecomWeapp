package cn.yujian95.telecomweb.service;

import cn.yujian95.telecomweb.pojo.Subscribe;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: telecomweb
 * @description: 订单处理接口
 * @author: YuJian
 * @create: 2019-06-23 20:32
 **/

public interface IOrderService {

    boolean bookingSubscribe(Subscribe order);  // 提交预定订单

    List<Subscribe> mySubscribeList(Integer userId);  // 查询用户订单

    List<Subscribe> shopList(int shopId);  // 查询营业厅订单

    List<Subscribe> companyList(int companyId);  // 查询电信公司订单

    boolean manageSubscribe(Subscribe order);  // 修改订单状态

    List<Subscribe> querySubscribeByPhone(String phone);  // 通过手机号查询订单

    List<Subscribe> querySubscribeByName(String name);  // 通过用户名查询

    List<Subscribe> querySubscribeByStoreId(int storeId); // 通过storeId查找

    Subscribe queryById(int orderId);

    List<Subscribe> searchByStore(String keyword, int storeId);

    List<Subscribe> searchByShop(String keyword, int shopId);

    List<Subscribe> searchByCompany(String keyword, int companyId);

}
