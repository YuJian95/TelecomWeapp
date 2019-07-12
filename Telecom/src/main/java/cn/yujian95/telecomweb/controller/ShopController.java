package cn.yujian95.telecomweb.controller;

import cn.yujian95.telecomweb.dto.WebResult;
import cn.yujian95.telecomweb.pojo.Shop;
import cn.yujian95.telecomweb.pojo.Store;
import cn.yujian95.telecomweb.service.impl.ShopServiceImpl;
import cn.yujian95.telecomweb.service.impl.StoreServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;

/**
 * @program: telecomweb
 * @description: 营业厅控制类
 * @author: YuJian
 * @create: 2019-06-24 19:12
 **/

@Controller
public class ShopController {

    @Autowired
    private ShopServiceImpl shopService;

    @Autowired
    private StoreServiceImpl storeService;

    @CrossOrigin
    @PostMapping("/api/shop/add")
    @ResponseBody
    public WebResult createShop(@RequestBody HashMap<String, String> map) {
        int companyId = Integer.parseInt(map.get("companyId"));
        String phone = map.get("phone");
        String name = map.get("name");
        String address = map.get("address");
        String region = map.get("region");

        Shop shop = new Shop();
        shop.setCompanyId(companyId);
        shop.setName(name);
        shop.setPhone(phone);
        shop.setRegion(region);
        shop.setAddress(address);
        if (shopService.createShop(shop)) {
            return new WebResult(200, "添加成功");
        } else {
            return new WebResult(400, "添加失败");
        }
    }

    @CrossOrigin
    @PostMapping("/api/shop/queryStoreList")
    @ResponseBody
    public List<Store> queryShop(@RequestBody HashMap<String, Integer> map) {
        int shopId = map.get("id");

        return storeService.queryByShopId(shopId);
    }

    @CrossOrigin
    @PostMapping("/api/shop/editInfo")
    @ResponseBody
    public WebResult editInfo(@RequestBody HashMap<String, String> map) {
        int id = Integer.parseInt(map.get("id"));
        String phone = map.get("phone");
        String name = map.get("name");
        String address = map.get("address");
        String region = map.get("region");

        Shop shop = new Shop();
        shop.setId(id);
        shop.setName(name);
        shop.setPhone(phone);
        shop.setRegion(region);
        shop.setAddress(address);
        if (shopService.editInfo(shop)) {
            return new WebResult(200, "修改成功");
        } else {
            return new WebResult(400, "修改失败");
        }
    }

    @CrossOrigin
    @PostMapping("/api/shop/detele")
    @ResponseBody
    public WebResult deleteShop(@RequestBody HashMap<String, Integer> map) {
        int id = map.get("id");

        if (shopService.deleteShop(id)) {
            return new WebResult(200, "删除成功");
        }
        {
            return new WebResult(400, "删除失败");
        }
    }

    @CrossOrigin
    @PostMapping("/api/shop/queryById")
    @ResponseBody
    public Shop queryShopById(@RequestBody HashMap<String, Integer> map) {
        int id = map.get("id");
        return shopService.queryById(id);
    }
}
