<template>
  <section class="docCapitalSubsidiary">
  <nav class="pub_select">
      <el-form ref="form" :model="form" label-width="86px">
        <el-row>
           <el-col>
            <el-form-item label="服务类型:">
              <el-select v-model="form.name"  multiple placeholder="请选择服务类型">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-button class="mlem" type="primary">查询</el-button>
          <el-button class="mlem">重置</el-button>
        </el-row>
      </el-form>
    </nav>
   <section class="pub_hr">
      <div>
        <el-breadcrumb >
          <el-breadcrumb-item>财务管理</el-breadcrumb-item>
          <el-breadcrumb-item>资金明细</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div>
       
        <el-button class="mlem" type="primary">刷新</el-button>
        <span class="mlem">
          服务记录共<font class='pub_count'>0</font>条
        </span>
      </div>
    </section>
      <section class='main'>
      <el-table :data="array.tableData" border height="100">
        <el-table-column label="操作" prop="name"></el-table-column>
        <el-table-column label="操作" prop="name"></el-table-column>
        <el-table-column label="操作" prop="name"></el-table-column>
      </el-table>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form:{
        name:[],
      },
      array:{
        tableData:[]
      }
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
@import '../../../assets/css/mixin.less';
.docCapitalSubsidiary{
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  .main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    .el-table {
      flex-grow: 1;
    }
  }
}

</style>