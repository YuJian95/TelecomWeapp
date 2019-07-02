-- web后台的电信公司管理员,营业厅表

create table admin
(
    id       int auto_increment
        primary key,
    name     varchar(20) null,
    password varchar(20) null,
    powerId  int         null,
    belong   int         null,
    constraint admin_name_uindex
        unique (name)
);

-- 电信公司表

create table company
(
    id         int auto_increment
        primary key,
    address    varchar(40) null,
    createDate date        null,
    updateDate date        null,
    name       varchar(20) null,
    phone      int         null
);

-- 电信套餐表

create table product
(
    id          int auto_increment
        primary key,
    character_1 varchar(20) null,
    character_2 varchar(20) null,
    character_3 varchar(20) null,
    name        varchar(20) null,
    price       int         null,
    period      varchar(10) null,
    companyId   int         null
);

-- 营业厅表

create table shop
(
    id        int unsigned auto_increment
        primary key,
    name      varchar(40)  null,
    phone     varchar(20)  null,
    address   varchar(140) null,
    region    varchar(10)  null,
    companyId int          null
);

-- 商店表

create table store
(
    id        int auto_increment
        primary key,
    name      varchar(20)  null,
    address   varchar(140) null,
    phone     int          null,
    region    varchar(20)  null,
    shopId    int          null,
    password  varchar(20)  null,
    storeName varchar(20)  null
);

-- 订单表

create table subscribe
(
    id          int auto_increment
        primary key,
    userId      int          null,
    createDate  date         null,
    updateDate  date         null,
    finishDate  date         null,
    productId   int          null,
    note        varchar(140) null,
    storeId     int          null,
    shopId      int          null,
    companyId   int          null,
    phone       varchar(18)  null,
    orderStatus varchar(18)  null,
    userName    varchar(18)  null
);

-- 小程序普通用户表

create table user
(
    id       int auto_increment
        primary key,
    openid   varchar(30)  null,
    storeId  int          null,
    nickName varchar(20)  null,
    phone    varchar(18)  null,
    region   varchar(20)  null,
    address  varchar(140) null,
    constraint user_openid_uindex
        unique (openid)
);

