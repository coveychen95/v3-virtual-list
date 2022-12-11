import { defineComponent } from 'vue'
import { virtualProps } from './props/virtual'
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

export default VirtualList
