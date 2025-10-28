export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            IDfy Platform
          </h1>
          <p className="text-gray-600">
            Digital Identity Verification for Universities
          </p>
        </div>

        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold">
            Student Registration
          </button>
          
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-all font-semibold">
            Verify ID
          </button>
          
          <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-all font-semibold">
            Admin Login
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Secure • Fast • Blockchain-Ready
        </p>
      </div>
    </div>
  )
}