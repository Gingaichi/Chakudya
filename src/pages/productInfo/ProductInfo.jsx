import React from 'react'
import Layout from '../../components/Layout/Layout'
import grilledChickenImg from '../../assets/kenny-eliason-8Cerf3zW8hA-unsplash.jpg'
import veggiePizzaImg from '../../assets/laure-noverraz-gujFRz2nHVY-unsplash.jpg'
import caesarSaladImg from '../../assets/raphael-nogueira-63mHpYEyjCA-unsplash.jpg'

const ProductInfo = () => {
  const menuItems = [
    {
      name: 'Grilled Chicken',
      description: 'Juicy grilled chicken served with fresh herbs and a side of vegetables.',
      price: 'MWK 7,500',
      image: grilledChickenImg,
    },
    {
      name: 'Veggie Pizza',
      description: 'Wood-fired pizza with fresh vegetables, mozzarella, and tomato sauce.',
      price: 'MWK 5,000',
      image: veggiePizzaImg,
    },
    {
      name: 'Beef Burger',
      description: 'Grilled beef patty with cheese, lettuce, tomato, and our signature sauce.',
      price: 'MWK 6,000',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce with parmesan, croutons, and Caesar dressing.',
      price: 'MWK 4,000',
      image: caesarSaladImg,
    },
    {
      name: 'Pasta Alfredo',
      description: 'Creamy fettuccine Alfredo with parmesan and a touch of garlic.',
      price: 'MWK 5,500',
      image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake topped with ganache and berries.',
      price: 'MWK 3,500',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <Layout>
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Our Menu
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our delicious range of dishes, crafted with fresh ingredients and authentic flavors.
        </p>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <span className="block text-yellow-500 font-bold">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default ProductInfo
