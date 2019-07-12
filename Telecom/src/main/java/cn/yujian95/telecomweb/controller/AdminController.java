package cn.yujian95.telecomweb.controller;


import cn.yujian95.telecomweb.dto.UserDto;
import cn.yujian95.telecomweb.dto.WebResult;
import cn.yujian95.telecomweb.pojo.Admin;
import cn.yujian95.telecomweb.service.impl.AdminServiceImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import javax.annotation.Resource;
import java.util.HashMap;

/**
 * @program: rollercat
 * @description: 登录控制器
 * @author: YuJian
 * @create: 2019-06-17 20:04
 **/

@Controller
public class AdminController {

    @Resource
    private AdminServiceImpl adminService;

    @CrossOrigin
    @PostMapping("/api/admin/login")
    @ResponseBody
    public WebResult login(@RequestBody UserDto requestUser) {

        // 对 html 标签进行转义，防止 XSS 攻击
        String username = HtmlUtils.htmlEscape(requestUser.getUserName());
        String password = HtmlUtils.htmlEscape(requestUser.getPassword());

        Admin admin = adminService.login(username, password);

        if (admin == null) {
            return new WebResult(400, "密码或账号错误", -1);
        } else {
            Integer powerId = admin.getPowerId();
            int belong = admin.getBelong();
            return new WebResult(200, powerId.toString(), belong);
        }
    }


    @CrossOrigin
    @PostMapping("/api/admin/editPassword")
    @ResponseBody
    public WebResult editPassword(@RequestBody HashMap<String, String> map) {
        int id = Integer.parseInt(map.get("id"));
        String password = map.get("password");

        Admin admin = new Admin();
        admin.setPassword(password);

        if (adminService.editPassword(admin, password)) {
            return new WebResult(200, "修改成功");
        } else {
            return new WebResult(400, "修改失败");
        }
    }


    @CrossOrigin
    @PostMapping("/api/admin/deleteAdmin")
    @ResponseBody
    public WebResult deleteAdmin(@RequestBody HashMap<String, Integer> map) {
        int id = map.get("id");

        if (adminService.deleteAdmin(id)) {
            return new WebResult(200, "删除成功");
        } else {
            return new WebResult(400, "删除失败");
        }
    }
}

