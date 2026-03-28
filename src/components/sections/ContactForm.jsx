import React, { useState } from 'react';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';

/**
 * Reusable contact form component.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string} props.buttonText
 */
const ContactForm = ({
  title = 'Book a Consultation',
  subtitle = 'Get Started',
  buttonText = 'Book Consultation',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send to backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    'w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-siemens-primary)] focus:border-transparent transition-all';

  return (
    <section className="section-padding bg-[var(--color-siemens-gray-100)]" id="form">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="max-w-3xl mx-auto mt-10">
          {submitted ? (
            <div className="text-center py-16 bg-white rounded-sm shadow-sm border-t-4 border-green-500">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Thank you!
              </h3>
              <p className="text-slate-600">
                We've received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-sm shadow-sm border-t-4 border-[var(--color-siemens-primary)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className={inputClass}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className={inputClass}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your organization"
                    className={inputClass}
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What can we help you with?"
                  className={inputClass}
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell us about your project, goals, or questions..."
                  className={`${inputClass} resize-none`}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3.5 bg-[var(--color-siemens-primary)] hover:bg-sky-600 text-white font-bold text-sm uppercase tracking-wider rounded-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                {buttonText}
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
