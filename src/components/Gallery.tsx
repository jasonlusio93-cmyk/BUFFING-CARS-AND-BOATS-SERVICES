import { motion } from 'motion/react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop',
    title: 'Paint Correction',
    category: 'Auto',
  },
  {
    url: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop',
    title: 'Marine Restoration',
    category: 'Marine',
  },
  {
    url: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=800&auto=format&fit=crop',
    title: 'Ceramic Coating',
    category: 'Protection',
  },
  {
    url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
    title: 'Engine Bay Detail',
    category: 'Detailing',
  },
  {
    url: 'https://images.unsplash.com/photo-1605218427360-6961d3748c5b?q=80&w=800&auto=format&fit=crop',
    title: 'Mirror Finish',
    category: 'Auto',
  },
  {
    url: 'https://images.unsplash.com/photo-1552934526-c820512da046?q=80&w=800&auto=format&fit=crop',
    title: 'Yacht Polishing',
    category: 'Marine',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
              Recent Transformations
            </h3>
          </div>
          <a href="#contact" className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors border-b border-blue-500/30 pb-1 hover:border-blue-500">
            Get your vehicle quoted
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {image.category}
                </span>
                <h4 className="text-white font-bold text-lg">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
