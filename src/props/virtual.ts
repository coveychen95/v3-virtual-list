import { Direction } from '../enum'
export const virtualProps = {
  dataKey: {
    type: String,
    required: true
  },
  dataSources: {
    type: Array,
    required: true,
  },
  keeps: {
    type: Number,
    default: 20,
  },
  direction: {
    type: String as PropType<Direction>,
    default: Direction.vertical
  }
}