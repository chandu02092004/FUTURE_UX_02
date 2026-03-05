import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ServiceSelection } from './components/ServiceSelection';
import { StaffSelection } from './components/StaffSelection';
import { DateTimeSelection } from './components/DateTimeSelection';
import { BookingSummary } from './components/BookingSummary';
import { ConfirmationScreen } from './components/ConfirmationScreen';

type Screen = 'welcome' | 'service' | 'staff' | 'datetime' | 'summary' | 'confirmation';

interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
  icon: React.ReactNode;
  description: string;
}

interface Staff {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  image: string;
  specialty: string;
}

interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setCurrentScreen('staff');
  };

  const handleStaffSelect = (staff: Staff) => {
    setSelectedStaff(staff);
    setCurrentScreen('datetime');
  };

  const handleDateTimeSelect = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setCurrentScreen('summary');
  };

  const handleConfirmBooking = (info: CustomerInfo) => {
    setCustomerInfo(info);
    setCurrentScreen('confirmation');
  };

  const handleStartOver = () => {
    setSelectedService(null);
    setSelectedStaff(null);
    setSelectedDate('');
    setSelectedTime('');
    setCustomerInfo(null);
    setCurrentScreen('welcome');
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl">
      <AnimatePresence mode="wait">
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            key="welcome"
            onGetStarted={() => setCurrentScreen('service')}
          />
        )}

        {currentScreen === 'service' && (
          <ServiceSelection
            key="service"
            onSelectService={handleServiceSelect}
            onBack={() => setCurrentScreen('welcome')}
          />
        )}

        {currentScreen === 'staff' && selectedService && (
          <StaffSelection
            key="staff"
            onSelectStaff={handleStaffSelect}
            onBack={() => setCurrentScreen('service')}
            serviceName={selectedService.name}
          />
        )}

        {currentScreen === 'datetime' && selectedService && selectedStaff && (
          <DateTimeSelection
            key="datetime"
            onSelectDateTime={handleDateTimeSelect}
            onBack={() => setCurrentScreen('staff')}
            serviceName={selectedService.name}
            staffName={selectedStaff.name}
          />
        )}

        {currentScreen === 'summary' && selectedService && selectedStaff && (
          <BookingSummary
            key="summary"
            service={selectedService}
            staff={selectedStaff}
            date={selectedDate}
            time={selectedTime}
            onConfirm={handleConfirmBooking}
            onBack={() => setCurrentScreen('datetime')}
          />
        )}

        {currentScreen === 'confirmation' && selectedService && selectedStaff && customerInfo && (
          <ConfirmationScreen
            key="confirmation"
            service={selectedService}
            staff={selectedStaff}
            date={selectedDate}
            time={selectedTime}
            customerInfo={customerInfo}
            onStartOver={handleStartOver}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
