import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    category: 'Electronics',
    stock: 15
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and long battery life.',
    category: 'Electronics',
    stock: 8
  },
  {
    id: '3',
    name: 'Minimalist Leather Wallet',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=400&fit=crop',
    description: 'Handcrafted leather wallet with RFID protection and minimalist design.',
    category: 'Accessories',
    stock: 25
  },
  {
    id: '4',
    name: 'Organic Cotton T-Shirt',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop',
    description: 'Sustainable, organic cotton t-shirt with perfect fit and comfort.',
    category: 'Clothing',
    stock: 50
  },
  {
    id: '5',
    name: 'Professional Camera Lens',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=400&fit=crop',
    description: 'Professional grade camera lens with exceptional clarity and versatility.',
    category: 'Electronics',
    stock: 3
  },
  {
    id: '6',
    name: 'Artisan Coffee Mug',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1514228742403-23b67fa7d1a1?w=600&h=400&fit=crop',
    description: 'Handcrafted ceramic mug perfect for your morning coffee ritual.',
    category: 'Home',
    stock: 30
  },
  {
    id: '7',
    name: 'Luxury Sunglasses',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    description: 'Designer sunglasses with UV protection and timeless style.',
    category: 'Accessories',
    stock: 12
  },
  {
    id: '8',
    name: 'Wireless Charging Pad',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    category: 'Electronics',
    stock: 20
  },
  {
    id: '9',
    name: 'Premium Notebook Set',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop',
    description: 'Luxury notebook set with premium paper and elegant design.',
    category: 'Stationery',
    stock: 0
  },
  {
    id: '10',
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=400&fit=crop',
    description: 'Portable Bluetooth speaker with rich sound and waterproof design.',
    category: 'Electronics',
    stock: 18
  },
  {
    id: '11',
    name: 'Eco-Friendly Water Bottle',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=400&fit=crop',
    description: 'Sustainable stainless steel water bottle that keeps drinks cold for 24 hours.',
    category: 'Lifestyle',
    stock: 35
  },
  {
    id: '12',
    name: 'Designer Backpack',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop',
    description: 'Stylish and functional backpack perfect for work, travel, and daily use.',
    category: 'Accessories',
    stock: 7
  }
];

export const categories = [
  'All',
  'Electronics',
  'Accessories',
  'Clothing',
  'Home',
  'Stationery',
  'Lifestyle'
];