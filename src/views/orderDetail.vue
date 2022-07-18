<template>
  <div class="common-container">
    <div class="type">下单类型：{{ packageType }}</div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <span>{{ item.packageName }}</span>
      <span>数量：{{ item.num }}</span>
    </div>
    <div class="total-price">总价格：{{ totalPrice }}</div>
    <div class="button">
      <van-button type="primary" size="large">结算</van-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      packageType: null,
      list: [],
      totalPrice: null,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    this.$store.commit("changeTitle", "订单详情");
    const { list, type } = this.$route.query;
    this.packageType = type;
    this.list = list;
    let num = 0;
    list.forEach((item) => {
      num += item.num;
    });
    if (type == "私餐") {
      this.totalPrice = (num - 1) * 36 + 6;
    } else {
      this.totalPrice = 0;
    }
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
.common-container {
  padding: 0.2rem 1.5rem;
  .type {
    width: 100%;
    @include center;
    font-size: 0.4rem;
    margin-bottom: 0.2rem;
  }
  .item {
    width: 100%;
    @include between;
    span {
      font-size: 0.4rem;
    }
  }
  .total-price {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    font-size: 0.3rem;
    width: 100%;
    text-align: right;
  }
}
</style>