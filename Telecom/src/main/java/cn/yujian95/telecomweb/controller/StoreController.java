package cn.yujian95.telecomweb.controller;

import cn.yujian95.telecomweb.dto.WeAppResult;
import cn.yujian95.telecomweb.dto.WebResult;
import cn.yujian95.telecomweb.pojo.Store;
import cn.yujian95.telecomweb.pojo.User;
import cn.yujian95.telecomweb.service.impl.StoreServiceImpl;
import cn.yujian95.telecomweb.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

/**
 * @program: telecomweb
 * @description: 商店请求控制器
 * @author: YuJian
 * @create: 2019-06-24 21:02
 **/

@Controller
public class StoreController {

    @Autowired
    private StoreServiceImpl storeService;

    @Autowired
    private UserServiceImpl userService;

    @CrossOrigin
    @PostMapping("/api/store/getAllStore")
    @ResponseBody
    public List<Store> getAllStore() {
        return storeService.getAllStore();
    }

    @CrossOrigin
    @PostMapping("/api/store/queryByName")
    @ResponseBody
    public List<Store> queryByName(@RequestBody HashMap<String, String> map) {
        String storeName = map.get("storeName");
        return storeService.queryByName(storeName);
    }

    @CrossOrigin
    @PostMapping("/api/store/queryById")
    @ResponseBody
    public Store queryById(@RequestBody HashMap<String, Integer> map) {
        int id = map.get("id");
        return storeService.queryStoreById(id);
    }

    /**
     * @Description: 返回要绑定的商店信息
     * @Param: [map]
     * @return: cn.yujian95.telecomweb.pojo.Store
     * @Author: YuJian
     * @Date: 6/25/2019
     */
    @CrossOrigin
    @PostMapping("/api/store/login")
    @ResponseBody
    public WeAppResult loginStore(@RequestBody HashMap<String, String> map) {
        String name = map.get("name");
        String password = map.get("password");
        String openid = map.get("openid");
        Store store = storeService.loginStore(name, password);
        if (store == null) {
            return new WeAppResult(400, "登录失败");
        } else {
            User user = userService.queryUser(openid);
            user.setStoreId(store.getId());
            if (userService.editInfo(user)) {
                return new WeAppResult(200, "登录成功");
            } else {
                return new WeAppResult(400, "登录失败");
            }
        }
    }

    @CrossOrigin
    @PostMapping("/api/store/editInfo")
    @ResponseBody
    public WeAppResult editInfo(@RequestBody HashMap<String, String> map) {
        String address = map.get("address");
        String region = map.get("region");
        String storeName = map.get("storeName");
        int id = Integer.parseInt(map.get("id"));
        int phone = Integer.parseInt(map.get("phone"));
        Store store = new Store();
        store.setId(id);
        store.setAddress(address);
        store.setPhone(phone);
        store.setRegion(region);
        store.setStoreName(storeName);

        if (storeService.editInfo(store)) {
            return new WeAppResult(200, "修改成功");
        } else {
            return new WeAppResult(400, "修改失败");
        }
    }

    @CrossOrigin
    @PostMapping("/api/store/editPassword")
    @ResponseBody
    public WeAppResult editPassword(@RequestBody HashMap<String, String> map) {
        String password = map.get("password");
        int id = Integer.parseInt(map.get("id"));
        Store store = storeService.queryStoreById(id);
        if (storeService.editPassword(store, password)) {
            return new WeAppResult(200, "修改成功");
        } else {
            return new WeAppResult(400, "修改失败");
        }
    }

    @CrossOrigin
    @PostMapping("/api/store/search")
    @ResponseBody
    public List<Store> searchStore(@RequestBody HashMap<String, String> map) {
        String key = map.get("key");
        return storeService.searchStore(key);
    }

    @CrossOrigin
    @PostMapping("/api/store/addStore")
    @ResponseBody
    public WebResult createStores(@RequestBody HashMap<String, String> map) {
        String address = map.get("address");
        String region = map.get("region");
        String storename = map.get("storename");
        int shopid = Integer.parseInt(map.get("shopid"));
        int phone = Integer.parseInt(map.get("id"));
        String name = map.get("name");
        String password = map.get("password");
        Store store = new Store();
        store.setShopId(shopid);
        store.setName(name);
        store.setPassword(password);
        store.setAddress(address);
        store.setPhone(phone);
        store.setRegion(region);
        store.setStoreName(storename);

        if (storeService.createStore(store)) {
            return new WebResult(200, "创建成功");
        } else {
            return new WebResult(400, "创建失败");
        }
    }

    @CrossOrigin
    @PostMapping("/api/store/deleteStore")
    @ResponseBody
    public WebResult deleteStore(@RequestBody HashMap<String, Integer> map) {
        int storeid = map.get("storeid");
        if (storeService.deleteStore(storeid)) {
            return new WebResult(200, "删除成功");
        } else {
            return new WebResult(400, "删除失败");
        }
    }
}