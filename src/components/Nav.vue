<template>
  <div>
    <div class="nav" v-if="!state.isMobile">
      <div class="nav-contant">
        <el-row :gutter="20">
          <el-col :span="3">
            <router-link to="/">
              <img
                src="../../public/logo.webp"
                alt="yaozeyu"
                style="width: 442px; height: 338px"
              />
            </router-link>
          </el-col>
          <el-col :span="16">
            <el-menu
              :router="true"
              :default-active="state.activeIndex"
              active-text-color="#409eff"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
            <el-menu-item :route="l.path" v-for="l in state.list" :key="l.index">
              {{l.name}}
            </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="5" v-if="userInfo._id"></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, reactive,computed } from "vue";
import {NavListItem,UserInfo} from '../types'
export default {
  setup() {
    const state = reactive({
      list: [
        {
          index: "1",
          path: "/",
          name: "首页",
        },
        {
          index: "2",
          path: "/articles",
          name: "文章",
        },
        {
          index: "3",
          path: "/archive",
          name: "归档",
        },
        {
          index: "4",
          path: "/project",
          name: "项目",
        },
        {
          index: "5",
          path: "/timeline",
          name: "历程",
        },
        {
          index: "6",
          path: "/message",
          name: "留言",
        },
        {
          index: "7",
          path: "/about",
          name: "关于",
        },
      ] as Array<NavListItem>,
      activeIndex: "0",
      isMobile: false,
    });
    return {
      state,
    };
  },
  computed:{
    userInfo(): UserInfo{
      let userInfo: UserInfo ={
        _id:'',
        name:'',
        avatar:''
      }
      if (window.sessionStorage.userInfo) {
        userInfo = JSON.parse(window.sessionStorage.userInfo)
        (this as any).$store.commit("SAVE_USER",{
          userInfo
        })
      }
      return userInfo
    }
  }
};
</script>