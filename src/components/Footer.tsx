import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-bold font-display text-white tracking-tighter mb-4 block">
              BUFFING<span className="text-blue-500">PRO</span>
            </a>
            <p className="text-slate-400 max-w-sm mb-6">
              Professional detailing and restoration services for cars and boats in Hialeah, FL. We bring the showroom shine back to your vehicle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/buffingservices?igsh=MTFubnNvdjl3Mm5peQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-blue-500 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Paint Correction</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Marine Restoration</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Ceramic Coating</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Interior Detailing</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Buffing Cars & Boats Services. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
