package cn.yujian95.telecomweb.service;

import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * @program: telecomweb
 * @description: 提供数据统计功能接口
 * @author: YuJian
 * @create: 2019-06-23 20:31
 **/

public interface IDataService {
    double companyPrice(int company);

    List companyPrice(Date from, Date to);


}
