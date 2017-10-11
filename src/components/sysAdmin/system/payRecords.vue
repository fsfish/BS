<template>
  <section class="payRecords">
    <nav class="pub_select">
      <el-form ref="form" :model="form" label-width="86px">
        <el-row>
          <el-col>
            <el-form-item label="院区名称:">
              <el-select v-model="form.name" placeholder="请选择充值医院">
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
          <el-breadcrumb-item>医院充值记录</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div>
        <el-button class="mlem" type="primary" @click="createDialog">新建</el-button>
        <el-button class="mlem">刷新</el-button>
        <span class="mlem">
           医院充值记录共<font class='pub_count'>0</font>条
        </span>
      </div>
    </section>
    <section class='main'>
      <el-table :data="array.tableData" border height="100">
        <el-table-column label="操作" prop="name">
          <template scope="scope">
            <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
              <el-button size="mini" class="false" :plain="true" type="danger" icon="delete"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column label="操作" prop="name"></el-table-column>
        <el-table-column label="操作" prop="name"></el-table-column>
        <el-table-column label="操作" prop="name"></el-table-column>
      </el-table>
    </section>
    <section class="create">
       <el-dialog @close="resetForm('navform')" :close-on-click-modal="false" title="新增医院充值" size="tiny" v-model="alert.new_info">
                <el-form class="false" :model="navform" :rules="other.rules" ref="navform" label-width="87px">
                    <el-form-item label="院区名称:">
                        <el-select v-model="navform.name" placeholder="请选择充值医院">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
                    </el-form-item>
                    <el-form-item label="充值金额:" prop="conAgentName" >
                        <el-input placeholder="请输入充值金额" v-model="navform.conAgentName">
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
      navform:{//弹窗数据

        },
      array: {
        tableData: [], //表格数据
      },
      alert: {
        new_info: false, //新建弹窗
      },
      other:{
        rules:{},
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
    createDialog(){
      this.alert.new_info=true;
    },
    //保存弹窗数据
    saveNewInfo(){

    }
  }
}

</script>
<style lang='less'>
@import '../../../assets/css/mixin.less';
.payRecords {
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
  .create{

    .el-dialog{
       height: 276px;
     .pub_margintop(276px);
      .el-select,.el-input{
       width: 300px;
      }
      .dialog-footer{
        text-align: center;
      }
    }
  }
}

</style>
