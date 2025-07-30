import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import backImg from '../../assets/rachel-kelli-VXw7u7TSAWM-unsplash.jpg' 
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth, fireDB} from '../../firebase/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import { setDoc,doc } from 'firebase/firestore'
import { signInWithEmailAndPassword } from 'firebase/auth'


const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate()

const [loginEmail, setLoginEmail] = useState('');
const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    const user = userCredential.user;
    navigate('/');
  } catch (error) {
    console.error("Login Error:", error);
  }
};
  const handleRegister = async (e) => {
  e.preventDefault()
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    if (user) {
      await setDoc(doc(fireDB, 'users', user.uid), {
        email: user.email,
        firstName,
        lastName,
        createdAt: new Date().toISOString()
      })
    }

    navigate('/')
  } catch (error) {
    console.error("Signup Error:", error)
  }
}


  return (
    <Layout>
      <section
  className="min-h-screen flex items-center justify-center bg-repeat text-gray-800"
  style={{
    backgroundImage: `url(${backImg})`,
  }}
>
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-lg bg-white">
          {/* Slide Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: '200%',
              transform: isLogin ? 'translateX(-50%)' : 'translateX(0)',
            }}
          >
            {/* SignUp Card */}
            <div className=" w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                Create <span className="text-yellow-500">Account</span>
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                Sign up to enjoy our services and exclusive offers!
              </p>

              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-full hover:bg-yellow-400 transition"
                >
                  Sign Up
                </button>
              </form>

              <p className="text-gray-600 mt-6 text-center">
                Already have an account?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-yellow-500 hover:underline"
                >
                  Log In
                </button>
              </p>
            </div>

            {/* Login Card */}
            <div className="w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                Welcome <span className="text-yellow-500">Back</span>
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                Log in to continue your journey with us.
              </p>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                    />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                    />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-full hover:bg-yellow-400 transition"
                >
                  Log In
                </button>
              </form>

              <p className="text-gray-600 mt-6 text-center">
                Don't have an account?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-yellow-500 hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SignUp
