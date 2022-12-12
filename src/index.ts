import { defineComponent, h } from 'vue'
import { virtualProps } from './props/virtual'
import { Direction } from './enum'

const VirtualList = defineComponent({
  name: 'VirtualList',
  props: virtualProps,
  setup(props) {
    const direction = props.direction
  },
  render() {
    const { header, item, footer } = this.$slots
    return h('div', {
    }, [
      h('slot', {
        name: `header`
      }),
      h('div', 'VirtualList'),
      h('slot', {
        name: `footer`
      })
    ]);
  }
})

export default VirtualList
