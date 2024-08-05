<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { reactive } from 'vue'

const locale = zhCn
const config = reactive({ locale })
</script>

<template>
  <el-config-provider :locale="zhCn" :message="">
    <router-view />
  </el-config-provider>
</template>
