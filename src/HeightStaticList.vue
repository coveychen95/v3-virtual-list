<template>
  <div>
    <Item></Item>
    <Placeholder></Placeholder>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Item from './components/Item.vue'
import Placeholder from './components/Placeholder.vue'
import { fetchData } from './mock'

const PLACEHOLDER_COUNT = 5
const BUFFER_SIZE = 3
const FIXED_HEIGHT = 100
let visible_count = BUFFER_SIZE * 2

const anchorItem = reactive({ index: 0, offset: 0 })
const listData = reactive([])
const visibleData = reactive([])
const topPlaceholders = reactive([])
const bottomPlaceholders = ([])
const firstAttachedItem = ref(0)
const lastAttachedItem = ref(0)
const scrollRunwayEnd = ref(0)
const lastScrollTop = ref(0)


</script>

<style scoped>

</style>