import React from 'react'
import Layout from '../../components/Layout/Layout'
import restImg from '../../assets/re.jpg'

const About = () => {
  return (
    <Layout>
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div>
          <img
            src={restImg}
            alt="Our Restaurant"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </div>
        
        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            About <span className="text-yellow-500">Us</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Welcome to <strong>Chakudya</strong>, where we believe food should not only satisfy your hunger but also
            bring joy and create memories. Our chefs craft every dish with love, using the freshest locally sourced
            ingredients.
          </p>
          <p className="text-gray-600 mb-6">
            Whether you're dining in, taking out, or ordering online, our mission is to give you an unforgettable
            culinary experience that keeps you coming back for more.
          </p>

          <button className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default About
