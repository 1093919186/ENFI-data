import http from '@/utils/http';

// 获取登录信息
export function getLoginInfo(options) {
    return http.post('/ENFI-data/index.php', options)
}
// 获取注册信息
export function getRegistInfo(options) {
    return http.post('/ENFI-data/index.php/?s=Index/registered', options)
}
// 获取管理员信息
export function getAdminInfo(options) {
    return http.get('/ENFI-data/index.php/?s=Index/admininfo', options)
}
// 删除管理员
export function deleteadmin(options) {
    return http.post('/ENFI-data/index.php/?s=Index/deleteadmin', options)
}
// 获得原矿信息
export function getRawInfo(options) {
    return http.post('/ENFI-data/index.php/?s=Index/rawinfo', options)
}
// 获得所有原矿信息
export function getAllRawInfo(options) {
    return http.post('/ENFI-data/index.php/?s=Index/allrawinfo', options)
}
// 获取所有处理量信息、破碎、磨矿、浮选、脱水信息
export function getAllProcessInfo(options) {
    return http.post('/ENFI-data/index.php/?s=Index/allprocessinfo', options)
}
// 获取搜索破碎信息
export function getCrushInfo(options) {
    return http.post('/ENFI-data/index.php/?s=Index/curshinfo', options)
}
// 获取搜索磨矿信息
export function getGrindInfo(options) {
    return http.post('/ENFI-data/index.php/?s=Index/grindinfo', options)
}
// 获取搜索浮选信息
export function getSelectInfo(options) {
    return http.post('/ENFI-data/index.php/?s=Index/selectinfo', options)
}
// 获取搜索脱水信息
export function getDehydrationInfo(options) {
    return http.post('/ENFI-data/index.php/?s=Index/dehydrationinfo', options)
}
// 获取钢耗信息
export function getGhInfo(options) {
    return http.post('/ENFI-data/index.php/?s=Index/ghinfo', options)
}
// 获取定员信息
export function getDyInfo(options) {
    return http.post('/ENFI-data/index.php/?s=Index/dyinfo', options)
}
// 获取碎矿、磨矿信息
export function getSMInfo(options) {
    return http.post('/ENFI-data/index.php/?s=Index/sminfo', options)
}
// 获取碎矿、磨矿信息
export function getDetailInfo(options) {
    return http.post('/ENFI-data/index.php/?s=Index/detailinfo', options)
}

// 设备表
// =========================================

// 获取破碎机及高压辊信息 
export function getPsjgyginfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/psjgyginfo', options)
}
// 获取振动筛信息 
export function getZdsinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/zdsinfo', options)
}
// 获取磨机信息 
export function getMjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/mjinfo', options)
}
// 获取旋流器信息 
export function getXlqinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/xlqinfo', options)
}
// 获取浮选机信息 
export function getFxjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/fxjinfo', options)
}
// 获取浮选柱信息 
export function getFxzinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/fxzinfo', options)
}
// 获取磁选机信息 
export function getCxjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/cxjinfo', options)
}
// 获取浓缩机信息 
export function getNsjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/nsjinfo', options)
}
// 获取过滤机信息 
export function getGljinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/gljinfo', options)
}
// 获取鼓风机信息 
export function getGfjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/gfjinfo', options)
}
// 获取空压机信息 
export function getKyjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/kyjinfo', options)
}
// 获取给料机放矿机信息 
export function getGljfkjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/gljfkjinfo', options)
}
// 获取带式输送机信息 
export function getDsssjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/dsssjinfo', options)
}
// 获取螺旋输送机信息 
export function getLxssjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/lxssjinfo', options)
}
// 获取泵信息 
export function getBinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/binfo', options)
}
// 获取搅拌槽及矿浆箱信息 
export function getJbcinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/jbcinfo', options)
}
// 获取起重机信息 
export function getQzjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/qzjinfo', options)
}
// 获取葫芦信息 
export function getHlinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/hlinfo', options)
}
// 获取药剂制备与添加信息 
export function getYjzbtjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/yjzbtjinfo', options)
}
// 获取其它设备信息 
export function getQtinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/qtinfo', options)
}
// 获取金属结构件信息 
export function getJsjgjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/jsjgjinfo', options)
}
// 获取管道信息 
export function getGdinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/gdinfo', options)
}
// 获取阀门信息 
export function getFminfo(options) {
    return http.post('/ENFI-data/index.php/?s=Machine/fminfo', options)
}

// 设备搜索api
// ================================

