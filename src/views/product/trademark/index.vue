<template>
  <el-card class="box-card">
    <div class="content">
      <!--添加品牌-->
      <el-button @click="addBrand"></el-button>
      <el-button plain @click="dialogFormVisible = true" style="margin-bottom: 10px" type="primary">+ 添加品牌
      </el-button>
      <!--品牌列表-->
      <el-table :data="TradeMarkList" style="width: 100%" border>
        <el-table-column label="序号" prop="id" width="80" align="center" type="index"/>
        <el-table-column label="品牌名称" prop="tmName"/>
        <el-table-column label="品牌logo">
          <!--插槽图片-->
          <template #default="scope">
            <img :src="scope.row.logoUrl" alt="未有图片" style="width: 100px; height: auto; border-radius: 15px;">
          </template>
        </el-table-column>


        <el-table-column align="right">
          <!--搜索框-->
          <template #header>
            <el-input v-model="search" size="small" placeholder="搜索"/>
          </template>

          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
              编辑
            </el-button>
            <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination">
        <!--            v-model:page-size="pageSize"-->
        <el-pagination
            :current-page="currentPage"
            :page-size="pageSize"
            :size="size"
            :background="true"
            layout=" prev, pager, next, jumper,->,sizes,total"
            :page-sizes="[10, 20, 50, 100]"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
      </div>
    </div>

  </el-card>

</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue'
import type {ComponentSize} from 'element-plus'
import {reqTradeMarkList} from "../../../api/product/trademark/index.ts";
import {TradeMark} from "../../../api/product/trademark/type.ts"

onMounted(() => {
  // 获取品牌列表数据
  getTradeMarkList(currentPage.value, pageSize.value);
})

let TradeMarkList = ref<TradeMark[]>([])
let total = ref(0)
const getTradeMarkList = async (page: number, limit: number) => {

  let result = await reqTradeMarkList(page, limit)
  if (result.code === 200) {
    TradeMarkList.value = result.data.records
    total.value = result.data.total
  }

}

const dialogFormVisible = ref(false)

const addBrand = () => {
  console.log('添加品牌')
}


const search = ref('')

const handleEdit = (index: number, row: TradeMark) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: TradeMark) => {
  console.log(index, row)
}


const currentPage = ref(1)
const pageSize = ref(10)
const size = ref<ComponentSize>('default')


const handleSizeChange = (val: number) => {
  if (val <= 0) return; // 避免除零错误
  // console.log(total.value + " 总数");
  // console.log(val + " 每页");
  console.log('之前当前页 ' + currentPage.value);
  // 计算当前页，确保不为负数
  currentPage.value = Math.max(1, Math.ceil((currentPage.value - 1) * pageSize.value / val) + 1);
  // console.log('当前页 ' + currentPage.value);
  pageSize.value = val;
  getTradeMarkList(currentPage.value, val);
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
  getTradeMarkList(val, pageSize.value)
  // console.log(`current page: ${val}`)

}
</script>
<style lang="scss" scoped>
.box-card {
  max-width: 100%;

  min-height: 100%;

  .pagination {
    margin-top: 10px;
  }
}


</style>