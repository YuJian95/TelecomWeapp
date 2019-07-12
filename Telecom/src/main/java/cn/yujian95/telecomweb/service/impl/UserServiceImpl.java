package cn.yujian95.telecomweb.service.impl;

import cn.yujian95.telecomweb.mapper.UserMapper;
import cn.yujian95.telecomweb.pojo.User;
import cn.yujian95.telecomweb.pojo.UserExample;
import cn.yujian95.telecomweb.service.IUserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @program: telecomweb
 * @description: 小程序用户实现类
 * @author: YuJian
 * @create: 2019-06-24 03:18
 **/

@Service
public class UserServiceImpl implements IUserService {

    @Resource
    private UserMapper userMapper;

    /**
     * @Description: 创建小程序用户
     * @Param: [user]
     * @return: java.lang.Boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public Boolean createUser(User user) {
        int row = userMapper.insertSelective(user);
        return row >= 0;
    }

    /**
     * @Description: 更新小程序用户信息
     * @Param: [user]
     * @return: java.lang.Boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public Boolean editInfo(User user) {
        int row = userMapper.updateByPrimaryKeySelective(user);
        return row >= 0;
    }

    /**
     * @Description: 查询用户信息
     * @Param: [openid]
     * @return: cn.yujian95.telecomweb.pojo.User
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public User queryUser(String openid) {
        UserExample userExample = new UserExample();
        UserExample.Criteria criteria = userExample.createCriteria();

        criteria.andOpenidEqualTo(openid);
        List<User> userList = userMapper.selectByExample(userExample);

        if (userList.size() == 0) {
            return null;
        } else {
            return userList.get(0);
        }
    }

    @Override
    public User queryUserById(int id) {
        return userMapper.selectByPrimaryKey(id);
    }
}
