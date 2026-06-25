import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Let's collaborate on exciting AI and ML projects</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="glass p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📱</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                      <a
                        href="tel:+923256673856"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        +92 325 667 3856
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="glass p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📧</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                      <a
                        href="mailto:muhammadbilalyousaf3@gmail.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                      >
                        muhammadbilalyousaf3@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* GitHub */}
                <div className="glass p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🐙</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">GitHub</h4>
                      <a
                        href="https://github.com/mirzabila"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        github.com/mirzabila
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="glass p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🌍</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Availability</h4>
                      <p className="text-gray-300">Open to Remote, Internship, and Freelance opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-purple-500/30">
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={submitted}
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Connect with me on social platforms</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/mirzabila"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-full flex items-center justify-center border border-blue-500/30 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all group"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:muhammadbilalyousaf3@gmail.com"
              className="w-12 h-12 glass rounded-full flex items-center justify-center border border-blue-500/30 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all group"
              aria-label="Email"
            >
              <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a
              href="https://wa.me/923256673856"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-full flex items-center justify-center border border-green-500/30 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 transition-all group"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6 text-green-400 group-hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.206-.368-.067c-1.264-.233-2.477-.571-3.644-1.111l.142 1.205c.168 1.43-.271 2.91-1.213 4.027C2.86 11.49 2 13.172 2 14.972c0 .364.033.724.1 1.077l.05.375-.375.221C.633 17.172 0 18.25 0 19.5c0 1.313.667 2.566 1.773 3.295L3.69 23h2.52l.5-1.468C7.859 22.258 9.401 22.5 11 22.5c5.523 0 10-4.477 10-10S16.523 2.5 11 2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
