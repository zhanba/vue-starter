<template>
  <div id="app">
    <header-nav></header-nav>
    <div id="wrap">
      <leftMenu></leftMenu>
      <div class="rightWrap">
        <div class="rightContent">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headerNav from '@/components/header'
  import leftMenu from '@/components/leftMenu'

  export default {
    name: 'app',
    components: { headerNav, leftMenu }
  }
</script>

<style>
  html,body { height: 100%; }
  body, ul {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  :root {
    --primaryColor: #5672EA;
    --h1: 20px;
    --h2: 18px;
    --h3: 16px;
    --h4: 14px;
    --h5: 13px;
    --h6: 12px;
  }

  #app {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #wrap {
    table-layout: fixed;
    position: absolute;
    top:50px;
    width: 100%;
    height: calc(100% - 50px);
    display: table;
  }

  .rightWrap {
    display: flex;
    vertical-align: top;
    height: 100%;
    position: relative;
    background: #50bfff;
  }
  .rightWrap:after { clear: both; content: ""; display: block;}
  .rightContent { flex:1; padding: 20px; position: relative; word-break: break-all; word-wrap: break-word;}
</style>
