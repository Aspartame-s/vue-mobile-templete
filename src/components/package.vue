<template>
  <!-- <div class="package">套餐</div> -->
  <van-card
    :desc="item.packageDetail"
    :title="item.packageName"
    thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
  >
  <template #footer>
    <van-stepper v-model.number="item.num" integer min="" @plus="plus(item)" @minus="minus(item)" @change="change($event, item)" />
  </template>
  </van-card>
</template>

<script>
export default {
  name: "packageTemplete",
  components: {},
  data() {
    return {
        value: 0,
    };
  },
  props: {
      item: Object
  },
  computed: {
      getTotalPrivate() {
          return 
      }
  },
  watch: {},
  methods: {
      plus(item) {
          item.num = item.num + 1
      },
      minus(item) {
        item.num = item.num - 1
      },
      change(e, item) {
          item.num = e
      }

  },
  created() {},
  mounted() {},
};
</script>
<style lang='scss' scoped>
.package {
  width: 90%;
  height: 2rem;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);
  margin-top: 0.3rem;
  background-color: #fff;
}
</style>