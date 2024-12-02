<template>
  <el-card class="box-card">
    <div class="content">
      <!--添加品牌-->

      <el-button plain @click="dialogFormVisible = true" style="margin-bottom: 10px" type="primary">+ 添加品牌
      </el-button>

      <el-dialog v-model="dialogFormVisible" title="添加品牌" width="700px">
        <el-form>
          <el-form-item prop="tmName" style="margin: 10px 0">
            <el-form-item label="品牌名称" label-width="80px">
              <el-input v-model="trademarkParms.tmName" placeholder="请输入品牌名称" style="width: 300px"></el-input>
            </el-form-item>
          </el-form-item>
          <el-form-item label="品牌LOGO" prop="logoUrl" label-width="80px">
            <el-upload
                class="avatar-uploader"
                action="/api1/admin/product/fileUpload"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :on-success="handleAvatarSuccess"
                :on-error="handleAvatarError"
                drag="true"
            >
              <img v-if="trademarkParms.logoUrl" :src="trademarkParms.logoUrl" class="avatar"/>
              <el-icon v-else class="avatar-uploader-icon">
                <Plus/>
              </el-icon>
            </el-upload>
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="addBrand()">
              确认
            </el-button>
          </div>
        </template>
      </el-dialog>

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
      <!--分页-->
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
import {addOrUpdateTrademark, reqTradeMarkList} from "../../../api/product/trademark/index.ts";
import {TradeMark} from "../../../api/product/trademark/type.ts"
import {ElMessage} from 'element-plus'
import {Plus} from '@element-plus/icons-vue'
import type {UploadProps} from 'element-plus'


// 上传图片成功
const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  trademarkParms.value.logoUrl = response.data.logoUrl
}
const handleAvatarError: UploadProps['onError'] = (err, uploadFile) => {
  console.log(err)
  ElMessage.error('Upload failed')
}
// 上传图片之前的钩子
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

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

const trademarkParms = ref<TradeMark>({
  tmName: '',
  logoUrl: ''
})
const addBrand = async () => {
  dialogFormVisible.value = false
  await addOrUpdateTrademark(trademarkParms.value)
  trademarkParms.value = {
    tmName: '',
    logoUrl: ''
  }
}


const search = ref('')

const handleEdit = (index: number, row: TradeMark) => {
  dialogFormVisible.value = true
  trademarkParms.value = row
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
  console.log(total.value + " 总数");
  console.log(val + " 每页");
  console.log('之前当前页 ' + currentPage.value);
  // 计算当前页，确保不为负数
  currentPage.value = Math.max(1, Math.ceil((currentPage.value - 1) * pageSize.value / val) + 1);
  console.log('当前页 ' + currentPage.value);
  pageSize.value = val;
  getTradeMarkList(currentPage.value, val);
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
  getTradeMarkList(val, pageSize.value)

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

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

</style>
