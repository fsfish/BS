<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header class="this_header"></header>
    <article class="this_section">
      <nav class="this_nav">
        <el-button type="text" class="el-icon-menu this_spread" @click="isCollapse=!isCollapse"></el-button>
        <el-menu :router="true" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">系统设置</span>
            </template>
            <el-menu-item index="/plugin">
              <i class="el-icon-menu"></i>
              <span slot="title">插件管理</span>
            </el-menu-item>
            <el-menu-item index="/checkPrice">
              <i class="el-icon-menu"></i>
              <span slot="title">检查服务费</span>
            </el-menu-item>
            <el-menu-item index="/discountIsSet">
              <i class="el-icon-menu"></i>
              <span slot="title">医院折扣设置</span>
            </el-menu-item>
            <el-menu-item index="/payRecords">
              <i class="el-icon-menu"></i>
              <span slot="title">医院充值记录</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">财务设置</span>
            </template>
            <el-menu-item index="/capitalSubsidiary">
              <i class="el-icon-menu"></i>
              <span slot="title">资金明细</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">账户设置</span>
            </template>
            <el-menu-item index="/balanceMy">
              <i class="el-icon-menu"></i>
              <span slot="title">我的余额</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-menu"></i>
              <span slot="title">修改密码</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </nav>
      <main class="this_main">
        <router-view class="view"></router-view>
      </main>
    </article>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      isCollapse: true
    }
  },
  created() {
    
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
   }

}

</script>
<style lang="less" scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .this_header {
    height: 80px;
    background: #009933;
  }
  .this_section {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    display: flex;
    .this_nav {
      height: 100%;
      display: flex;
      flex-direction: column;
      background: #eef1f6;
      .this_spread {
        width: 100%;
        background: #eef1f6;
      }
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: 100%;
        max-height: 100%;
      }
    }
    .this_main {
      width: 100%;
      height: 100%;
      padding: 15px 20px 0 20px;
      flex-grow: 1;
      
      .view {
        width: 100%;
        height: 100%;
        border: 1px solid red;

      }
    }
    border:1px solid blue;
  }
}

</style>

