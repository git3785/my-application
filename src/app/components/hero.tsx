// // src/app/HeroSection.tsx
'use client'
export default function HeroSection() {
    return (
      <div className="bg-blue-950 py-16 h-1728 w-1117">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Left Section - Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-white mb-4">
              Innovation Empower!
            </h1>
            <p className="text-white mb-6">
             Unlock Mobile Excellence,Transforming Solutions Guaranted.
            </p>
            <button className="bg-white text-blue-950 px-6 py-3 rounded shadow hover:bg-white transition duration-300">
              BUY NOW
            </button>
          </div>
  
          {/* Right Section - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/images/bg.jpg" // Replace with your actual image path
              alt="Fashion Model"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }