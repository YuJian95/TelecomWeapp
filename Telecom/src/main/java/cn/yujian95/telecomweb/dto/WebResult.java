package cn.yujian95.telecomweb.dto;

/**
 * @program: rollercat
 * @description: web请求结果
 * @author: YuJian
 * @create: 2019-06-17 20:01
 **/

public class WebResult {

    /**
     * 返回结果码,200为正常,400为错误
     *
     * @param code
     */
    private int code;

    /**
     * 返回信息
     *
     * @param message
     */
    private String message;

    /**
     * @param object
     */
    private Object object;

    private int id;

    public WebResult() {
    }

    public WebResult(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public WebResult(int code, Object object) {
        this.code = code;
        this.object = object;
    }

    public WebResult(int code, String message, int id) {
        this.code = code;
        this.message = message;
        this.id = id;
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

    public Object getObject() {
        return object;
    }

    public void setObject(Object object) {
        this.object = object;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
