package cn.yujian95.telecomweb.controller;

import cn.yujian95.telecomweb.dto.WebResult;
import cn.yujian95.telecomweb.pojo.Company;
import cn.yujian95.telecomweb.service.impl.CompanyServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.HashMap;

/**
 * @program: telecomweb
 * @description: 公司请求控制器
 * @author: YuJian
 * @create: 2019-06-24 18:48
 **/

@Controller
public class CompanyController {

    @Autowired
    private CompanyServiceImpl companyService;

    @CrossOrigin
    @PostMapping("/api/company/createCompany")
    @ResponseBody
    public WebResult createCompany(@RequestBody HashMap<String, String> map) {
        String address = map.get("address");
        String name = map.get("name");
        int phone = Integer.parseInt(map.get("phone"));
        Date createDate = new Date();

        Company company = new Company();
        company.setAddress(address);
        company.setCreateDate(createDate);
        company.setName(name);
        company.setPhone(phone);

        if (companyService.createCompany(company)) {
            return new WebResult(200, "创建成功");
        } else {
            return new WebResult(400, "创建失败");
        }
    }

    @CrossOrigin
    @PostMapping("/api/company/editInfo")
    @ResponseBody
    public WebResult editInfo(@RequestBody HashMap<String, String> map) {
        int id = Integer.parseInt(map.get("id"));
        String address = map.get("address");
        String name = map.get("name");
        int phone = Integer.parseInt(map.get("phone"));
        Date updateDate = new Date();

        Company company = new Company();
        company.setId(id);
        company.setAddress(address);
        company.setCreateDate(updateDate);
        company.setName(name);
        company.setPhone(phone);

        if (companyService.editInfo(company)) {
            return new WebResult(200, "修改成功");
        } else {
            return new WebResult(400, "修改失败");
        }
    }

    @CrossOrigin
    @PostMapping("/api/company/deleteCompany")
    @ResponseBody
    public WebResult deleteCompany(@RequestBody HashMap<String, Integer> map) {
        int companyId = map.get("companyId");
        if (companyService.deleteCompany(companyId)) {
            return new WebResult(200, "删除成功");
        } else {
            return new WebResult(400, "删除失败");
        }

    }

    @CrossOrigin
    @PostMapping("/api/company/findCompanyById")
    @ResponseBody
    public Company findCompanyById(@RequestBody HashMap<String, Integer> map) {
        int companyId = map.get("companyId");

        return companyService.queryCompanyById(companyId);
    }
}
