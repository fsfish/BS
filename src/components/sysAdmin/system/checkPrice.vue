<template>
  <section class="checkPrice">
    <nav class="pub_select">
      <el-form ref="form" :model="form" label-width="86px">
        <el-row>
          <el-col>
            <el-form-item label="院区名称:">
              <el-select v-model="form.name" placeholder="请选择医院">
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
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>系统设置</el-breadcrumb-item>
          <el-breadcrumb-item>检查服务费设置</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div>
        <el-button class="mlem" type="primary" @click="createDialog">新建</el-button>
        <el-button class="mlem">刷新</el-button>
        <span class="mlem">
          检查服务费记录共<font class='pub_count'>0</font>条
        </span>
      </div>
    </section>
    <section class='main'>
      <el-table :data="array.tableData" border height="100">
        <el-table-column label="操作" prop="name">
          <template scope="scope">
            <el-tooltip class="item" effect="dark" content="编辑" placement="top">
              <el-button icon="edit" class="false" :plain="true" type="success"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
              <el-button size="mini" class="false" :plain="true" type="danger" icon="delete"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column label="操作" prop="name"></el-table-column>
        <el-table-column label="操作" prop="name"></el-table-column>
        <el-table-column label="操作" prsop="name"></el-table-column>
      </el-table>
    </section>
    <section class="create">
      <el-dialog @close="resetForm('navform')" :close-on-click-modal="false" :title="other.title" size="tiny" v-model="alert.new_info">
        <el-form class="false" :model="navform" :rules="other.rules" ref="navform" label-width="87px">
          <el-form-item label="院区名称:">
            <el-select v-model="navform.name" placeholder="请选择医院">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
           <el-form-item label="检查项目:">
            <el-select v-model="navform.name" multiple placeholder="请选择检查项目">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
           <el-form-item label="服务类型:">
            <el-select v-model="navform.name" multiple placeholder="请选择检查种类">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="服务费:" prop="conAgentName">
            <el-input placeholder="请输入服务费(1~100元)" v-model="navform.conAgentName">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button class="mlem false" :plain="true" type="primary" @click="alert.new_info=false">取 消</el-button>
          <el-button class="mlem false" type="primary" @click="submitForm('navform','saveNewInfo')">保存并新建</el-button>
          <el-button class="mlem false" type="primary" @click="submitForm('navform','saveNewInfo','newinfo')">保存</el-button>
        </div>
      </el-dialog>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {

      },
      navform: { //弹窗数据

      },
      array: {
        tableData: [], //表格数据
      },
      alert: {
        new_info: false, //新建弹窗
      },
      other: {
        title: "新增检查服务费",
        rules: {},
      }
    }
  },
  computed: {

  },
  created() {

  },
  methods: {
    //获取数据
    queryData() {

    },
    //新建弹窗
    createDialog() {
      this.alert.new_info = true;
    },
    //保存弹窗数据
    saveNewInfo() {

    }
  }
}

</script>
<style lang='less'>
@import '../../../assets/css/mixin.less';
.checkPrice {
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
  .create {

    .el-dialog {
      height: 370px;
      .pub_margintop(370px);
      .el-select,
      .el-input {
        width: 300px;
      }
      .el-dialog__body{
        padding: 20px;
      }
      .el-dialog__footer{
        padding-top: 0px;
      }
      .dialog-footer {
        text-align: center;
      }
    }
  }
}

</style>
