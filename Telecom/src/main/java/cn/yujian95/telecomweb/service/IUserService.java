package cn.yujian95.telecomweb.service;

import cn.yujian95.telecomweb.pojo.User;
import org.springframework.stereotype.Service;

/**
 * @program: telecomweb
 * @description: 小程序用户相关接口
 * @author: YuJian
 * @create: 2019-06-23 20:33
 **/

public interface IUserService {
    Boolean createUser(User user); // 创建用户

    Boolean editInfo(User user);  // 修改用户信息

    User queryUser(String openid); // 根据openid进行查询

    User queryUserById(int id);  // 根据id进行查询

}
