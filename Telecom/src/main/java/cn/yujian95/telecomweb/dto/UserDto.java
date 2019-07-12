package cn.yujian95.telecomweb.dto;

/**
 * @program: rollercat
 * @description: 用户类
 * @author: YuJian
 * @create: 2019-06-17 19:56
 **/

public class UserDto {
    private int id;
    private String userName;
    private String password;
    
    /** 
     * @Description:  默认构造方法 
     * @Param: [] 
     * @return:  
     * @Author: YuJian
     * @Date: 6/17/2019 
     */

    public UserDto(){

    }

    public UserDto(int id, String userName, String password) {
        this.id = id;
        this.userName = userName;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

