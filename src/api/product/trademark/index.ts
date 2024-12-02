import request from "../../../utils/request.ts";
import {ResponseData, TradeMarkResponseData} from "./type.ts";


enum API {
    TRADEMARK_URL = '/admin/product/baseTrademark/',

    ADDTRADEMARK_URL = '/admin/product/baseTrademark/save',
    //修改已有品牌
    UPDATETRADEMARK_URL = '/admin/product/baseTrademark/update',
}

// 获取品牌列表
export const reqTradeMarkList = (page: number, limit: number) =>
    request.get<any, TradeMarkResponseData>(API.TRADEMARK_URL + `${page}/${limit}`)

// 添加或者修改品牌
export const addOrUpdateTrademark = (data: any) => {
    //判断是否有id
    if (data.id) {
        return request.put<any, ResponseData>(API.UPDATETRADEMARK_URL, data)
    } else {
        return request.post<any, ResponseData>(API.ADDTRADEMARK_URL, data)
    }
}