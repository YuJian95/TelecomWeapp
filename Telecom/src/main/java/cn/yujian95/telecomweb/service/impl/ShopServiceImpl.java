package cn.yujian95.telecomweb.service.impl;

import cn.yujian95.telecomweb.mapper.ShopMapper;
import cn.yujian95.telecomweb.pojo.Shop;
import cn.yujian95.telecomweb.pojo.ShopExample;
import cn.yujian95.telecomweb.service.IShopService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @program: telecomweb
 * @description: 营业厅服务实现类
 * @author: YuJian
 * @create: 2019-06-23 20:12
 **/

@Service
public class ShopServiceImpl implements IShopService {

    @Resource
    private ShopMapper shopMapper;

    /**
     * @Description: 修改营业厅信息
     * @Param: [shop]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean editInfo(Shop shop) {
        int row = shopMapper.updateByPrimaryKeySelective(shop);
        return row >= 0;

    }

    /**
     * @Description: 添加添加营业厅
     * @Param: [shop]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean createShop(Shop shop) {
        int row = shopMapper.insertSelective(shop);
        return row >= 0;
    }

    /**
     * @Description: 删除营业厅
     * @Param: [id]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean deleteShop(int id) {
        int row = shopMapper.deleteByPrimaryKey(id);
        return row >= 0;
    }

    /**
     * @Description: 查询归属的营业厅
     * @Param: [companyId]
     * @return: java.util.List<cn.yujian95.telecomweb.pojo.Shop>
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public List<Shop> queryAllShop(int companyId) {
        ShopExample shopExample = new ShopExample();
        ShopExample.Criteria criteria = shopExample.createCriteria();

        criteria.andCompanyIdEqualTo(companyId);
        return shopMapper.selectByExample(shopExample);
    }

    /**
     * @Description: 查询指定营业厅信息
     * @Param: [id]
     * @return: cn.yujian95.telecomweb.pojo.Shop
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public Shop queryById(int id) {
        return shopMapper.selectByPrimaryKey(id);
    }


}
