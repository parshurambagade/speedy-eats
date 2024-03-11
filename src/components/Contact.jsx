import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Have questions or feedback? Reach out to us!
          </p>
        </div>

        <div className="mt-10 ">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Information</h3>
                <p className="text-gray-700">
                  <span className="font-bold">Address:</span> 123 Main Street, City, Country
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Phone:</span> +1 234 567 890
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Email:</span> info@speedy-eats.com
                </p>
              </div>
            </div>

            <div className="rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Send us a Message</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" className="border border-gray-300 rounded-md px-3 py-2 w-full"></textarea>
                  </div>
                  <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact