import { createApp } from 'vue'
import App from './App.vue'
import { 
  ElButton, 
  ElDialog,
  ElForm,
  ElFormItem,
  ElInput,
  ElMessage,
  ElMenu,
  ElMenuItem,
  ElRow,
  ElCol,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElLoading,
  ElTimeline,
  ElTimelineItem,
  ElCard,
  ElTag,
  ElIcon,
  ElCollapseTransition
} from 'element-plus';
const app = createApp(App)
app.config.globalProperties.$message = ElMessage
app.config.globalProperties.$loading = ElLoading.service
app.component(ElButton.name, ElButton);
app.component(ElDialog.name, ElDialog);
app.component(ElForm.name, ElForm);
app.component(ElFormItem.name, ElFormItem);
app.component(ElInput.name, ElInput);
app.component(ElMessage.name, ElMessage);
app.component(ElMenu.name, ElMenu);
app.component(ElMenuItem.name, ElMenuItem);
app.component(ElRow.name, ElRow);
app.component(ElCol.name, ElCol);
app.component(ElDropdownMenu.name, ElDropdownMenu);
app.component(ElTimeline.name, ElTimeline);
app.component(ElTimelineItem.name, ElTimelineItem);
app.component(ElDropdownItem.name, ElDropdownItem);
app.component(ElDropdown.name, ElDropdown);
app.component(ElCard.name, ElCard);
app.component(ElTag.name, ElTag);
app.component(ElIcon.name, ElIcon);
app.component(ElCollapseTransition.name, ElCollapseTransition);
app.mount('#app')
