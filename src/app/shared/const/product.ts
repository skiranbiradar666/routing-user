import { Iprod } from "../model/product";


export const products : Array<Iprod> = [
  {
    pid: 1,
    pname: 'Apple iPhone 14',
    category: 'Electronics',
    price: 79999,
    currency: 'INR',
    stock: 25,
    rating: 4.6,
    description: '6.1-inch display, A15 Bionic chip, advanced dual-camera system',
    imageUrl: 'https://images.unsplash.com/photo-1680687688158-e9165395ff00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFwcGxlJTIwaVBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D',
    isActive: true,
    createdAt: '2025-01-15'
  },
  {
    pid: 2,
    pname: 'Samsung Galaxy S23',
    category: 'Electronics',
    price: 74999,
    currency: 'INR',
    stock: 40,
    rating: 4.5,
    description: 'Dynamic AMOLED display with Snapdragon processor',
    imageUrl: 'https://images.unsplash.com/photo-1705530292519-ec81f2ace70d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Ftc3VuZyUyMEdhbGF4eSUyMFMyM3xlbnwwfHwwfHx8MA%3D%3D',
    isActive: true,
    createdAt: '2025-01-20'
  },
  {
    pid: 3,
    pname: 'Sony WH-1000XM5',
    category: 'Accessories',
    price: 29999,
    currency: 'INR',
    stock: 15,
    rating: 4.8,
    description: 'Industry-leading noise cancellation headphones',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6A8cLF0ODupC6v1YPlM4NZBpCr0bFbRh9XQ&s',
    isActive: true,
    createdAt: '2025-02-02'
  },
  {
    pid: 4,
    pname: 'Nike Air Max 270',
    category: 'Footwear',
    price: 12999,
    currency: 'INR',
    stock: 60,
    rating: 4.4,
    description: 'Lightweight running shoes with Air Max cushioning',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6F4_hVOKM0vSOA8GtZR2xB4bb3lPvQopIA&s',
    isActive: true,
    createdAt: '2025-02-05'
  },
  {
    pid: 5,
    pname: 'HP Pavilion Laptop',
    category: 'Computers',
    price: 65999,
    currency: 'INR',
    stock: 10,
    rating: 4.3,
    description: 'Intel i5 processor, 16GB RAM, 512GB SSD',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7kgjD09FeJAr09HRO8WyZ15dW27QIP410RA&s',
    isActive: false,
    createdAt: '2025-02-10'
  }
];