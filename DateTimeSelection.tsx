import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface DateTimeSelectionProps {
  onSelectDateTime: (date: string, time: string) => void;
  onBack: () => void;
  serviceName: string;
  staffName: string;
}

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
];

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function DateTimeSelection({ onSelectDateTime, onBack, serviceName, staffName }: DateTimeSelectionProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentWeekStart, setCurrentWeekStart] = useState(0);

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const visibleDates = dates.slice(currentWeekStart, currentWeekStart + 7);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleNext = () => {
    if (currentWeekStart + 7 < dates.length) {
      setCurrentWeekStart(currentWeekStart + 7);
      setSelectedDate(null);
    }
  };

  const handlePrev = () => {
    if (currentWeekStart > 0) {
      setCurrentWeekStart(currentWeekStart - 7);
      setSelectedDate(null);
    }
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      onSelectDateTime(selectedDate, selectedTime);
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
        <h2 className="text-3xl text-white mb-2">Pick Date & Time</h2>
        <p className="text-pink-100">{serviceName} with {staffName}</p>
      </div>

      <div className="px-6 mt-6">
        {/* Date Selection */}
        <div className="bg-white rounded-2xl p-5 shadow-md mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg text-gray-900 flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2 text-purple-600" />
              Select Date
            </h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                disabled={currentWeekStart === 0}
                className="p-1 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentWeekStart + 7 >= dates.length}
                className="p-1 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {visibleDates.map((date, index) => {
              const dateStr = formatDate(date);
              const isSelected = selectedDate === dateStr;
              const dayOfWeek = weekDays[date.getDay()];
              const dayOfMonth = date.getDate();

              return (
                <button
                  key={index}
                  onClick={() => setSelectedDate(dateStr)}
                  className={`flex flex-col items-center py-3 px-2 rounded-xl transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className={`text-xs mb-1 ${isSelected ? 'text-pink-100' : 'text-gray-500'}`}>
                    {dayOfWeek}
                  </span>
                  <span className="text-lg">{dayOfMonth}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Selection */}
        <div className="bg-white rounded-2xl p-5 shadow-md">
          <h3 className="text-lg text-gray-900 mb-4">Available Time Slots</h3>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((time) => {
              const isSelected = selectedTime === time;
              const isBooked = time === '10:00 AM' || time === '02:00 PM';

              return (
                <button
                  key={time}
                  onClick={() => !isBooked && setSelectedTime(time)}
                  disabled={isBooked}
                  className={`py-3 px-2 rounded-xl text-sm transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg'
                      : isBooked
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <Button
          onClick={handleConfirm}
          disabled={!selectedDate || !selectedTime}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-6 rounded-2xl text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </Button>
      </div>
    </motion.div>
  );
}
