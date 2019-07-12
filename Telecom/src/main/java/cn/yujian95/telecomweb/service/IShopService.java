package cn.yujian95.telecomweb.service;

import cn.yujian95.telecomweb.pojo.Shop;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: telecomweb
 * @description: 营业厅服务
 * @author: YuJian
 * @create: 2019-06-23 19:06
 **/

public interface IShopService {

    boolean editInfo(Shop shop);  // 修改营业厅信息

    boolean createShop(Shop shop); // 创建营业厅

    boolean deleteShop(int id);  // 删除营业厅

    List<Shop> queryAllShop(int companyId);  // 查找归属所有

    Shop queryById(int id);  // 查找指定id 营业厅

}
