<template>
  <div class="header">
    <el-row type="flex" justify="space-around">
      <el-col :span="11" class="logo">
        <a href=""><b>title</b></a>
        <!-- <span>●</span>
        <span>{{hdTitle}}</span> -->
      </el-col>
      <el-col :span="11" class="headerMenu">
        <el-row type="flex" justify="end"  v-if="hasUserInfo">
          <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            用户名<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><a>退出</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex"

export default {
  created() {
    this.hasUserInfo = this.$root.$options.el !== '#register'
  },
  data() {
    return {
      hasUserInfo: true
    }
  },
  props: {
    isCover: {
      default: false,
      type: Boolean
    },
    isScroll: {
      default: false,
      type: Boolean
    },
    hdTitle: {
      default: '供应商平台',
      type: String
    }
  },
  computed: {},
  methods: {}
}
</script>

<style>
.header {
  width: 100%;
  height: 50px;
  background: var(--primaryColor);
  font-size: var(--h1);
  position: absolute;
  left: 0;
  top: 0;
}

.header a,
.header span {
  color: #fff;
  float: left;
  margin-top: 10px;
}

/*  .header .logo,.header .headerMenu {

  }*/

.header .logo span {
  margin-left: 10px;
}

.header .headerMenu span {
  cursor: pointer;
  font-size: var(--h3);
  margin-top: 13px;
}
.header .headerMenu span .el-icon-caret-bottom {
  font-size: var(--h4);
}
.el-dropdown-menu__item {
  line-height: 22px;
  font-size: var(--h4);
}
</style>
