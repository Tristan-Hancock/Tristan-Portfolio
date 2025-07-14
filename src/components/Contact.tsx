
// components/Contact.tsx
import React, { useState } from 'react'
import { PERSONAL_INFO } from '../constants'
import { MapPinIcon, MailIcon, PhoneIcon } from './icons/ContactIcons'

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value: rawValue } = e.target
    let value = rawValue

    // Normalize email: trim whitespace and lowercase
    if (name === 'email') {
      value = rawValue.trim().toLowerCase()
    }

    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('server/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Network error')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
          <p className="text-gray-500 mt-2">Get in touch with me</p>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white p-8 rounded-2xl shadow-lg">
          {/* Info column */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-3xl text-[#3B82F6] mr-4 mt-1"><MapPinIcon /></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">My Address</h3>
                <p className="text-gray-500">{PERSONAL_INFO.address}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-3xl text-[#3B82F6] mr-4 mt-1"><MailIcon /></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Email Me</h3>
                <p className="text-gray-500">{PERSONAL_INFO.email}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-3xl text-[#3B82F6] mr-4 mt-1"><PhoneIcon /></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Call Me</h3>
                <p className="text-gray-500">{PERSONAL_INFO.phone}</p>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                />
              </div>

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Your Message"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              />

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#3B82F6] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </button>
              </div>

              {status === 'success' && (
                <p className="text-green-600 text-center">Sent! I’ll reply soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center">Oops—couldn’t send.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
