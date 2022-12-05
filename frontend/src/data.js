import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Twenty Years Later: A Riveting New Thriller',
      slug: 'Twenty Years Later: A Riveting New Thriller',
      category: 'Shirts',
      image: 'https://m.media-amazon.com/images/I/91xPdTEdV2L._AC_UL320_.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Charlie Donlea',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Amazon Unbound: Jeff Bezos and the Invention of a Global Empire',
      slug: 'Amazon Unbound: Jeff Bezos and the Invention of a Global Empire',
      category: 'Shirts',
      image: 'https://m.media-amazon.com/images/I/41PHvBejnRL._AC_UL320_.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Brad Stone',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'The Boys from Biloxi: A Legal Thriller',
      slug: 'The Boys from Biloxi: A Legal Thriller',
      category: 'Pants',
      image: 'https://m.media-amazon.com/images/I/71N1ryT6iGL._AC_UL320_.jpg',
      price: 25,
      countInStock: 15,
      brand: 'ohn Grisham',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Dreamland: A Novel',
      slug: 'Dreamland: A Novel',
      category: 'Pants',
      image: 'https://m.media-amazon.com/images/I/9136kXA1i-L._AC_UL320_.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Nicholas Sparks',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
