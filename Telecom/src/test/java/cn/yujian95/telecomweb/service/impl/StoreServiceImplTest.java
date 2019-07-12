package cn.yujian95.telecomweb.service.impl;

import cn.yujian95.telecomweb.pojo.Store;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.*;

/**
 * StoreServiceImpl Tester.
 *
 * @author <YuJian>
 * @version 1.0
 * @since <pre>Jun 24, 2019</pre>
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class StoreServiceImplTest {

    @Autowired
    private StoreServiceImpl storeService;

    @Before
    public void before() throws Exception {
    }

    @After
    public void after() throws Exception {
    }

    /**
     * Method: editInfo(Store store)
     */
    @Test
    public void testEditInfo() throws Exception {
//TODO: Test goes here... 
    }

    /**
     * Method: editPassword(Store store, String password)
     */
    @Test
    public void testEditPassword() throws Exception {
//TODO: Test goes here... 
    }

    /**
     * Method: createStore(Store store)
     */
    @Test
    public void testCreateStore() throws Exception {
//TODO: Test goes here... 
    }

    /**
     * Method: deleteStore(int id)
     */
    @Test
    public void testDeleteStore() throws Exception {
//TODO: Test goes here... 
    }

    /**
     * Method: getAllStore()
     */
    @Test
    public void testGetAllStore() throws Exception {
        List<Store> storeList = storeService.getAllStore();
        System.out.println(storeList.size());
    }

    /**
     * Method: queryByName(String name)
     */
    @Test
    public void testQueryByName() throws Exception {
//TODO: Test goes here... 
    }


} 
