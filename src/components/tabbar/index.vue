<template>
  <div class="tabbar">
    <div
      :class="['tab-item', item.active ? 'active' : '']"
      v-for="(item, index) in tabList"
      :key="index"
      @click="select(item.id, item.path, item.title)"
    >
      <i :class="item.icon"></i>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  components: {},
  data() {
    return {
      tabList: [
        {
          id: 1,
          icon: "icon-shouye",
          title: "首页",
          active: 1,
          path: '/'
        },
        { id: 2, icon: "icon-shangpin", title: "其他商品", active: 0, path: '/goods' },
        { id: 3, icon: "icon-geren", title: "个人中心", active: 0, path: '/pcenter' },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  methods: {
    select(id, path, title) {
    //   console.log(e);
        this.tabList.forEach(item => {
            if(item.id == id) {
                item.active = 1
            }else {
                item.active = 0
            }
        })
        this.$router.replace(path)
        this.$store.commit('changeTitle', title)
    },
  },
};
</script>
<style lang='scss' scoped>
.tabbar {
  width: 100%;
  height: 1.2rem;
  position: fixed;
  bottom: 0;
  padding: 0.1rem;
  @include between;
  background-color: #ccc;
  color: rgb(53, 52, 52);
  .tab-item {
    width: 30%;
    height: 100%;
    @include center;
    flex-direction: column;
    span {
      font-size: 0.3rem;
    }
  }
  .active {
    color: rgb(17, 151, 204);
  }
}
</style>