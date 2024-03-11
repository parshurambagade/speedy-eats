import React from 'react'

const About = () => {
  return (
<div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto ">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to Speedy-eats
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Speedy-eats is your go-to destination for ordering delicious food online. We offer a wide range of cuisines
            and dishes to satisfy your cravings.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Replace the following placeholders with actual content */}
            <div className="rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="relative bg-gray-400 h-60 sm:h-72">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.pexels.com/photos/13443783/pexels-photo-13443783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Placeholder"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet
                  neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet,
                  molestie.
                </p>
              </div>
            </div>

            <div className="rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="relative bg-gray-400 h-60 sm:h-72">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.pexels.com/photos/6053916/pexels-photo-6053916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Placeholder"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet
                  neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet,
                  molestie.
                </p>
              </div>
            </div>

            <div className="rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="relative bg-gray-400 h-60 sm:h-72">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.pexels.com/photos/8576166/pexels-photo-8576166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Placeholder"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet
                  neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet,
                  molestie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About