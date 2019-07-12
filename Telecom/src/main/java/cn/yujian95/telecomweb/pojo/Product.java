package cn.yujian95.telecomweb.pojo;

public class Product {
    private Integer id;

    private String character_1;

    private String character_2;

    private String character_3;

    private String name;

    private Integer price;

    private String period;

    private Integer companyId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCharacter_1() {
        return character_1;
    }

    public void setCharacter_1(String character_1) {
        this.character_1 = character_1 == null ? null : character_1.trim();
    }

    public String getCharacter_2() {
        return character_2;
    }

    public void setCharacter_2(String character_2) {
        this.character_2 = character_2 == null ? null : character_2.trim();
    }

    public String getCharacter_3() {
        return character_3;
    }

    public void setCharacter_3(String character_3) {
        this.character_3 = character_3 == null ? null : character_3.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period == null ? null : period.trim();
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }
}