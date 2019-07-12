package cn.yujian95.telecomweb;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @program: telecomweb
 * @description: web端后台程序启动
 * @author: YuJian
 * @create: 2019-06-23 19:13
 **/

@SpringBootApplication
@MapperScan("cn.yujian95.telecomweb.mapper")
public class TelecomwebApplication {

    public static void main(String[] args) {
        SpringApplication.run(TelecomwebApplication.class, args);
    }
}
