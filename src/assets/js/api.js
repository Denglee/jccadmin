/*** api接口统一管理 */
import { get, post } from "./axios";

/**
 *
 * @param {string} params
 * 我们定义了一个index方法
 * 这个方法有一个参数params
 * params是我们请求接口时携带的参数对象
 * 而后调用了我们封装的post方法
 * post方法的第一个参数是我们的接口地址
 * 第二个参数是topics的params参数
 * 即请求接口时携带的参数对象
 * 最后通过export导出topics。
 */

/* 1、产品 */
export const getAllType = params => get("product/getAll", params); /* 所有产品*/

/*增 */
export const addProduct = params => post("product/addProduct", params); /* 新增产品信息接口*/

export const addProductCondition = params => get("productCondi/addProductCondition", params); /* 新增产品匹配条件接口*/

export const imgUpload = params => post("uploadFile/imgUpload", params); /* 图片上传接口*/


