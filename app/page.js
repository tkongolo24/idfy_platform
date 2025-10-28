export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 to-black-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            IDFY 
          </h1>
          <p className="text-gray-600">
            Digital Identity Verification 
          </p>
        </div>

        <div className="space-y-4">
          <a href="/register" className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-all font-semibold">
            Student Registration
          </a>
          
          <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-all font-semibold">
            Verify ID
          </button>
          
          <button className="w-full bg-gray-600 text-white-800 py-3 rounded-lg hover:bg-gray-700 transition-all font-semibold">
            Admin Login
          </button>
        </div>

          <button className="w-full mt-4 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-all font-semibold">
            About Us
          </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Secure • Fast • Reliable
        </p>
      </div>
    </div>
  )
}