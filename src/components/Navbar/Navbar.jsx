import { auth } from '../../firebase/FirebaseConfig'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
 const [user, setUser] = useState(null)
 const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])


  return (
    <nav className="bg-gray-900 text-white px-6 py-9 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Chakudya</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="hover:text-blue-200">Home</a></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      {user ? (
        <button onClick={() => signOut(auth)}>Log Out</button>
      ) : (
        <Link to="/signup">Sign Up</Link>
      )}
        </ul>


        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 px-4 py-3 space-y-3 text-center">
          <li><a href="/" className="hover:text-blue-200">Home</a></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {user ? (
        <button onClick={() => signOut(auth)}>Log Out</button>
      ) : (
        <Link to="/signup">Sign Up</Link>
      )}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
