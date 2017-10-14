<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header class="this_header">
      <div class="left">
        <div class="logo"></div>
        <div class="txt">计费平台</div>
      </div>
      <div class="elmenu">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            {{other.user}}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <!--  <span class="el-dropdown-link">
            院区管理员<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <span class="el-dropdown-link">
            哈医生<i class="el-icon-caret-bottom el-icon--right"></i>
          </span> -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-button type="text" @click="alert.resetPass=true">修改密码</el-button>
            </el-dropdown-item>
            <el-dropdown-item @click="loginout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <article class="this_section">
      <nav class="this_nav">
        <el-button type="text" class="el-icon-menu this_spread" @click="isCollapse=!isCollapse"></el-button>
        <!-- 系统管理员 -->
        <el-menu :router="true" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" :collapse="isCollapse" v-if="other.user=='系统管理员'">
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
          </el-submenu>
        </el-menu>
        <!-- 院区管理员 -->
        <el-menu :router="true" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" :collapse="isCollapse" v-if="other.user=='院区管理员'">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">系统设置</span>
            </template>
            <el-menu-item index="/hosCheckProjectPrice">
              <i class="el-icon-menu"></i>
              <span slot="title">项目价格设置</span>
            </el-menu-item>
            <el-menu-item index="/hosDiscount">
              <i class="el-icon-menu"></i>
              <span slot="title">医院折扣设置</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">财务设置</span>
            </template>
            <el-menu-item index="/hosCapitalSubsidiary">
              <i class="el-icon-menu"></i>
              <span slot="title">资金明细</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">账户设置</span>
            </template>
            <el-menu-item index="/hosBalanceMy">
              <i class="el-icon-menu"></i>
              <span slot="title">我的余额</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <!-- 医生本人 -->
        <el-menu :router="true" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" :collapse="isCollapse" v-if="other.user=='哈医生'">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">财务设置</span>
            </template>
            <el-menu-item index="/docCapitalSubsidiary">
              <i class="el-icon-menu"></i>
              <span slot="title">资金明细</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">账户设置</span>
            </template>
            <el-menu-item index="/docBalanceMy">
              <i class="el-icon-menu"></i>
              <span slot="title">我的余额</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </nav>
      <main class="this_main">
        <router-view class="view"></router-view>
      </main>
    </article>
    <section class="resetPass">
      <el-dialog @close="resetForm('navform')" title="修改密码" size="tiny" v-model="alert.resetPass">
        <el-form class="false" :model="navform" ref="navform" label-width="87px">
          <el-form-item label="旧密码:">
            <el-input placeholder="请输入旧密码" v-model="navform.conAgentName"></el-input>
          </el-form-item>
          <el-form-item label="新密码:">
            <el-input placeholder="请输入新密码" v-model="navform.conAgentName"></el-input>
          </el-form-item>
          <el-form-item label="确认密码:">
            <el-input placeholder="请输入新密码" v-model="navform.conAgentName"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button class="mlem false" :plain="true" type="primary" @click="alert.resetPass=false">取 消</el-button>
          <el-button class="mlem false" type="primary" @click="submitForm('navform','saveNewInfo','newinfo')">保存</el-button>
        </div>
      </el-dialog>
    </section>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      isCollapse: true,
      other: {
        user: "哈医生",
      },
      alert: {
        resetPass: false, //修改密码
      },
      navform: {

      }
    }
  },
  created() {

  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    //退出登录
    loginout() {

    }
  }

}

</script>
<style lang="less">
@import './assets/css/mixin.less';

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .this_header {
    height: 80px;
    width: 100%;
    border: 1px solid red;
    background: #009933;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6px;
    .left {
      display: flex;
      border: 1px solid red;
      align-items: center;
      .txt {
        font-size: 30px;
        font-weight: 400;
        color: #fff;
        margin-left: 18px;
      }
      .logo {
        width: 60px;
        height: 60px;
        background: url('./assets/images/djlogo.png');
        background-size: 100%;
      }
    }
    .elmenu {
      .el-dropdown-link {
        color: #fff;
      }
      .el-dropdown-menu {
        min-width: 75px;
      }
    }
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
      width: 830px;
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
  .resetPass {
    .el-dialog {
      height: 344px;
      .pub_margintop(344px);
      .el-input {
        width: 300px;
      }
      .dialog-footer {
        text-align: center;
      }
    }
  }
}

</style>
