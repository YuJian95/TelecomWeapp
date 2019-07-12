package cn.yujian95.telecomweb.service.impl;

import cn.yujian95.telecomweb.mapper.SubscribeMapper;
import cn.yujian95.telecomweb.pojo.Subscribe;
import cn.yujian95.telecomweb.pojo.SubscribeExample;
import cn.yujian95.telecomweb.service.IOrderService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @program: telecomweb
 * @description: 订单服务类
 * @author: YuJian
 * @create: 2019-06-23 20:41
 **/

@Service
public class OrderServiceImpl implements IOrderService {

    @Resource
    private SubscribeMapper orderMapper;

    @Override
    public boolean bookingSubscribe(Subscribe order) {
        int row = orderMapper.insertSelective(order);
        return row >= 0;
    }

    /**
     * @Description: 查找个人订单
     * @Param: [userId]
     * @return: java.util.List<cn.yujian95.telecomweb.pojo.Subscribe>
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public List<Subscribe> mySubscribeList(Integer userId) {
        SubscribeExample orderExample = new SubscribeExample();
//        orderExample.setSubscribeByClause("createDate");
        SubscribeExample.Criteria criteria = orderExample.createCriteria();
        criteria.andUserIdEqualTo(userId);
        List<Subscribe> orderList = orderMapper.selectByExample(orderExample);
        if (orderList.size() == 0) {
            return null;
        } else {
            return orderList;
        }
    }


    /**
     * @Description: 查找营业厅下属订单
     * @Param: [shopId]
     * @return: java.util.List<Subscribe>
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public List<Subscribe> shopList(int shopId) {
        SubscribeExample orderExample = new SubscribeExample();
        SubscribeExample.Criteria criteria = orderExample.createCriteria();

        criteria.andShopIdEqualTo(shopId);
        return orderMapper.selectByExample(orderExample);
    }

    /**
     * @Description: 查找电信公司下属订单
     * @Param: [companyId]
     * @return: java.util.List<Subscribe>
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public List<Subscribe> companyList(int companyId) {
        SubscribeExample orderExample = new SubscribeExample();
        SubscribeExample.Criteria criteria = orderExample.createCriteria();

        criteria.andCompanyIdEqualTo(companyId);

        return orderMapper.selectByExample(orderExample);
    }

    /**
     * @Description: 管理订单状态
     * @Param: [order]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean manageSubscribe(Subscribe order) {
        int row = orderMapper.updateByPrimaryKeySelective(order);
        return row >= 0;
    }

    /**
     * @Description: 根据手机号码查询订单
     * @Param: [num]
     * @return: java.util.List<Subscribe>
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public List<Subscribe> querySubscribeByPhone(String phone) {
        SubscribeExample orderExample = new SubscribeExample();
        SubscribeExample.Criteria criteria = orderExample.createCriteria();

        criteria.andPhoneEqualTo(phone);
        return orderMapper.selectByExample(orderExample);
    }

    /**
     * @Description: 根据姓名查找订单
     * @Param: [name]
     * @return: java.util.List<cn.yujian95.telecomweb.pojo.Subscribe>
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public List<Subscribe> querySubscribeByName(String userName) {
        SubscribeExample orderExample = new SubscribeExample();
        SubscribeExample.Criteria criteria = orderExample.createCriteria();

        criteria.andUserNameEqualTo(userName);
        return orderMapper.selectByExample(orderExample);
    }

    @Override
    public List<Subscribe> querySubscribeByStoreId(int storeId) {
        SubscribeExample orderExample = new SubscribeExample();
        SubscribeExample.Criteria criteria = orderExample.createCriteria();

        criteria.andStoreIdEqualTo(storeId);
        return orderMapper.selectByExample(orderExample);
    }

    @Override
    public Subscribe queryById(int id) {
        return orderMapper.selectByPrimaryKey(id);
    }

    /**
     * @Description: 商店模糊查询用户订单, 通过用户名和电话查询
     * @Param: [keyword, storeId]
     * @return: java.util.List<cn.yujian95.telecomweb.pojo.Subscribe>
     * @Author: YuJian
     * @Date: 6/29/2019
     */
    @Override
    public List<Subscribe> searchByStore(String keyword, int storeId) {
        SubscribeExample orderExample = new SubscribeExample();
        SubscribeExample.Criteria criteria1 = orderExample.createCriteria();
        criteria1.andStoreIdEqualTo(storeId);

        return setSearchOrderPower(keyword, orderExample);
    }


    @Override
    public List<Subscribe> searchByShop(String keyword, int shopId) {
        SubscribeExample orderExample = new SubscribeExample();
        SubscribeExample.Criteria criteria1 = orderExample.createCriteria();
        criteria1.andShopIdEqualTo(shopId);

        return setSearchOrderPower(keyword, orderExample);
    }

    @Override
    public List<Subscribe> searchByCompany(String keyword, int companyId) {
        SubscribeExample orderExample = new SubscribeExample();
        SubscribeExample.Criteria criteria1 = orderExample.createCriteria();
        criteria1.andCompanyIdEqualTo(companyId);

        return setSearchOrderPower(keyword, orderExample);
    }

    /**
     * @Description: 设置查找订单权限
     * @Param: [keyword, orderExample]
     * @return: java.util.List<cn.yujian95.telecomweb.pojo.Subscribe>
     * @Author: YuJian
     * @Date: 6/29/2019
     */
    private List<Subscribe> setSearchOrderPower(String keyword, SubscribeExample orderExample) {
        if (keyword != null) {
            SubscribeExample.Criteria criteria2 = orderExample.createCriteria();
            criteria2.andUserNameLike(keyword);
            orderExample.or(criteria2);
        }

        if (keyword != null) {
            SubscribeExample.Criteria criteria3 = orderExample.createCriteria();
            criteria3.andPhoneLike(keyword);
            orderExample.or(criteria3);
        }

        return orderMapper.selectByExample(orderExample);
    }
}
