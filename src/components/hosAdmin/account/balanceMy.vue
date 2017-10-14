<template>
  <section class="balanceMy">
    <section class="pub_hr">
      <div>
        <el-breadcrumb>
          <el-breadcrumb-item>账户管理</el-breadcrumb-item>
          <el-breadcrumb-item>我的余额</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div>
      </div>
    </section>
    <section class="header">
      <div class="left"></div>
      <div class="right">
        <h1>您好,院区管理员</h1>
        <div class="body">
          <h2>账户余额</h2>
          <h3><b>111.33</b> <span class="pub_count">元</span> <el-button class="mlem" type="primary">充值</el-button><el-button class="mlem" type="primary">提现</el-button></h3>
           <div class="two">
          <div class="jin"><span class='txt'>金币 : </span><b>111.00</b><span class='txt'>分</span>
          
          </div>
           <div class="yin"><span class='txt'>银币 : </span><b>111.00</b><span class='txt'>分</span></div>
        </div>
        </div>
        
      </div>
    </section>
    <section class='main'>
      <el-tabs v-model="activeName">
        <el-tab-pane label="最近交易记录" name="first">
          <el-table :data="array.tableData" border height="100">
            <el-table-column label="操作" prop="name"></el-table-column>
            <el-table-column label="操作" prop="name"></el-table-column>
            <el-table-column label="操作" prop="name"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'first',
      array: {
        tableData: []
      }
    }
  },
  computed: {

  },
  created() {

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}

</script>
<style lang='less'>
.balanceMy {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  .header {
    width: 100%; // border: 1px solid blue;
    margin: 10px 0;
    display: flex;
    .left {
      width: 250px;
      height: 250px;
      background: url('../../../assets/images/people.jpg') center center;
      background-size: 100%;
    }
    .right {
      border:1px solid green;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color: #1F2D3D;
      margin-left: 20px;
      h1 {
        color: #C0CCDA;
        font-size: 24px;
      }
      h2 {
         color: #C0CCDA;
        font-size: 20px;
      }
      h3 {
        display: flex;
        align-items:flex-end;
        b{
          color: #8492A6;
          font-size: 30px;
         margin-bottom: -4px;
        }
        span {
          font-size: 18px;
        }
        .el-button{
          padding:5px 15px;
          span{
            font-size: 5px;
          }
        }
      }
      .two{
        border:1px solid red;
        margin-top: 10px;
        .txt{
          font-size: 18px;
        }
        b{
          font-size: 20px;
          margin:0 3px;
        }
      }
    }
  }
  .main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column; 
    .el-tabs {
      flex-grow: 1;
      width: 100%;
      display: flex;
        flex-direction: column;
      .el-tabs__header {
        margin: 0;
      }
      .el-tabs__content,
      .el-tab-pane {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }
    }
    .el-table {
      width: 100%;
      flex-grow: 1;
      border:1px solid blue;
    }
  }
}

</style>
