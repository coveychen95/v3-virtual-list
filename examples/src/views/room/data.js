export function getChatList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const list = [];
      for (let i = 0; i < 10; i++) {
        const item = {
          id: new Date().valueOf(),
          name: Math.random().toString(36).slice(-5),
        };
        list.push(item);
      }
      resolve(list);
    });
  });
}
