import { motion } from 'motion/react';
import { Award, Clock, ThumbsUp, Shield } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Our team is trained and certified in the latest detailing techniques and ceramic coating applications.',
  },
  {
    icon: Clock,
    title: 'Timely Service',
    description: 'We respect your time. Our efficient processes ensure your vehicle is ready when promised.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind our work. If you are not 100% satisfied, we will make it right.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Peace of mind knowing your valuable asset is in safe, professional hands.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-blue-500 mb-6 shadow-lg shadow-blue-900/10">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
