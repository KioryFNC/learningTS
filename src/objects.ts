//Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
};

// Se usar o '?' significa que nao é obrigatorio informar isto

const user: User = {
  firstName: "Jane",
  age: 20,
  email: 'jane@doe.com',
  password: '12345',
  orders:[{ productId: '1', price: 200}],
};