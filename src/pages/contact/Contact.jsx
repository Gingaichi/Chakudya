import React from 'react'
import Layout from '../../components/Layout/Layout';

const Contact = () => {
  return (
    <Layout>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
            Have a question or want to make a reservation? Fill out the form below, and we'll get back to you as soon as possible.
          </p>

          {/* Contact Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <form className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition space-y-5">
              <div>
                <label className="block text-left text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition w-full"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition text-left space-y-5">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
              <p className="text-gray-600">We’d love to hear from you! Reach out using the form or details below:</p>
              <p className="text-gray-800 font-medium">📍 Address:</p>
              <p className="text-gray-600">Blantyre, Malawi</p>
              <p className="text-gray-800 font-medium">📞 Phone:</p>
              <p className="text-gray-600">+265 123 456 789</p>
              <p className="text-gray-800 font-medium">✉️ Email:</p>
              <p className="text-gray-600">info@chakudya.com</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
