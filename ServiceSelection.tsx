import { motion } from 'motion/react';
import { Scissors, Sparkles, Palette, Wand2, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
  icon: React.ReactNode;
  description: string;
}

interface ServiceSelectionProps {
  onSelectService: (service: Service) => void;
  onBack: () => void;
}

const services: Service[] = [
  {
    id: 'haircut',
    name: 'Haircut & Styling',
    duration: '45 min',
    price: '$45',
    icon: <Scissors className="w-6 h-6" />,
    description: 'Professional haircut with styling',
  },
  {
    id: 'coloring',
    name: 'Hair Coloring',
    duration: '2 hours',
    price: '$120',
    icon: <Palette className="w-6 h-6" />,
    description: 'Full hair coloring service',
  },
  {
    id: 'facial',
    name: 'Facial Treatment',
    duration: '60 min',
    price: '$80',
    icon: <Sparkles className="w-6 h-6" />,
    description: 'Relaxing facial and skin care',
  },
  {
    id: 'makeup',
    name: 'Professional Makeup',
    duration: '90 min',
    price: '$100',
    icon: <Wand2 className="w-6 h-6" />,
    description: 'Special occasion makeup',
  },
];

export function ServiceSelection({ onSelectService, onBack }: ServiceSelectionProps) {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-gray-50 pb-6"
    >
      <div className="bg-gradient-to-br from-pink-500 to-purple-600 px-6 pt-12 pb-8 rounded-b-3xl shadow-lg">
        <button
          onClick={onBack}
          className="flex items-center text-white mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <h2 className="text-3xl text-white mb-2">Choose a Service</h2>
        <p className="text-pink-100">Select the service you'd like to book</p>
      </div>

      <div className="px-6 mt-6 space-y-4">
        {services.map((service, index) => (
          <motion.button
            key={service.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelectService(service)}
            className="w-full bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 text-left"
          >
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 text-purple-600">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-gray-900 mb-1">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{service.duration}</span>
                  <span className="text-lg text-purple-600">{service.price}</span>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
