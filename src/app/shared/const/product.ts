import { Iprod } from "../model/product";


export const products : Array<Iprod> = [
  {
    id: 1,
    name: 'Apple iPhone 14',
    category: 'Electronics',
    price: 79999,
    currency: 'INR',
    stock: 25,
    rating: 4.6,
    description: '6.1-inch display, A15 Bionic chip, advanced dual-camera system',
    imageUrl: 'assets/images/iphone14.jpg',
    isActive: true,
    createdAt: '2025-01-15'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23',
    category: 'Electronics',
    price: 74999,
    currency: 'INR',
    stock: 40,
    rating: 4.5,
    description: 'Dynamic AMOLED display with Snapdragon processor',
    imageUrl: 'assets/images/galaxy-s23.jpg',
    isActive: true,
    createdAt: '2025-01-20'
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5',
    category: 'Accessories',
    price: 29999,
    currency: 'INR',
    stock: 15,
    rating: 4.8,
    description: 'Industry-leading noise cancellation headphones',
    imageUrl: 'assets/images/sony-xm5.jpg',
    isActive: true,
    createdAt: '2025-02-02'
  },
  {
    id: 4,
    name: 'Nike Air Max 270',
    category: 'Footwear',
    price: 12999,
    currency: 'INR',
    stock: 60,
    rating: 4.4,
    description: 'Lightweight running shoes with Air Max cushioning',
    imageUrl: 'assets/images/nike-airmax.jpg',
    isActive: true,
    createdAt: '2025-02-05'
  },
  {
    id: 5,
    name: 'HP Pavilion Laptop',
    category: 'Computers',
    price: 65999,
    currency: 'INR',
    stock: 10,
    rating: 4.3,
    description: 'Intel i5 processor, 16GB RAM, 512GB SSD',
    imageUrl: 'assets/images/hp-pavilion.jpg',
    isActive: false,
    createdAt: '2025-02-10'
  }
];