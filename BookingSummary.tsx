import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User, Scissors, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface BookingSummaryProps {
  service: any;
  staff: any;
  date: string;
  time: string;
  onConfirm: (customerInfo: { name: string; phone: string; email: string }) => void;
  onBack: () => void;
}

export function BookingSummary({ service, staff, date, time, onConfirm, onBack }: BookingSummaryProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && email) {
      onConfirm({ name, phone, email });
    }
  };

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-gray-50 pb-24"
    >
      <div className="bg-gradient-to-br from-pink-500 to-purple-600 px-6 pt-12 pb-8 rounded-b-3xl shadow-lg">
        <button
          onClick={onBack}
          className="flex items-center text-white mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <h2 className="text-3xl text-white mb-2">Booking Summary</h2>
        <p className="text-pink-100">Review your appointment details</p>
      </div>

      <div className="px-6 mt-6 space-y-4">
        {/* Appointment Details */}
        <div className="bg-white rounded-2xl p-5 shadow-md">
          <h3 className="text-lg text-gray-900 mb-4">Appointment Details</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Scissors className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Service</p>
                <p className="text-base text-gray-900">{service.name}</p>
                <p className="text-sm text-gray-600">{service.duration} • {service.price}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Stylist</p>
                <p className="text-base text-gray-900">{staff.name}</p>
                <p className="text-sm text-gray-600">{staff.title}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="text-base text-gray-900">{date}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="text-base text-gray-900">{time}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-base text-gray-900">Glamour Studio</p>
                <p className="text-sm text-gray-600">123 Beauty Avenue, Downtown</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Information Form */}
        <div className="bg-white rounded-2xl p-5 shadow-md">
          <h3 className="text-lg text-gray-900 mb-4">Your Information</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </form>
        </div>

        {/* Price Summary */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Service Price</span>
            <span className="text-gray-900">{service.price}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Booking Fee</span>
            <span className="text-gray-900">$0</span>
          </div>
          <div className="border-t border-gray-300 my-3"></div>
          <div className="flex items-center justify-between">
            <span className="text-lg text-gray-900">Total</span>
            <span className="text-2xl text-purple-600">{service.price}</span>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <Button
          onClick={handleSubmit}
          disabled={!name || !phone || !email}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-6 rounded-2xl text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirm Booking
        </Button>
      </div>
    </motion.div>
  );
}
