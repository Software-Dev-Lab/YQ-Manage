import request from "../../../utils/request.ts";
import {TradeMarkResponseData} from "./type.ts";


enum API {
    TRADEMARK_URL = '/admin/product/baseTrademark/',

    ADDTRADEMARK_URL = '/admin/product/baseTrademark/save',
    //修改已有品牌
    UPDATETRADEMARK_URL = '/admin/product/baseTrademark/update',
}

export const reqTradeMarkList = (page: number, limit: number) => {
    return request.get<any, TradeMarkResponseData>(API.TRADEMARK_URL + `${page}/${limit}`)
}

export const addOrUpdateTrademark = (data: any) => {
    //判断是否有id
    if (data.id) {
        return request.put<any, any>(API.UPDATETRADEMARK_URL, data)
    } else {
        return request.post<any, any>(API.ADDTRADEMARK_URL, data)
    }
}