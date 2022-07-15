<template>
  <div class="common-container">
    <van-tabs v-model="active">
      <van-tab title="私餐">
        <div
          v-for="(item, index) in packageList"
          :key="index"
          style="margin-bottom: 10px"
        >
          <package-templete :item="item" ref="pacTemp"></package-templete>
        </div>
        <div class="tip">注：第一份6元，第二份起每份36元</div>
        <div class="package-count">
          <span class="private">私餐数量：{{ getPrivateNum }}</span>
        </div>
        <div class="btn-box">
          <van-button type="primary" @click="go">下单</van-button>
        </div>
      </van-tab>
      <van-tab title="公餐">
        <div
          v-for="(item, index) in publicList"
          :key="index"
          style="margin-bottom: 10px"
        >
          <package-templete :item="item"></package-templete>
        </div>
        <div class="package-count">
          <span class="public">公餐数量：{{getPublicNum}}</span>
        </div>
        <div class="btn-box">
          <van-button type="info">公餐审批</van-button>
        </div>
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="留言"
          type="textarea"
          placeholder="请输入留言"
        />
        <div class="btn-box">
          <van-button type="primary" @click="go">下单</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import packageTemplete from "@/components/package.vue";
export default {
  components: {
    packageTemplete,
  },
  data() {
    return {
      active: 0,
      packageList: [
        {
          id: 1,
          packageName: "套餐1",
          packageDetail:
            "西红柿炒蛋、红烧排骨、青菜汤、地三鲜、宫保鸡丁、烤鸡、烧烤、饮料",
          url: "",
          num: 0,
        },
        {
          id: 2,
          packageName: "套餐2",
          packageDetail:
            "卡特琳娜、德莱厄斯、菲兹、瑞兹、弗拉基米尔、卡西奥佩娅",
          url: "",
          num: 0,
        },
        {
          id: 3,
          packageName: "套餐3",
          packageDetail:
            "伊莉丝、伊芙琳、费德提克、爱妮维雅、锐雯、赵信、泰达米尔",
          url: "",
          num: 0,
        },
      ],
      publicList: [
        {
          id: 1,
          packageName: "套餐1",
          packageDetail:
            "西红柿炒蛋、红烧排骨、青菜汤、地三鲜、宫保鸡丁、烤鸡、烧烤、饮料",
          url: "",
          num: 0,
        },
        {
          id: 2,
          packageName: "套餐2",
          packageDetail:
            "卡特琳娜、德莱厄斯、菲兹、瑞兹、弗拉基米尔、卡西奥佩娅",
          url: "",
          num: 0,
        },
        {
          id: 3,
          packageName: "套餐3",
          packageDetail:
            "伊莉丝、伊芙琳、费德提克、爱妮维雅、锐雯、赵信、泰达米尔",
          url: "",
          num: 0,
        }
      ],
      message: "",
    };
  },
  computed: {
    getPrivateNum() {
      var total = 0;
      this.packageList.forEach((item) => {
        total += item.num;
      });
      return total;
    },
    getPublicNum() {
      var total = 0;
      this.publicList.forEach((item) => {
        total += item.num;
      });
      return total;
    },
  },
  watch: {},

  methods: {
      go() {
          this.$router.push('/orderDetail')
      }
  },
  created() {
      console.log(this.$router)
      this.$store.commit('changeTitle', this.$route.meta.translate)
    //   console.log(this.$route)
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
/deep/ .van-tabs__wrap {
  height: 0.6rem;
}
/deep/ .van-tab {
  line-height: normal;
}
.tip {
  width: 100%;
  text-align: center;
  margin: 10px auto;
  color: red;
  font-size: 0.3rem;
}
.package-count {
  width: 100%;
  padding: 0.2rem;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  .private,
  .public,
  .total {
    width: 40%;
    margin-right: 0.5rem;
  }
}
.btn-box {
  @include center;
//   margin-bottom: 0.3rem;
//   margin-top: 0.3rem;
//   padding: .3rem 0;
  /deep/ .van-button {
    height: 0.6rem;
  }
}
/deep/ .van-cell {
  line-height: normal;
      margin: .3rem 0;
  .van-field__control {
    height: auto !important;
  }
}
</style>