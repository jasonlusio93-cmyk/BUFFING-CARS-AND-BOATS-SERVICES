import { motion } from 'motion/react';
import { Anchor, Car, Sparkles, ShieldCheck, Droplets, Sun } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Paint Correction',
    description: 'Remove swirls, scratches, and oxidation to restore your vehicle’s paint to a mirror-like finish.',
  },
  {
    icon: Anchor,
    title: 'Marine Restoration',
    description: 'Specialized buffing and polishing for boats and yachts to remove saltwater damage and oxidation.',
  },
  {
    icon: ShieldCheck,
    title: 'Ceramic Coating',
    description: 'Long-lasting hydrophobic protection that repels water, dirt, and UV rays for years.',
  },
  {
    icon: Sparkles,
    title: 'High-Speed Buffing',
    description: 'Professional machine buffing to bring back the deep gloss and clarity of your paintwork.',
  },
  {
    icon: Droplets,
    title: 'Interior Detailing',
    description: 'Deep cleaning and conditioning of leather, vinyl, and carpets to make the inside look as good as the outside.',
  },
  {
    icon: Sun,
    title: 'UV Protection',
    description: 'Essential protection for Florida vehicles against sun fading and heat damage.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Premium Restoration Services
          </h3>
          <p className="text-slate-400 text-lg">
            We don't just wash cars; we restore them. From luxury automobiles to marine vessels, we bring back the showroom shine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-500">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
