import React from 'react'
import { Utensils, Truck, Phone } from 'lucide-react' // Icons from lucide-react

const Services = () => {
  const services = [
    {
      icon: <Utensils className="w-10 h-10 text-yellow-400" />,
      title: "Delicious Cuisine",
      description: "Enjoy our chef-crafted dishes made from fresh, local ingredients and bursting with authentic flavors."
    },
    {
      icon: <Truck className="w-10 h-10 text-yellow-400" />,
      title: "Fast Delivery",
      description: "Hot and fresh meals delivered straight to your doorstep with speed and care."
    },
    {
      icon: <Phone className="w-10 h-10 text-yellow-400" />,
      title: "Easy Ordering",
      description: "Order effortlessly online or through our mobile app in just a few clicks."
    }
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We’re committed to bringing you the best dining experience – whether in-house or at your home.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
