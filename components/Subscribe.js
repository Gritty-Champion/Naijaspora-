import React from 'react'

export default function Subscribe() {
  const formData = {
    firstName: '',
    lastName: '',
    email: '',
    country: ''
  }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission logic here
//     console.log(formData)
//   }

  return (
    <div className="subscribebg flex flex-col md:flex-row items-center justify-between p-8 md:p-12 text-white h-[550px] my-10">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Join our freelancer network today</h2>
        <p className="text-lg text-gray-300">Be the first to know about our freelancing events, gigs, opportunities and news when you subscribe to our mailing list</p>
      </div>
      
      <div className="md:w-1/2 w-full bg-[#1B1F28] rounded-lg p-5">
        <form className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block mb-2">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
            //   value={formData.firstName}
            //   onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full p-3 rounded bg-[#2D3443] text-white placeholder-gray-400"
              required
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block mb-2">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
            //   value={formData.lastName}
            //   onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full p-3 rounded bg-[#2D3443] text-white placeholder-gray-400"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
            //   value={formData.email}
            //   onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full p-3 rounded bg-[#2D3443] text-white placeholder-gray-400"
              required
            />
          </div>
          
          <div>
            <label htmlFor="country" className="block mb-2">Country</label>
            <select
              id="country"
              name="country"
            //   value={formData.country}
            //   onChange={handleChange}
              className="w-full p-3 rounded bg-[#2D3443] text-white appearance-none"
              required
            >
              <option value="" disabled>Select country</option>
              <option value="nigeria">Nigeria</option>
              <option value="ghana">Ghana</option>
              <option value="kenya">Kenya</option>
              <option value="southafrica">South Africa</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            className="w-full p-3 rounded bg-blue-600 hover:bg-blue-700 transition-colors text-white text-base"
          >
            Subscribe to newsletter
          </button>
        </form>
      </div>
    </div>
  )
}
