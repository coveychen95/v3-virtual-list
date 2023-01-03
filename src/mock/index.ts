import { faker } from '@faker-js/faker'

export function fetchData(count = 10) {
  const res: any[] = []
  for (let i = 0; i < count; i++) {
    const item = faker.helpers.contextualCard();
    item.paragraph = faker.lorem.paragraph();
    item.img = {
      src: `${process.env.BASE_URL}/images/${faker.random.number({ min: 1, max: 20 })}.jpeg`,
      width: `${faker.random.number({ min: 100, max: 700 })}px`,
    };
    res.push(item);
  }
  return res
}