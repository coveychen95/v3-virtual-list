<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="page">
    虚拟列表
    <AppHead></AppHead>
    <VirtualList
      key="id"
      :data-sources="list"
      @load-prev="loadPrev"
      @load-more="loadMore"
    >
      <template #header>
        <AppHead></AppHead>
      </template>
      <template v-slot:item="{ item }">
        <Item :data="item"></Item>
      </template>
      <template #footer>
        <AppFoot></AppFoot>
      </template>
    </VirtualList>
  </div>
</template>
<script lang="js">
import { reactive, defineComponent } from "vue";
import VirtualList from "../../../../src/index";
import { getChatList } from "./data";
import Item from "./components/Item.vue";
import AppHead from "./components/Head.vue";
import AppFoot from "./components/Foot.vue";
export default defineComponent({
  components: {
    VirtualList,
    Item,
    AppHead,
    AppFoot,
  },
  setup(props, context) {
    const list = reactive([]);
    const loadPrev = () => {
      getChatList.then((res) => {
        list.unshift(...res);
      });
    };

    const loadMore = () => {
      getChatList.then((res) => {
        list.push(...res);
      });
    };
    return {
      list,
      loadPrev,
      loadMore,
    };
  },
});
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
