package cn.yujian95.telecomweb.controller;

import cn.yujian95.telecomweb.dto.WebResult;
import cn.yujian95.telecomweb.pojo.Subscribe;
import cn.yujian95.telecomweb.service.impl.OrderServiceImpl;
import cn.yujian95.telecomweb.service.impl.ProductServiceImpl;
import cn.yujian95.telecomweb.service.impl.StoreServiceImpl;
import cn.yujian95.telecomweb.utils.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * @program: telecomweb
 * @description: 订单处理控制器
 * @author: YuJian
 * @create: 2019-06-23 21:12
 **/

@Controller
public class OrderController {

    @Autowired
    private OrderServiceImpl orderService;

    @Autowired
    private ProductServiceImpl productService;

    @Autowired
    private StoreServiceImpl storeService;

    @CrossOrigin
    @PostMapping("/api/order/queryByUserId")
    @ResponseBody
    public List<Subscribe> getMySubscribe(@RequestBody HashMap<String, Integer> map) {
        int userId = map.get("userId");
        return orderService.mySubscribeList(userId);
    }

    @CrossOrigin
    @PostMapping("/api/order/queryByCompanyId")
    @ResponseBody
    public List<Subscribe> getCompanySubscribe(@RequestBody HashMap<String, Integer> map) {
        int companyId = map.get("companyId");
        return orderService.companyList(companyId);
    }

    @CrossOrigin
    @PostMapping("/api/order/queryByShopId")
    @ResponseBody
    public List<Subscribe> getShopSubscribe(@RequestBody HashMap<String, Integer> map) {
        int shopId = map.get("shopId");
        return orderService.companyList(shopId);
    }

    @CrossOrigin
    @PostMapping("/api/order/queryByUserName")
    @ResponseBody
    public List<Subscribe> getSubscribeByUsername(@RequestBody HashMap<String, String> map) {
        String userName = map.get("userName");
        return orderService.querySubscribeByName(userName);
    }

    @CrossOrigin
    @PostMapping("/api/order/queryByStoreId")
    @ResponseBody
    public List<Subscribe> getSubscribeByStoreId(@RequestBody HashMap<String, Integer> map) {
        Integer storeId = map.get("storeId");
        return orderService.querySubscribeByStoreId(storeId);
    }


    @CrossOrigin
    @PostMapping("/api/order/queryByPhone")
    @ResponseBody
    public List<Subscribe> getSubscribeByPhone(@RequestBody HashMap<String, String> map) {
        String num = map.get("num");
        return orderService.querySubscribeByPhone(num);
    }

    @CrossOrigin
    @PostMapping("/api/order/manage")
    @ResponseBody
    public WebResult managerSubscribe(@RequestBody HashMap<String, String> map) {
        int orderId = Integer.parseInt(map.get("orderId"));
        String status = map.get("status");
        Subscribe order;
        Date date = new Date();
        java.sql.Date updateDate = new java.sql.Date(date.getTime());

        if ("未处理".equals(status)) {
            String updateStatus = "在进行";
            order = new Subscribe();
            order.setId(orderId);
            order.setUpdateDate(updateDate);
            order.setOrderStatus(updateStatus);
        } else {
            String finishStatus = "已完成";
            order = new Subscribe();
            order.setId(orderId);
            order.setOrderStatus(finishStatus);
            order.setUpdateDate(updateDate);
        }

        if (orderService.manageSubscribe(order)) {
            return new WebResult(200, "修改成功");
        } else {
            return new WebResult(400, "修改失败,请稍后再试");
        }
    }

    @CrossOrigin
    @PostMapping("/api/order/add")
    @ResponseBody
    public WebResult createSubscribe(@RequestBody HashMap<String, String> map) {
        int userId = Integer.parseInt(map.get("userId"));
        String phone = map.get("phone");
        int storeId = Integer.parseInt(map.get("storeId"));
        int productId = Integer.parseInt(map.get("productId"));
        int companyId = productService.queryById(productId).getCompanyId();
        int shopId = storeService.queryStoreById(storeId).getShopId();
        String note = map.get("note");
        String name = map.get("name");
        String createStatus = "未处理";
        java.sql.Date createDate = DateUtil.getDate();
        System.out.println(createDate);

        Subscribe order = new Subscribe();
        order.setUserId(userId);
        order.setOrderStatus(createStatus);
        order.setCreateDate(createDate);
        order.setProductId(productId);
        order.setNote(note);
        order.setStoreId(storeId);
        order.setUserName(name);
        order.setPhone(phone);
        order.setCompanyId(companyId);
        order.setShopId(shopId);

        if (orderService.bookingSubscribe(order)) {
            return new WebResult(200, "修改成功");
        } else {
            return new WebResult(400, "修改失败,请稍后再试");
        }
    }

    @CrossOrigin
    @PostMapping("/api/order/queryById")
    @ResponseBody
    public Subscribe getSubscribe(@RequestBody HashMap<String, String> map) {
        int orderId = Integer.parseInt(map.get("orderId"));
        return orderService.queryById(orderId);
    }

    @CrossOrigin
    @PostMapping("/api/order/searchByStore")
    @ResponseBody
    public List<Subscribe> searchByStore(@RequestBody HashMap<String, String> map) {
        String keyword = map.get("keyword");
        int storeId = Integer.parseInt(map.get("storeId"));
        return orderService.searchByStore(keyword, storeId);
    }

    @CrossOrigin
    @PostMapping("/api/order/searchByShop")
    @ResponseBody
    public List<Subscribe> searchByShop(@RequestBody HashMap<String, String> map) {
        String keyword = map.get("keyword");
        int shopId = Integer.parseInt(map.get("shopId"));
        return orderService.searchByStore(keyword, shopId);
    }

    @CrossOrigin
    @PostMapping("/api/order/searchByCompany")
    @ResponseBody
    public List<Subscribe> searchByCompany(@RequestBody HashMap<String, String> map) {
        String keyword = map.get("keyword");
        int companyId = Integer.parseInt(map.get("companyId"));
        return orderService.searchByStore(keyword, companyId);
    }

}
