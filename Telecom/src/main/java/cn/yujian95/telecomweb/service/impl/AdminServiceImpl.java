package cn.yujian95.telecomweb.service.impl;

import cn.yujian95.telecomweb.mapper.AdminMapper;
import cn.yujian95.telecomweb.pojo.Admin;
import cn.yujian95.telecomweb.pojo.AdminExample;
import cn.yujian95.telecomweb.service.IAdminService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @program: telecomweb
 * @description: 后台管理员服务
 * @author: YuJian
 * @create: 2019-06-23 21:14
 **/

@Service
public class AdminServiceImpl implements IAdminService {

    @Resource
    private AdminMapper adminMapper;

    /**
     * @Description: 管理员登陆
     * @Param: [name, password]
     * @return: int
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public Admin login(String name, String password) {
        AdminExample adminExample = new AdminExample();
        AdminExample.Criteria criteria = adminExample.createCriteria();
        criteria.andNameEqualTo(name);
        criteria.andPasswordEqualTo(password);

        List<Admin> adminList = adminMapper.selectByExample(adminExample);

        // 登录后台,返回powerId ,公司返回(4),营业厅返回(3),错误返回 -1
        if (adminList.size() <= 0) {
            return null;
        } else {
            return adminList.get(0);
        }
    }

    /**
     * @Description: 修改管理员登陆密码
     * @Param: [admin, password]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean editPassword(Admin admin, String password) {
        Admin oldAdmin = adminMapper.selectByPrimaryKey(admin.getId());
        if (admin.getPassword() == null || "".equals(admin.getPassword())) {
            return false;
        } else if (password.equals(oldAdmin.getPassword())) {
            adminMapper.updateByPrimaryKey(admin);
            return true;
        }

        return false;
    }

    /**
     * @Description: 增加管理员
     * @Param: [admin]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean createAdmin(Admin admin) {
        int row = adminMapper.insertSelective(admin);
        return row >= 0;
    }

    /**
     * @Description: 删除管理员
     * @Param: [id]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean deleteAdmin(int id) {
        int row = adminMapper.deleteByPrimaryKey(id);
        return row >= 0;
    }



}