// 获取破碎机及高压辊搜索信息 
export function searchPsjgygXhinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/psjgygxhinfo', options)
}
// 获取振动筛搜索信息
export function searchZdsXhinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/zdsxhinfo', options)
}
// 获取磨机搜索信息
export function searchMjXhinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/mjxhinfo', options)
}
// 获取浮选机搜索信息
export function searchFxjXhinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/fxjxhinfo', options)
}
// 获取浮选柱搜索信息
export function searchFxzXhinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/fxzxhinfo', options)
}
// 获取磁选机搜索信息
export function searchCxjXhinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/cxjxhinfo', options)
}
// 获取鼓风机搜索信息
export function searchGfjXhinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/gfjxhinfo', options)
}
// 获取空压机搜索信息
export function searchKyjXhinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/kyjxhinfo', options)
}
// 获取螺旋输送机搜索信息
export function searchLxssjXhinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/lxssjxhinfo', options)
}
// 获取泵搜索信息
export function searchBXhinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/bxhinfo', options)
}
// 获取搅拌槽搜索信息
export function searchJbcXhinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/jbcinfo', options)
}
// 获取搅拌槽搜索信息
export function searchQzjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/qzjinfo', options)
}
// 获取其它设备搜索信息
export function searchQtinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/qtinfo', options)
}
// 获取金属结构件搜索信息
export function searchJsjgjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/jsjgjinfo', options)
}
// 获取阀门搜索信息
export function searchFminfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/fminfo', options)
}
// 获取药剂制备添加搜索信息
export function searchYjzbtjinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/yjzbtjinfo', options)
}
// 获取药剂种类搜索信息
export function searchYjzlinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/yjzlinfo', options)
}
// 获取药剂配置浓度搜索信息
export function searchYjPzndinfo(options) {
    return http.post('/ENFI-data/index.php/?s=MachineSearch/yjpzndinfo', options)
}

// 表信息

// 项目表
export function tableProjectinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tableprojectinfo', options)
}
// 子项表
export function tableChildinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablechildinfo', options)
}
// 原矿表
export function tableRawinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablerawinfo', options)
}
// 精矿表
export function tableConcentrateoreinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tableconcentrateoreinfo', options)
}
// 项目指标表
export function tableIcatorsinfo(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tableicatorsinfoinfo', options)
}

// 图纸量表
export function tableDrawinginfo(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tabledrawinginfo', options)
}
// 电能消耗表
export function tablePowerconsumption(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablepowerconsumption', options)
}
// 材料消耗表
export function tableMaterialconsumption(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablematerialconsumption', options)
}
// 定员表
export function tablePeople(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablepeople', options)
}
// 药剂消耗表
export function tableYjconsumption(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tableyjconsumption', options)
}
// 药剂消耗药剂表
export function tableYjconsumptionyj(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tableyjconsumptionyj', options)
}
// 药剂消耗药剂表
export function tableMachineposui(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachineposui', options)
}
// 药剂消耗药剂表
export function tableMachinesieve(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinesieve', options)
}
// 药剂消耗药剂表
export function tableMachinemill(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinemill', options)
}
// 药剂消耗药剂表
export function tableMachinecyclone(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinecyclone', options)
}
// 药剂消耗药剂表
export function tableMachineflotation(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachineflotation', options)
}
// 药剂消耗药剂表
export function tableMachineflocolumn(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachineflocolumn', options)
}
// 药剂消耗药剂表
export function tableMachinecxj(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinecxj', options)
}
// 药剂消耗药剂表
export function tableMachinett(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinett', options)
}
// 药剂消耗药剂表
export function tableMachineyc(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachineyc', options)
}
// 药剂消耗药剂表
export function tableMachinelc(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinelc', options)
}
// 药剂消耗药剂表
export function tableMachinensj(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinensj', options)
}
// 药剂消耗药剂表
export function tableMachineglj(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachineglj', options)
}
// 药剂消耗药剂表
export function tableMachinegzj(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinegzj', options)
}
// 药剂消耗药剂表
export function tableMachinegfj(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinegfj', options)
}
// 药剂消耗药剂表
export function tableMachinekyj(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinekyj', options)
}
// 药剂消耗药剂表
export function tableMachinegljfkj(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinegljfkj', options)
}
// 药剂消耗药剂表
export function tableMachinepd(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinepd', options)
}
// 药剂消耗药剂表
export function tableMachinelxysj(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinelxysj', options)
}
// 药剂消耗药剂表
export function tableMachineb(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachineb', options)
}
// 药剂消耗药剂表
export function tableMachinejbckjx(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinejbckjx', options)
}
// 药剂消耗药剂表
export function tableMachineqzj(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachineqzj', options)
}
// 药剂消耗药剂表
export function tableMachinehl(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinehl', options)
}
// 药剂消耗药剂表
export function tableMachineyj(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachineyj', options)
}
// 药剂消耗药剂表
export function tableMachineother(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachineother', options)
}
// 药剂消耗药剂表
export function tableMachinejsjgj(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinejsjgj', options)
}
// 药剂消耗药剂表
export function tableMachinegd(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinegd', options)
}
// 药剂消耗药剂表
export function tableMachinefm(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachinefm', options)
}
// 药剂消耗药剂表
export function tableMachineetc(options) {
    return http.post('/ENFI-data/index.php/?s=Table/tablemachineetc', options)
}


// 删除信息
export function Delete(options) {
    return http.post('/ENFI-data/index.php/?s=Table/delete', options)
}

// 数据备份
export function Copy(options) {
    return http.post('/ENFI-data/index.php/?s=Copy/index', options)
}