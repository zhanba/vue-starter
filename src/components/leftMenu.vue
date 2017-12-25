<template>
  <div class="leftMenu">
    <div class="leftInner">
      <el-menu :router="true" :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="/"><i class="el-icon-menu"></i>控制面板</el-menu-item>
        <el-menu-item index="/orderList/1" :route="{path:'/orderList/1'}"><i class="el-icon-menu"></i>订单管理</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
import router from '../router'

export default {
  mounted() {
    console.log(router)
  },
  data() {
    return {
      keywords: ''
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
      default: '',
      type: String
    }
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.leftMenu {
  width: 300px;
  display: table-cell;
  height: 100%;
  background: rgb(238, 238, 246);
  position: relative;
  vertical-align: top;
}
.leftMenu:after {
  clear: both;
  content: '';
  display: block;
}
.leftMenu .leftInner {
  height: 100%;
  width: 300px;
}
</style>
