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