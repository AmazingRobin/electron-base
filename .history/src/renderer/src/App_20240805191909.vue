<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const locale = zhCn
const config = 
</script>

<template>
  <el-config-provider :locale="zhCn" :message="">
    <router-view />
  </el-config-provider>
</template>
