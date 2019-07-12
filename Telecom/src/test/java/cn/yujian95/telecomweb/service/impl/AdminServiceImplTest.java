package cn.yujian95.telecomweb.service.impl;

import cn.yujian95.telecomweb.pojo.Admin;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

/**
 * AdminServiceImpl Tester.
 *
 * @author <YuJian>
 * @version 1.0
 * @since <pre>Jun 24, 2019</pre>
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminServiceImplTest {

    @Autowired
    private AdminServiceImpl adminService;

    @Before
    public void before() throws Exception {
    }

    @After
    public void after() throws Exception {
    }

    /**
     * Method: login(String name, String password)
     */
    @Test
    public void testLogin() throws Exception {
        Admin admin = new Admin();
        admin.setName("小小");
        admin.setPassword("1231231");

        assertEquals(4,adminService.login(admin.getName(),admin.getPassword()));
    }

    /**
     * Method: editPassword(Admin admin, String password)
     */
    @Test
    public void testEditPassword() throws Exception {
//TODO: Test goes here... 
    }

    /**
     * Method: createAdmin(Admin admin)
     */
    @Test
    public void testCreateAdmin() throws Exception {
        Admin admin = new Admin();
        admin.setName("测试");
        admin.setPassword("1231231");
        admin.setPowerId(4);

        assertTrue("管理员插入失败", adminService.createAdmin(admin));
    }

    /**
     * Method: deleteAdmin(int id)
     */
    @Test
    public void testDeleteAdmin() throws Exception {
//TODO: Test goes here... 
    }


} 
