import { Direction } from './enum'
export const virtualProps = {
  dataKey: {
    type: String,
    required: true
  },
  dataSource: {
    type: Array as PropType<Recordable[]>,
    default: null
  },
  keeps: {
    type: Number,
    required: true
  },
  direction: {
    type: String as PropType<Direction>,
    default: Direction.vertical
  }
}