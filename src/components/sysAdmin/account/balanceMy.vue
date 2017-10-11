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
        <h1>您好,系统管理员</h1>
        <h2>账户余额</h2>
        <h3>111.33 <span class="pub_count">元</span></h3>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  computed: {

  },
  created() {

  },
  methods: {

  }
}

</script>
<style lang='less' scoped>
.balanceMy {
 width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  .header{
    width: 100%;
    border:1px solid blue;
    margin:10px 0;
    display: flex;
    .left{
      width: 250px;
      height:250px;
      background: url('../../../assets/images/people.jpg') center center;
      background-size: 100%;
    }
  }
}

</style>
