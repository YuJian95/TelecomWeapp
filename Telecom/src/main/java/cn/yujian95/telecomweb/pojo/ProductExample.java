package cn.yujian95.telecomweb.pojo;

import java.util.ArrayList;
import java.util.List;

public class ProductExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public ProductExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andCharacter_1IsNull() {
            addCriterion("character_1 is null");
            return (Criteria) this;
        }

        public Criteria andCharacter_1IsNotNull() {
            addCriterion("character_1 is not null");
            return (Criteria) this;
        }

        public Criteria andCharacter_1EqualTo(String value) {
            addCriterion("character_1 =", value, "character_1");
            return (Criteria) this;
        }

        public Criteria andCharacter_1NotEqualTo(String value) {
            addCriterion("character_1 <>", value, "character_1");
            return (Criteria) this;
        }

        public Criteria andCharacter_1GreaterThan(String value) {
            addCriterion("character_1 >", value, "character_1");
            return (Criteria) this;
        }

        public Criteria andCharacter_1GreaterThanOrEqualTo(String value) {
            addCriterion("character_1 >=", value, "character_1");
            return (Criteria) this;
        }

        public Criteria andCharacter_1LessThan(String value) {
            addCriterion("character_1 <", value, "character_1");
            return (Criteria) this;
        }

        public Criteria andCharacter_1LessThanOrEqualTo(String value) {
            addCriterion("character_1 <=", value, "character_1");
            return (Criteria) this;
        }

        public Criteria andCharacter_1Like(String value) {
            addCriterion("character_1 like", value, "character_1");
            return (Criteria) this;
        }

        public Criteria andCharacter_1NotLike(String value) {
            addCriterion("character_1 not like", value, "character_1");
            return (Criteria) this;
        }

        public Criteria andCharacter_1In(List<String> values) {
            addCriterion("character_1 in", values, "character_1");
            return (Criteria) this;
        }

        public Criteria andCharacter_1NotIn(List<String> values) {
            addCriterion("character_1 not in", values, "character_1");
            return (Criteria) this;
        }

        public Criteria andCharacter_1Between(String value1, String value2) {
            addCriterion("character_1 between", value1, value2, "character_1");
            return (Criteria) this;
        }

        public Criteria andCharacter_1NotBetween(String value1, String value2) {
            addCriterion("character_1 not between", value1, value2, "character_1");
            return (Criteria) this;
        }

        public Criteria andCharacter_2IsNull() {
            addCriterion("character_2 is null");
            return (Criteria) this;
        }

        public Criteria andCharacter_2IsNotNull() {
            addCriterion("character_2 is not null");
            return (Criteria) this;
        }

        public Criteria andCharacter_2EqualTo(String value) {
            addCriterion("character_2 =", value, "character_2");
            return (Criteria) this;
        }

        public Criteria andCharacter_2NotEqualTo(String value) {
            addCriterion("character_2 <>", value, "character_2");
            return (Criteria) this;
        }

        public Criteria andCharacter_2GreaterThan(String value) {
            addCriterion("character_2 >", value, "character_2");
            return (Criteria) this;
        }

        public Criteria andCharacter_2GreaterThanOrEqualTo(String value) {
            addCriterion("character_2 >=", value, "character_2");
            return (Criteria) this;
        }

        public Criteria andCharacter_2LessThan(String value) {
            addCriterion("character_2 <", value, "character_2");
            return (Criteria) this;
        }

        public Criteria andCharacter_2LessThanOrEqualTo(String value) {
            addCriterion("character_2 <=", value, "character_2");
            return (Criteria) this;
        }

        public Criteria andCharacter_2Like(String value) {
            addCriterion("character_2 like", value, "character_2");
            return (Criteria) this;
        }

        public Criteria andCharacter_2NotLike(String value) {
            addCriterion("character_2 not like", value, "character_2");
            return (Criteria) this;
        }

        public Criteria andCharacter_2In(List<String> values) {
            addCriterion("character_2 in", values, "character_2");
            return (Criteria) this;
        }

        public Criteria andCharacter_2NotIn(List<String> values) {
            addCriterion("character_2 not in", values, "character_2");
            return (Criteria) this;
        }

        public Criteria andCharacter_2Between(String value1, String value2) {
            addCriterion("character_2 between", value1, value2, "character_2");
            return (Criteria) this;
        }

        public Criteria andCharacter_2NotBetween(String value1, String value2) {
            addCriterion("character_2 not between", value1, value2, "character_2");
            return (Criteria) this;
        }

        public Criteria andCharacter_3IsNull() {
            addCriterion("character_3 is null");
            return (Criteria) this;
        }

        public Criteria andCharacter_3IsNotNull() {
            addCriterion("character_3 is not null");
            return (Criteria) this;
        }

        public Criteria andCharacter_3EqualTo(String value) {
            addCriterion("character_3 =", value, "character_3");
            return (Criteria) this;
        }

        public Criteria andCharacter_3NotEqualTo(String value) {
            addCriterion("character_3 <>", value, "character_3");
            return (Criteria) this;
        }

        public Criteria andCharacter_3GreaterThan(String value) {
            addCriterion("character_3 >", value, "character_3");
            return (Criteria) this;
        }

        public Criteria andCharacter_3GreaterThanOrEqualTo(String value) {
            addCriterion("character_3 >=", value, "character_3");
            return (Criteria) this;
        }

        public Criteria andCharacter_3LessThan(String value) {
            addCriterion("character_3 <", value, "character_3");
            return (Criteria) this;
        }

        public Criteria andCharacter_3LessThanOrEqualTo(String value) {
            addCriterion("character_3 <=", value, "character_3");
            return (Criteria) this;
        }

        public Criteria andCharacter_3Like(String value) {
            addCriterion("character_3 like", value, "character_3");
            return (Criteria) this;
        }

        public Criteria andCharacter_3NotLike(String value) {
            addCriterion("character_3 not like", value, "character_3");
            return (Criteria) this;
        }

        public Criteria andCharacter_3In(List<String> values) {
            addCriterion("character_3 in", values, "character_3");
            return (Criteria) this;
        }

        public Criteria andCharacter_3NotIn(List<String> values) {
            addCriterion("character_3 not in", values, "character_3");
            return (Criteria) this;
        }

        public Criteria andCharacter_3Between(String value1, String value2) {
            addCriterion("character_3 between", value1, value2, "character_3");
            return (Criteria) this;
        }

        public Criteria andCharacter_3NotBetween(String value1, String value2) {
            addCriterion("character_3 not between", value1, value2, "character_3");
            return (Criteria) this;
        }

        public Criteria andNameIsNull() {
            addCriterion("name is null");
            return (Criteria) this;
        }

        public Criteria andNameIsNotNull() {
            addCriterion("name is not null");
            return (Criteria) this;
        }

        public Criteria andNameEqualTo(String value) {
            addCriterion("name =", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotEqualTo(String value) {
            addCriterion("name <>", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameGreaterThan(String value) {
            addCriterion("name >", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameGreaterThanOrEqualTo(String value) {
            addCriterion("name >=", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLessThan(String value) {
            addCriterion("name <", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLessThanOrEqualTo(String value) {
            addCriterion("name <=", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLike(String value) {
            addCriterion("name like", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotLike(String value) {
            addCriterion("name not like", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameIn(List<String> values) {
            addCriterion("name in", values, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotIn(List<String> values) {
            addCriterion("name not in", values, "name");
            return (Criteria) this;
        }

        public Criteria andNameBetween(String value1, String value2) {
            addCriterion("name between", value1, value2, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotBetween(String value1, String value2) {
            addCriterion("name not between", value1, value2, "name");
            return (Criteria) this;
        }

        public Criteria andPriceIsNull() {
            addCriterion("price is null");
            return (Criteria) this;
        }

        public Criteria andPriceIsNotNull() {
            addCriterion("price is not null");
            return (Criteria) this;
        }

        public Criteria andPriceEqualTo(Integer value) {
            addCriterion("price =", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceNotEqualTo(Integer value) {
            addCriterion("price <>", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceGreaterThan(Integer value) {
            addCriterion("price >", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceGreaterThanOrEqualTo(Integer value) {
            addCriterion("price >=", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceLessThan(Integer value) {
            addCriterion("price <", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceLessThanOrEqualTo(Integer value) {
            addCriterion("price <=", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceIn(List<Integer> values) {
            addCriterion("price in", values, "price");
            return (Criteria) this;
        }

        public Criteria andPriceNotIn(List<Integer> values) {
            addCriterion("price not in", values, "price");
            return (Criteria) this;
        }

        public Criteria andPriceBetween(Integer value1, Integer value2) {
            addCriterion("price between", value1, value2, "price");
            return (Criteria) this;
        }

        public Criteria andPriceNotBetween(Integer value1, Integer value2) {
            addCriterion("price not between", value1, value2, "price");
            return (Criteria) this;
        }

        public Criteria andPeriodIsNull() {
            addCriterion("period is null");
            return (Criteria) this;
        }

        public Criteria andPeriodIsNotNull() {
            addCriterion("period is not null");
            return (Criteria) this;
        }

        public Criteria andPeriodEqualTo(String value) {
            addCriterion("period =", value, "period");
            return (Criteria) this;
        }

        public Criteria andPeriodNotEqualTo(String value) {
            addCriterion("period <>", value, "period");
            return (Criteria) this;
        }

        public Criteria andPeriodGreaterThan(String value) {
            addCriterion("period >", value, "period");
            return (Criteria) this;
        }

        public Criteria andPeriodGreaterThanOrEqualTo(String value) {
            addCriterion("period >=", value, "period");
            return (Criteria) this;
        }

        public Criteria andPeriodLessThan(String value) {
            addCriterion("period <", value, "period");
            return (Criteria) this;
        }

        public Criteria andPeriodLessThanOrEqualTo(String value) {
            addCriterion("period <=", value, "period");
            return (Criteria) this;
        }

        public Criteria andPeriodLike(String value) {
            addCriterion("period like", value, "period");
            return (Criteria) this;
        }

        public Criteria andPeriodNotLike(String value) {
            addCriterion("period not like", value, "period");
            return (Criteria) this;
        }

        public Criteria andPeriodIn(List<String> values) {
            addCriterion("period in", values, "period");
            return (Criteria) this;
        }

        public Criteria andPeriodNotIn(List<String> values) {
            addCriterion("period not in", values, "period");
            return (Criteria) this;
        }

        public Criteria andPeriodBetween(String value1, String value2) {
            addCriterion("period between", value1, value2, "period");
            return (Criteria) this;
        }

        public Criteria andPeriodNotBetween(String value1, String value2) {
            addCriterion("period not between", value1, value2, "period");
            return (Criteria) this;
        }

        public Criteria andCompanyIdIsNull() {
            addCriterion("companyId is null");
            return (Criteria) this;
        }

        public Criteria andCompanyIdIsNotNull() {
            addCriterion("companyId is not null");
            return (Criteria) this;
        }

        public Criteria andCompanyIdEqualTo(Integer value) {
            addCriterion("companyId =", value, "companyId");
            return (Criteria) this;
        }

        public Criteria andCompanyIdNotEqualTo(Integer value) {
            addCriterion("companyId <>", value, "companyId");
            return (Criteria) this;
        }

        public Criteria andCompanyIdGreaterThan(Integer value) {
            addCriterion("companyId >", value, "companyId");
            return (Criteria) this;
        }

        public Criteria andCompanyIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("companyId >=", value, "companyId");
            return (Criteria) this;
        }

        public Criteria andCompanyIdLessThan(Integer value) {
            addCriterion("companyId <", value, "companyId");
            return (Criteria) this;
        }

        public Criteria andCompanyIdLessThanOrEqualTo(Integer value) {
            addCriterion("companyId <=", value, "companyId");
            return (Criteria) this;
        }

        public Criteria andCompanyIdIn(List<Integer> values) {
            addCriterion("companyId in", values, "companyId");
            return (Criteria) this;
        }

        public Criteria andCompanyIdNotIn(List<Integer> values) {
            addCriterion("companyId not in", values, "companyId");
            return (Criteria) this;
        }

        public Criteria andCompanyIdBetween(Integer value1, Integer value2) {
            addCriterion("companyId between", value1, value2, "companyId");
            return (Criteria) this;
        }

        public Criteria andCompanyIdNotBetween(Integer value1, Integer value2) {
            addCriterion("companyId not between", value1, value2, "companyId");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}