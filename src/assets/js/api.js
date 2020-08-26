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

/* 1、产品 匹配 */
export const getAllType = params => get("product/getAll", params); /* 所有产品*/

/*增 */
export const addProduct = params => post("product/addProduct", params); /* 新增产品信息接口*/

export const addProductCondition = params => post("productCondi/addProductCondition", params); /* 新增产品匹配条件接口*/

export const imgUpload = params => post("uploadFile/imgUpload", params); /* 图片上传接口*/

export const getLunbo   = params => post('rotation/getAllRotation', params);         /* 所有产品*/


//获取产品信息列表接口www.jierong123.com/product/getProductForPage?pageNum=1&pageSize=10   Get
//通过条件查询产品列表接口：www.jierong123.com/product/getProductForPage?pageNum=1&pageSize=10&productName=小商贷&productType=1   Get
// export const getProductForPageApi = params => Get("product/getProductForPage", params);
export const getProductForPageApi = params => get("product/getProductForPage", params);

//获取产品详情接口:www.jierong123.com/product/getProdDetail?prodId=1&prodType=1   Get
export const getProdDetailApi = params => get("product/getProdDetail", params);

//获取产品匹配条件接口:www.jierong123.com/productCondi/getProductCondition?productId=1   Get
export const getProductConditionApi = params => get("productCondi/getProductCondition", params);

//更新产品详情接口:www.jierong123.com/product/updateProduct   Post（传参和新增产品详情一样）
export const updateProductApi = params => get("product/updateProduct", params);
 
//更新产品匹配条件接口:www.jierong123.com/productCondi/updateProductCondition   Post（传参和新增产品匹配条件一样）
export const updateProductConditionApi = params => get("productCondi/updateProductCondition", params);
 
//删除产品接口:www.jierong123.com/product/deleteProduct?productId=1   Get
export const deleteProductApi = params => get("product/deleteProduct", params);




