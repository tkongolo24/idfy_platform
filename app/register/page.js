'use client'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { QRCodeSVG } from 'qrcode.react'

export default function Register() {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    contactNumber: '',
    department: '',
    photo: null,
  })

   // State 2: Photo preview 
  const [photoPreview, setPhotoPreview] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handlePhotoChange = (e) => {
  const file = e.target.files[0]
  if (file) {
    setFormData(prev => ({ ...prev, photo: file }))
    
    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setPhotoPreview(reader.result)
    }
    reader.readAsDataURL(file)
  }
}

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    setIsSubmitted(true);  
}

 return (
  <div className="min-h-screen bg-gradient-to-br from-gray-600 to-black-700 flex items-center justify-center p-4">
    {!isSubmitted ? (
      // FORM SCREEN - Complete Version
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Student Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
              placeholder="John"
              required
            />
          </div>

          {/*Last Name */}
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
            </label>
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                placeholder="Doe"
                required
            />
            </div>

          {/* Student ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Student ID
            </label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
              placeholder="STU12345"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
              placeholder="student@university.edu"
              required
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Student Photo
            </label>
            <div className="flex items-center space-x-4">
              {/* Preview */}
              <div className="flex-shrink-0">
                {photoPreview ? (
                  <img 
                    src={photoPreview} 
                    alt="Preview" 
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300">
                    <span className="text-gray-400 text-2xl">📷</span>
                  </div>
                )}
              </div>
              
              {/* Upload Button */}
              <label className="flex-1 cursor-pointer">
                <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-center border border-gray-300">
                  Choose Photo
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Recommended: Square photo, clear face
            </p>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <PhoneInput
              international
              defaultCountry="RW"
              value={formData.phone}
              onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
              className="phone-input-custom w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              required
            >
              <option value="">Course</option>
              <option value="Bachelor of Software Engineering">Bachelor of Software Engineering</option>
              <option value="Bachelor of Enterpreneural Leadership">Bachelor of Enterpreneural Leadership</option>
              <option value="Bachelor of International Trade">Bachelor of International Trade</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-all font-semibold mt-6"
          >
            Generate Digital ID
          </button>
        </form>

        <a 
          href="/"
          className="block text-center text-sm text-gray-600 hover:text-gray-800 mt-4"
        >
          ← Back to Home
        </a>
      </div>
    ) : (
      // QR CODE SCREEN - Enhanced with Photo
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✅</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Digital ID Created!
          </h2>
          <p className="text-gray-600">
            Registration successful
          </p>
        </div>

        {/* Student Photo */}
        {photoPreview && (
          <img 
            src={photoPreview} 
            alt="Student" 
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mx-auto mb-4 shadow-lg"
          />
        )}

        {/* Student Info */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800">
            {formData.fullName}
          </h3>
          <p className="text-blue-600 font-semibold">{formData.studentId}</p>
          <p className="text-sm text-gray-600">{formData.email}</p>
          <p className="text-sm text-gray-600">{formData.phone}</p>
          <p className="text-sm text-gray-500 mt-1">{formData.department}</p>
        </div>

        {/* QR Code */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <p className="text-sm text-gray-600 mb-3 font-semibold">Digital ID QR Code</p>
          <div className="flex justify-center bg-white p-4 rounded-lg">
            <QRCodeSVG 
              value={JSON.stringify({
                id: formData.studentId,
                name: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                department: formData.department,
                timestamp: new Date().toISOString()
              })}
              size={220}
              level="H"
              includeMargin={true}
            />
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Scan this code for instant verification
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button 
            onClick={() => window.print()}
            className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-all font-semibold"
          >
            🖨️ Print ID Card
          </button>
          
          <button 
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                fullName: '',
                studentId: '',
                email: '',
                phone: '',
                department: '',
                photo: null
              })
              setPhotoPreview(null)
            }}
            className="w-full bg-gray-600 text-white-800 py-3 rounded-lg hover:bg-gray-700 transition-all font-semibold"
          >
            ➕ Register Another Student
          </button>

          <a href="/"
            className="block w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold">
            🏠 Back to Home
          </a>
        </div>
      </div>
    )}
  </div>
)
}