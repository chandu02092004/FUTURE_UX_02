import { motion } from 'motion/react';
import { Calendar, Clock, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 px-6 py-12"
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl mb-6">
            <Calendar className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl mb-3 text-gray-900">Glamour Studio</h1>
          <p className="text-lg text-gray-600">Your beauty, our priority</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6 mb-12"
        >
          <div className="flex items-start space-x-4 text-left">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h3 className="text-lg text-gray-900 mb-1">Easy Booking</h3>
              <p className="text-sm text-gray-600">Book your appointment in seconds</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 text-left">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg text-gray-900 mb-1">Flexible Timing</h3>
              <p className="text-sm text-gray-600">Choose from available time slots</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 text-left">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h3 className="text-lg text-gray-900 mb-1">Expert Stylists</h3>
              <p className="text-sm text-gray-600">Professional beauty specialists</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full"
      >
        <Button
          onClick={onGetStarted}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-6 rounded-2xl text-lg shadow-lg"
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <p className="text-sm text-gray-500 text-center mt-4">
          No registration required
        </p>
      </motion.div>
    </motion.div>
  );
}
