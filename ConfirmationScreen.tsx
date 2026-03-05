import { motion } from 'motion/react';
import { CheckCircle, Calendar, Download, Home } from 'lucide-react';
import { Button } from './ui/button';

interface ConfirmationScreenProps {
  service: any;
  staff: any;
  date: string;
  time: string;
  customerInfo: { name: string; phone: string; email: string };
  onStartOver: () => void;
}

export function ConfirmationScreen({ 
  service, 
  staff, 
  date, 
  time, 
  customerInfo,
  onStartOver 
}: ConfirmationScreenProps) {
  const bookingId = `BK${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 px-6 py-12 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="mb-6"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
          <CheckCircle className="w-16 h-16 text-white" />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl text-gray-900 mb-3">Booking Confirmed!</h1>
        <p className="text-lg text-gray-600 mb-2">Your appointment is all set</p>
        <p className="text-sm text-gray-500">Booking ID: {bookingId}</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full bg-white rounded-2xl p-6 shadow-xl mb-6"
      >
        <h3 className="text-lg text-gray-900 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-purple-600" />
          Appointment Details
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Service</span>
            <span className="text-sm text-gray-900">{service.name}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Stylist</span>
            <span className="text-sm text-gray-900">{staff.name}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Date</span>
            <span className="text-sm text-gray-900">{date}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Time</span>
            <span className="text-sm text-gray-900">{time}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Duration</span>
            <span className="text-sm text-gray-900">{service.duration}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-sm text-gray-600">Price</span>
            <span className="text-lg text-purple-600">{service.price}</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
          <p className="text-sm text-gray-700 mb-1">Customer: {customerInfo.name}</p>
          <p className="text-xs text-gray-600">Phone: {customerInfo.phone}</p>
          <p className="text-xs text-gray-600">Email: {customerInfo.email}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6"
      >
        <p className="text-sm text-blue-900 text-center">
          📧 A confirmation email has been sent to {customerInfo.email}
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full space-y-3"
      >
        <Button
          onClick={onStartOver}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-6 rounded-2xl text-lg shadow-lg"
        >
          <Home className="w-5 h-5 mr-2" />
          Book Another Appointment
        </Button>
        
        <button className="w-full border-2 border-purple-200 text-purple-600 py-4 rounded-2xl text-base hover:bg-purple-50 transition-colors flex items-center justify-center">
          <Download className="w-5 h-5 mr-2" />
          Download Receipt
        </button>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-gray-600">
          Need to make changes?
        </p>
        <p className="text-sm text-purple-600">
          Call us at (555) 123-4567
        </p>
      </motion.div>
    </motion.div>
  );
}
