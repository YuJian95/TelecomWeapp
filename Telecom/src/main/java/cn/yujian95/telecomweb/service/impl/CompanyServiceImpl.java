package cn.yujian95.telecomweb.service.impl;

import cn.yujian95.telecomweb.mapper.CompanyMapper;
import cn.yujian95.telecomweb.pojo.Company;
import cn.yujian95.telecomweb.service.ICompanyService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @program: telecomweb
 * @description: 电信公司实现类
 * @author: YuJian
 * @create: 2019-06-24 03:08
 **/

@Service
public class CompanyServiceImpl implements ICompanyService {

    @Resource
    private CompanyMapper companyMapper;


    @Override
    public boolean editInfo(Company company) {
        int row = companyMapper.updateByPrimaryKeySelective(company);
        return row >= 0;
    }

    @Override
    public boolean createCompany(Company company) {
        int row = companyMapper.insertSelective(company);
        return row >= 0;
    }

    @Override
    public boolean deleteCompany(int id) {
        int row = companyMapper.deleteByPrimaryKey(id);
        return row >= 0;
    }

    @Override
    public Company queryCompanyById(int companyId) {
        return companyMapper.selectByPrimaryKey(companyId);
    }
}
