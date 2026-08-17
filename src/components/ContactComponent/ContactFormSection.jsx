import React, { useState } from 'react'
import { InputField, SelectField, TextAreaField } from '../FormField'

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Digital Architecture Inquiry',
    details: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const subjectOptions = [
    'Digital Architecture Inquiry',
    'Hardware Procurement',
    'Smart Automation',
    'General Support'
  ]

  return (
    <section className="bg-background px-6 md:px-12 pb-24">
      <div className="max-w-6xl mx-auto -mt-32 relative z-20 grid grid-cols-1 lg:grid-cols-12 shadow-2xl rounded-xl overflow-hidden">
        {/* LEFT CARD: Contact Information */}
        <div className="bg-primary text-white p-10 md:p-14 lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-primary-light text-sm mb-12 leading-relaxed">
              Ready to scale? Our team is standing by to provide technical specifications and project blueprints.
            </p>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="text-container mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-light uppercase tracking-widest mb-1">Phone</p>
                  <p className="font-medium">+234 (0) 800 ELECT SOL</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="text-container mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-light uppercase tracking-widest mb-1">Email</p>
                  <p className="font-medium">engineering@theelect.solutions</p>
                </div>
              </div>

              {/* Headquarters */}
              <div className="flex items-start gap-4">
                <div className="text-container mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-light uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="font-medium leading-relaxed">
                    Lagos Engineering District,
                    <br />
                    Victoria Island, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-16 pt-8 border-t border-white/10">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-container transition-colors flex items-center justify-center text-white font-bold text-xs"
            >
              in
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-container transition-colors flex items-center justify-center text-white font-bold text-xs"
            >
              X
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-container transition-colors flex items-center justify-center text-white font-bold text-xs"
            >
              gh
            </a>
          </div>
        </div>

        {/* RIGHT CARD: Message Form */}
        <div className="bg-white p-10 md:p-14 lg:col-span-7">
          <h2 className="text-3xl font-bold text-primary mb-2">Send us a message</h2>
          <p className="text-gray-500 text-sm mb-8">
            We usually respond within 24 business hours with a preliminary assessment.
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded-md">
              Thank you! Your message has been sent successfully. Our team will contact you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
              />
            </div>

            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@company.com"
              required
            />

            <SelectField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              options={subjectOptions}
            />

            <TextAreaField
              label="Project Details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us about your technical requirements..."
              rows={4}
              required
            />

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 transition-colors text-white font-bold py-4 px-6 rounded-md text-sm flex justify-center items-center gap-2 mt-4 cursor-pointer"
            >
              Initialize Consultation <span>&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection