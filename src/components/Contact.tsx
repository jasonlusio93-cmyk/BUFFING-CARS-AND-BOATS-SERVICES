import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, CheckCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
              Ready to Restore Your Vehicle?
            </h3>
            <p className="text-slate-400 text-lg mb-12">
              Contact us today for a free estimate. We bring professional detailing services directly to your needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 text-blue-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Visit Us</h4>
                  <p className="text-slate-400">7677 NW 181st Terrace<br />Hialeah, FL 33015</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 text-blue-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Call Us</h4>
                  <a href="tel:+19544702391" className="text-slate-400 hover:text-white transition-colors">
                    (954) 470-2391
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 text-blue-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Business Hours</h4>
                  <ul className="text-slate-400 space-y-1">
                    <li className="flex justify-between w-48"><span>Mon - Thu:</span> <span>8:00 AM - 5:00 PM</span></li>
                    <li className="flex justify-between w-48"><span>Friday:</span> <span>8:00 AM - 3:00 PM</span></li>
                    <li className="flex justify-between w-48"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
                    <li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-700/50">
            <h4 className="text-2xl font-bold text-white mb-6">Request a Quote</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-400 mb-2">Service Needed</label>
                <select
                  id="service"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                >
                  <option>Select a service...</option>
                  <option>Car Detailing</option>
                  <option>Boat Restoration</option>
                  <option>Ceramic Coating</option>
                  <option>Paint Correction</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your vehicle and what you need..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
              >
                Send Request
                <CheckCircle size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
