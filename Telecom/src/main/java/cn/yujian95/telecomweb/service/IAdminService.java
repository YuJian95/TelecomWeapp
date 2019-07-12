package cn.yujian95.telecomweb.service;

import cn.yujian95.telecomweb.pojo.Admin;

/**
 * @program: telecomweb
 * @description: 后台管理员接口
 * @author: YuJian
 * @create: 2019-06-23 21:16
 **/

public interface IAdminService {
    Admin login(String name, String password);  // 登录后台,返回powerId ,公司返回(4),营业厅返回(3) ,密码错误返回 -1

    boolean editPassword(Admin admin, String password);  // 修改登录密码,password 为原来的密码

    boolean createAdmin(Admin admin);  // 增加管理员

    boolean deleteAdmin(int id);  // 删除管理员

}
