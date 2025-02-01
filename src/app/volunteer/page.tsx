'use client'

import { useState } from 'react'

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  skills: string;
  availability: string;
}

export default function VolunteerPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    skills: '',
    availability: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          skills: '',
          availability: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-reform-primary to-reform-secondary dark:from-reform-dark dark:to-reform-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Volunteer With Us</h1>
            <p className="text-lg md:text-xl text-white/90">
              Join our team and help make a difference in Erdington.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto mb-12 dark:prose-invert">
              <h2 className="text-gray-900 dark:text-white">Why Volunteer?</h2>
              <p className="text-gray-800 dark:text-gray-200">
                Volunteering with Reform UK Erdington is a great way to get involved in local politics and make a real difference in your community. Whether you have a few hours a week or can help at specific events, we welcome volunteers from all backgrounds and experience levels.
              </p>

              <h3 className="text-gray-900 dark:text-white">What You Can Do</h3>
              <ul className="text-gray-800 dark:text-gray-200">
                <li>Help with local campaigns and events,</li>
                <li>Assist with social media and digital communications,</li>
                <li>Support administrative tasks and organisation,</li>
                <li>Participate in community outreach programmes,</li>
                <li>Contribute your unique skills and expertise.</li>
              </ul>

              <h3 className="text-gray-900 dark:text-white">Benefits of Volunteering</h3>
              <ul className="text-gray-800 dark:text-gray-200">
                <li>Gain valuable experience in local politics,</li>
                <li>Meet like-minded people in your community,</li>
                <li>Make a real difference in Erdington,</li>
                <li>Learn new skills and develop existing ones,</li>
                <li>Be part of positive change in your area.</li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get Involved</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-reform-primary dark:focus:ring-reform-secondary focus:border-reform-primary dark:focus:border-reform-secondary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-reform-primary dark:focus:ring-reform-secondary focus:border-reform-primary dark:focus:border-reform-secondary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-reform-primary dark:focus:ring-reform-secondary focus:border-reform-primary dark:focus:border-reform-secondary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Skills & Experience
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="e.g., Social media, event planning, administration"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-reform-primary dark:focus:ring-reform-secondary focus:border-reform-primary dark:focus:border-reform-secondary bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Availability
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-reform-primary dark:focus:ring-reform-secondary focus:border-reform-primary dark:focus:border-reform-secondary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="" className="text-gray-500 dark:text-gray-400">Select your availability</option>
                    <option value="weekdays" className="text-gray-900 dark:text-white">Weekdays</option>
                    <option value="evenings" className="text-gray-900 dark:text-white">Evenings</option>
                    <option value="weekends" className="text-gray-900 dark:text-white">Weekends</option>
                    <option value="flexible" className="text-gray-900 dark:text-white">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about yourself and how you'd like to help..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-reform-primary dark:focus:ring-reform-secondary focus:border-reform-primary dark:focus:border-reform-secondary bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-6 py-3 bg-reform-primary hover:bg-reform-secondary dark:bg-reform-dark dark:hover:bg-reform-secondary text-white font-semibold rounded-md transition-colors duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-md">
                    Thank you for your interest in volunteering! We will contact you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-md">
                    There was an error submitting your form. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
