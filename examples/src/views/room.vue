<template>
  <div class="page">
    虚拟列表
    <VirtualList
      key="id"
      :data-sources="list"
      @load-prev="loadPrev"
      @load-more="loadMore"
    >
      <template #header>
        <Item></Item>
      </template>
      <template v-slot:item={item}>
        <Item :data="item"></Item>
      </template>
      <template #footer>
        <Item></Item>
      </template>
    </VirtualList>
  </div>
</template>
<sicript lang="ts">
import { reactive } from "vue";
import VirtualList from "../../../src/index";
import { getChatList } from './data'

export default {
  components: {
    VirtualList,
  },
  setup(props, context) {
    const list = reactive([]);
    const loadPrev = () => {

    }
    
    const loadMOre = () => {
      list.push()
    }
    return {
      list,
      loadPrev,
      loadMore,
    };
  },
};
</sicript>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
