import { defineComponent, h } from 'vue'
import { virtualProps } from './props/virtual'
import { Direction } from './enum'

const VirtualList = defineComponent({
  name: 'VirtualList',
  props: virtualProps,
  setup(props) {
    const direction = props.direction

    return {

    }
  },
  render() {
    const { header, item, footer } = this.$slots
    console.log('header: ', header);
    return h('div', {
    }, [
      h('div', {
        name: `header`
      }, header),
      h('div', 'VirtualList'),
      h('slot', {
        name: `footer`
      })
    ]);
  }
})

export default VirtualList
