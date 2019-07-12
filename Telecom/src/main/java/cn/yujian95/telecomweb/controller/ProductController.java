package cn.yujian95.telecomweb.controller;

import cn.yujian95.telecomweb.dto.WebResult;
import cn.yujian95.telecomweb.pojo.Product;
import cn.yujian95.telecomweb.pojo.Shop;
import cn.yujian95.telecomweb.pojo.Store;
import cn.yujian95.telecomweb.service.impl.CompanyServiceImpl;
import cn.yujian95.telecomweb.service.impl.ProductServiceImpl;
import cn.yujian95.telecomweb.service.impl.ShopServiceImpl;
import cn.yujian95.telecomweb.service.impl.StoreServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

/**
 * @program: telecomweb
 * @description: 套餐控制类
 * @author: YuJian
 * @create: 2019-06-24 03:25
 **/

@Controller
public class ProductController {
    @Autowired
    private ProductServiceImpl productService;

    @Autowired
    private StoreServiceImpl storeService;

    @Autowired
    private ShopServiceImpl shopService;

    @CrossOrigin
    @PostMapping("/api/product/getAllCompanyProduct")
    @ResponseBody
    public List<Product> getProduct(@RequestBody HashMap<String, Integer> map) {
        int storeId = map.get("storeId");
        Store store = storeService.queryStoreById(storeId);
        Shop shop = shopService.queryById(store.getShopId());
        return productService.getAllProduct(shop.getCompanyId());
    }

    @CrossOrigin
    @PostMapping("/api/product/addProduct")
    @ResponseBody
    public WebResult addProduct(@RequestBody HashMap<String, String> map) {
        int companyid = Integer.parseInt(map.get("companyId"));
        int price = Integer.parseInt(map.get("price"));
        String character1 = map.get("character_1");
        String character2 = map.get("character_2");
        String character3 = map.get("character_3");
        String name = map.get("name");
        String period = map.get("period");

        Product product = new Product();
        product.setCharacter_1(character1);
        product.setCharacter_2(character2);
        product.setCharacter_3(character3);
        product.setName(name);
        product.setPeriod(period);
        product.setPrice(price);
        product.setCompanyId(companyid);

        if (productService.addProduct(product)) {
            return new WebResult(200, "添加成功");
        } else {
            return new WebResult(400, "添加失败");
        }
    }

    @CrossOrigin
    @PostMapping("/api/product/deleteProduct")
    @ResponseBody
    public WebResult deleteProduct(@RequestBody HashMap<String, Integer> map) {
        int id = map.get("id");
        if (productService.deleteProduct(id)) {
            return new WebResult(200, "删除成功");
        } else {
            return new WebResult(400, "删除失败");
        }
    }

    @CrossOrigin
    @PostMapping("/api/product/editProduct")
    @ResponseBody
    public WebResult editProduct(@RequestBody HashMap<String, String> map) {
        int id = Integer.parseInt(map.get("id"));
        int price = Integer.parseInt(map.get("price"));
        String character1 = map.get("character_1");
        String character2 = map.get("character_2");
        String character3 = map.get("character_3");
        String name = map.get("name");
        String period = map.get("period");

        Product product = new Product();
        product.setCharacter_1(character1);
        product.setCharacter_2(character2);
        product.setCharacter_3(character3);
        product.setName(name);
        product.setPeriod(period);
        product.setPrice(price);
        product.setId(id);

        if (productService.editProduct(product)) {
            return new WebResult(200, "修改成功");
        } else {
            return new WebResult(400, "修改失败");
        }
    }


    @CrossOrigin
    @PostMapping("/api/product/queryById")
    @ResponseBody
    public Product queryById(@RequestBody HashMap<String, Integer> map) {
        int id = map.get("id");
        return productService.queryById(id);
    }

}
