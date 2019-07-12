package cn.yujian95.telecomweb.controller;

import cn.yujian95.telecomweb.dto.WeAppResult;
import cn.yujian95.telecomweb.pojo.User;
import cn.yujian95.telecomweb.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

/**
 * @program: telecomweb
 * @description: 小程序用户请求控制器
 * @author: YuJian
 * @create: 2019-06-24 19:04
 **/

@Controller
public class UserController {

    @Autowired
    private UserServiceImpl userService;


    /**
     * @Description: 用户登录, 返回用户信息
     * @Param: [user]
     * @return: cn.yujian95.telecomweb.pojo.User
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @CrossOrigin
    @PostMapping("/api/user/login")
    @ResponseBody
    private User login(@RequestBody HashMap<String, String> map) {
        String openid = map.get("openid");
        String region = map.get("region");
        String nickname = map.get("nickname");
        User targetUser = userService.queryUser(openid);
        if (targetUser == null) {
            User user = new User();
            user.setOpenid(openid);
            user.setRegion(region);
            user.setNickName(nickname);
            userService.createUser(user);
        }
        return userService.queryUser(openid);
    }

    @CrossOrigin
    @PostMapping("/api/user/queryById")
    @ResponseBody
    private User queryUserById(@RequestBody HashMap<String, Integer> map) {
        int id = map.get("id");
        return userService.queryUserById(id);
    }

    @CrossOrigin
    @PostMapping("/api/user/editInfo")
    @ResponseBody
    private WeAppResult editInfo(@RequestBody HashMap<String, String> map) {
        int id = Integer.parseInt(map.get("id"));
        String name = map.get("nickname");
        String address = map.get("address");
        String phone = map.get("phone");
        String region = map.get("region");
        User user = new User();
        user.setId(id);
        user.setNickName(name);
        user.setRegion(region);
        user.setAddress(address);
        user.setPhone(phone);

        if (userService.editInfo(user)) {
            return new WeAppResult(200, "修改成功");
        } else {
            return new WeAppResult(400, "修改失败");
        }
    }


}
