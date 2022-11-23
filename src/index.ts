import { defineComponent } from 'vue'
import Virtual from './virtual'
import { virtualProps } from './prop'
import { Direction } from './enum'

const VirtualList = defineComponent({
  name: 'VirtualList',
  props: virtualProps,
  setup(props) {
    const direction = props.direction
  },
  render() {
    return null;
  }
})
