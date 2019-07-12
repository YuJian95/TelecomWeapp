package cn.yujian95.telecomweb.utils;

import java.util.Date;

/**
 * @program: telecomweb
 * @description: 日期时间工具类
 * @author: YuJian
 * @create: 2019-06-24 09:18
 **/

public class DateUtil {
    public static java.sql.Date getDate() {
        java.util.Date date = new java.util.Date();
        int d = date.getDate();
        int m = date.getMonth();
        int y = date.getYear();
        return new java.sql.Date(y, m, d);
    }
}
