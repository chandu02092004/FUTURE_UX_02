import { motion } from 'motion/react';
import { ArrowLeft, Star } from 'lucide-react';

interface Staff {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  image: string;
  specialty: string;
}

interface StaffSelectionProps {
  onSelectStaff: (staff: Staff) => void;
  onBack: () => void;
  serviceName: string;
}

const staffMembers: Staff[] = [
  {
    id: 'emma',
    name: 'Emma Johnson',
    title: 'Senior Stylist',
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    specialty: '8 years experience',
  },
  {
    id: 'sophia',
    name: 'Sophia Martinez',
    title: 'Color Specialist',
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    specialty: '6 years experience',
  },
  {
    id: 'olivia',
    name: 'Olivia Chen',
    title: 'Master Stylist',
    rating: 5.0,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    specialty: '10 years experience',
  },
  {
    id: 'ava',
    name: 'Ava Williams',
    title: 'Beauty Specialist',
    rating: 4.9,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
    specialty: '7 years experience',
  },
];

export function StaffSelection({ onSelectStaff, onBack, serviceName }: StaffSelectionProps) {
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
        <h2 className="text-3xl text-white mb-2">Select a Stylist</h2>
        <p className="text-pink-100">For {serviceName}</p>
      </div>

      <div className="px-6 mt-6 space-y-4">
        {staffMembers.map((staff, index) => (
          <motion.button
            key={staff.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelectStaff(staff)}
            className="w-full bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 text-left"
          >
            <div className="flex items-start space-x-4">
              <img
                src={staff.image}
                alt={staff.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-lg text-gray-900 mb-1">{staff.name}</h3>
                <p className="text-sm text-purple-600 mb-2">{staff.title}</p>
                <p className="text-xs text-gray-600 mb-2">{staff.specialty}</p>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-gray-900">{staff.rating}</span>
                  <span className="text-xs text-gray-500">({staff.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
