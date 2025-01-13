import React from "react"

const LandingPage = () => {
  return (
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-20" id="hero">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Product</h2>
          <p className="text-lg mb-8">
            Discover the best way to build scalable and fast websites with
            Next.js and React.js.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-200" id="features">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-bold text-xl mb-2">Fast Performance</h3>
              <p>
                Experience blazing fast load times with server-side rendering.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-bold text-xl mb-2">SEO Optimized</h3>
              <p>Improve your website's visibility with built-in SEO tools.</p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-bold text-xl mb-2">Easy to Use</h3>
              <p>
                Get started quickly with an intuitive development environment.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20" id="about">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-center max-w-2xl mx-auto">
            We are a team of passionate developers focused on building modern,
            scalable web solutions.
          </p>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-600 text-white" id="contact">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block mb-2">Your Name</label>
              <input type="text" className="w-full p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Your Email</label>
              <input type="email" className="w-full p-2 rounded" />
            </div>
            <button
              type="submit"
              className="bg-white text-blue-600 py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </section>
      </main>
  )
}

export default LandingPage
