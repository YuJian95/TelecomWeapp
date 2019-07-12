package cn.yujian95.telecomweb.service;

import cn.yujian95.telecomweb.pojo.Company;
import org.springframework.stereotype.Service;

/**
 * @program: telecomweb
 * @description: 公司服务接口
 * @author: YuJian
 * @create: 2019-06-24 00:18
 **/

public interface ICompanyService {

    boolean editInfo(Company company);

    boolean createCompany(Company company);

    boolean deleteCompany(int companyId);

    Company queryCompanyById(int companyId);
}
