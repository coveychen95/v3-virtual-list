export function getChatList(): Promise<unknown> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const list: any[] = []
      for (let i = 0; i < 10; i++) {
        const item = {
          id: new Date().valueOf(),
          name: Math.random().toString(36).slice(-5)
        }
        list.push(item)
      }
      resolve(list)
    })
  })
}