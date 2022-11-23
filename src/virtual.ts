export default class Virtual {
  config;
  callbackUpdate;
  sizes;
  offset: number;
  constructor(config, callbackUpdate) {
    this.offset = 0;
    this.init(config, callbackUpdate)
  }
  init(config, callbackUpdate) {
    // config
    this.config = config;
    this.callbackUpdate = callbackUpdate
    // sizes
    this.sizes = new Map()
    // soroll
    this.offset = 0
    
  }
}