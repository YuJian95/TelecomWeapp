package cn.yujian95.telecomweb.service;

import cn.yujian95.telecomweb.pojo.Product;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: telecomweb
 * @description: 套餐服务接口
 * @author: YuJian
 * @create: 2019-06-24 00:15
 **/

public interface IProductService {

    List<Product> getAllProduct(int companyId);

    boolean addProduct(Product product);

    boolean editProduct(Product product);

    boolean deleteProduct(int id);

    Product queryById(int id);
}
