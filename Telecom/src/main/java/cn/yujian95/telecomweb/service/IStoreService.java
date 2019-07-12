package cn.yujian95.telecomweb.service;

import cn.yujian95.telecomweb.pojo.Store;

import java.util.List;

/**
 * @program: telecomweb
 * @description: 商店服务接口
 * @author: YuJian
 * @create: 2019-06-24 00:17
 **/

public interface IStoreService {
    boolean editInfo(Store store);  // 修改商店信息

    boolean editPassword(Store store, String password);  // 修改用户密码

    boolean createStore(Store store);  // 创建商店

    boolean deleteStore(int id);  // 删除商店

    List<Store> getAllStore();  // 查找所有商店

    List<Store> queryByName(String name);  // 通过名字查找

    List<Store> queryByShopId(int shopId);  // 查找营业厅所有商店

    Store queryStoreById(int storeId);  // 通过id查找

    Store loginStore(String name, String password);  // 登录商店并绑定用户

    List<Store> searchStore(String key);
}
