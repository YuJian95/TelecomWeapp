package cn.yujian95.telecomweb.service.impl;

import cn.yujian95.telecomweb.mapper.ProductMapper;
import cn.yujian95.telecomweb.pojo.Product;
import cn.yujian95.telecomweb.pojo.ProductExample;
import cn.yujian95.telecomweb.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @program: telecomweb
 * @description: 套餐信息实现接口
 * @author: YuJian
 * @create: 2019-06-24 02:51
 **/

@Service
public class ProductServiceImpl implements IProductService {

    @Resource
    private ProductMapper productMapper;

    /**
     * @Description: 获取公司所有套餐信息
     * @Param: [companyId]
     * @return: java.util.List<cn.yujian95.telecomweb.pojo.Product>
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public List<Product> getAllProduct(int companyId) {
        ProductExample productExample = new ProductExample();
        ProductExample.Criteria criteria = productExample.createCriteria();

        criteria.andCompanyIdEqualTo(companyId);
        return productMapper.selectByExample(productExample);
    }

    /**
     * @Description: 添加套餐
     * @Param: [product]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean addProduct(Product product) {
        int row = productMapper.insertSelective(product);
        return row >= 0;
    }

    /**
     * @Description: 修改套餐信息
     * @Param: [product]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean editProduct(Product product) {
        int row = productMapper.updateByPrimaryKeySelective(product);
        return row >= 0;
    }

    /**
     * @Description: 删除套餐
     * @Param: [id]
     * @return: boolean
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public boolean deleteProduct(int id) {
        int row = productMapper.deleteByPrimaryKey(id);
        return row >= 0;
    }

    /**
     * @Description: 查询套餐
     * @Param: [id]
     * @return: cn.yujian95.telecomweb.pojo.Product
     * @Author: YuJian
     * @Date: 6/24/2019
     */
    @Override
    public Product queryById(int id) {
        return productMapper.selectByPrimaryKey(id);
    }
}
