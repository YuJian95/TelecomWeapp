package cn.yujian95.telecomweb.dto;

/**
 * @program: telecomweb
 * @description: 微信小程序请求数据返回包装类
 * @author: YuJian
 * @create: 2019-06-23 20:36
 **/

public class WeAppResult {

    private int code;
    private String message;

    public WeAppResult() {
    }

    public WeAppResult(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
