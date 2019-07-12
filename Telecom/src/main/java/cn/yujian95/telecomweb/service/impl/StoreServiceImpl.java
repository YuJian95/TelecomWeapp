package cn.yujian95.telecomweb.service.impl;

import cn.yujian95.telecomweb.mapper.StoreMapper;
import cn.yujian95.telecomweb.pojo.Store;
import cn.yujian95.telecomweb.pojo.StoreExample;
import cn.yujian95.telecomweb.service.IStoreService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @program: telecomweb
 * @description: 商店服务实现类
 * @author: YuJian
 * @create: 2019-06-24 01:56
 **/

@Service
public class StoreServiceImpl implements IStoreService {

    @Resource
    private StoreMapper storeMapper;

    /**
     * @Description: 修改商店信息
     * @Param: [store]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean editInfo(Store store) {
        int row = storeMapper.updateByPrimaryKeySelective(store);
        return row >= 0;
    }

    /**
     * @Description: 修改商店密码
     * @Param: [store, password]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean editPassword(Store store, String password) {
        Store oldStore = storeMapper.selectByPrimaryKey(store.getId());
        if (store.getPassword() == null || "".equals(store.getPassword())) {
            return false;
        } else if (password.equals(oldStore.getPassword())) {
            storeMapper.updateByPrimaryKeySelective(store);
            return true;
        }

        return false;
    }

    /**
     * @Description: 添加商店
     * @Param: [store]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean createStore(Store store) {
        int row = storeMapper.insertSelective(store);
        return row >= 0;
    }

    /**
     * @Description: 删除商店
     * @Param: [id]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean deleteStore(int id) {
        int row = storeMapper.deleteByPrimaryKey(id);
        return row >= 0;
    }

    /**
     * @Description: 获取所有商店
     * @Param: []
     * @return: java.util.List<cn.yujian95.telecomweb.pojo.Store>
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public List<Store> getAllStore() {
        return storeMapper.selectByExample(null);
    }

    /**
     * @Description: 搜索指定名称的商店
     * @Param: [name]
     * @return: java.util.List<cn.yujian95.telecomweb.pojo.Store>
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public List<Store> queryByName(String name) {
        StoreExample storeExample = new StoreExample();
        StoreExample.Criteria criteria = storeExample.createCriteria();

        criteria.andStoreNameEqualTo(name);
        return storeMapper.selectByExample(storeExample);
    }

    @Override
    public List<Store> queryByShopId(int shopId) {
        StoreExample storeExample = new StoreExample();
        StoreExample.Criteria criteria = storeExample.createCriteria();

        criteria.andShopIdEqualTo(shopId);
        return storeMapper.selectByExample(storeExample);
    }

    @Override
    public Store queryStoreById(int storeId) {
        return storeMapper.selectByPrimaryKey(storeId);
    }

    @Override
    public Store loginStore(String name, String password) {
        StoreExample storeExample = new StoreExample();
        StoreExample.Criteria criteria = storeExample.createCriteria();

        criteria.andNameEqualTo(name);
        criteria.andPasswordEqualTo(password);

        List<Store> storeList = storeMapper.selectByExample(storeExample);
        if (storeList.size() == 0) {
            return null;
        } else {
            return storeList.get(0);
        }
    }

    @Override
    public List<Store> searchStore(String key) {
        StoreExample storeExample = new StoreExample();
        String keyWord = "%" + key + "%";
        if (key != null) {
            StoreExample.Criteria criteria1 = storeExample.createCriteria();
            criteria1.andStoreNameLike(keyWord);
            storeExample.or(criteria1);
        }
        if (key != null) {
            StoreExample.Criteria criteria2 = storeExample.createCriteria();
            criteria2.andAddressLike(keyWord);
            storeExample.or(criteria2);
        }
        if (key != null) {
            StoreExample.Criteria criteria3 = storeExample.createCriteria();
            criteria3.andRegionLike(keyWord);
            storeExample.or(criteria3);
        }

        if (key == null || "".equals(key)) {
            return null;
        }

        return storeMapper.selectByExample(storeExample);
    }
}
