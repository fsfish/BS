import {title} from './title.js';
import system from './system.js';

var sxy={
paylogin:title+'pay/login',//用户登录
plalogout:title+'pla/logout',//用户登出

paygetExamineItemList:title+'pay/getExamineItemList',//获取收费项目列表信息
paygetAllProcess:title+'pay/getAllProcess',//获取所有服务类型
payupdateExamineItem:title+'pay/updateExamineItem',//设置价格
paygetHospitalAreaTree:title+'pay/getHospitalAreaTree',//获取地区树形
paygetHospitals:title+'pay/getHospitals',//根据地区查询院区信息数据
paygetPlaExamineType:title+'pay/getPlaExamineType',//查询从运维取检查类型


paygetDiscountList:title+'pay/getDiscountList',//获取折扣院区列表
payaddDiscount:title+'pay/addDiscount',//新建折扣
payupdatePayDiscount:title+'pay/updatePayDiscount',//更新折扣
paydeleteDiscount:title+'pay/deleteDiscount',//删除折扣
}


var location={
	...sxy,
}
Object.assign(location, system);
export default location;