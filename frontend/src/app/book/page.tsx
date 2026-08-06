'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { salonServices, salonTherapists } from '@/data/salonData';
import { submitAppointment } from '@/lib/api';
import { Sparkles, Calendar, Clock, User, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function BookPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState(salonServices[0].id);
  const [selectedTherapistId, setSelectedTherapistId] = useState(salonTherapists[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-03-20');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedService = salonServices.find((s) => s.id === selectedServiceId) || salonServices[0];
  const selectedTherapist = salonTherapists.find((t) => t.id === selectedTherapistId) || salonTherapists[0];

  const timeSlots = ['09:00 AM', '11:00 AM', '01:30 PM', '03:30 PM', '05:30 PM', '07:00 PM'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientPhone) return;

    setIsSubmitting(true);
    const result = await submitAppointment({
      clientName,
      clientEmail,
      clientPhone,
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      therapistId: selectedTherapist.id,
      therapistName: selectedTherapist.name,
      preferredDate: selectedDate,
      preferredTime: selectedTime,
      notes,
    });
    setIsSubmitting(false);

    // Navigate to success confirmation page with details
    const searchParams = new URLSearchParams({
      id: result.id.toString(),
      name: clientName,
      service: selectedService.name,
      therapist: selectedTherapist.name,
      date: selectedDate,
      time: selectedTime,
      price: selectedService.price.toString(),
    });
    router.push(`/booking/success?${searchParams.toString()}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Bespoke Sanctuary Scheduler
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A0E0C]">
            Reserve Your Luxury Ritual
          </h1>
          <p className="text-sm sm:text-base text-[#4A524D] max-w-xl mx-auto">
            Choose your preferred treatment, master specialist, date, and time for a personalized pampering experience.
          </p>
        </div>

        {/* Step Wizard Indicator */}
        <div className="flex items-center justify-between max-w-2xl mx-auto mb-10 border-b border-[#D4AF37]/20 pb-4 text-xs font-semibold uppercase tracking-wider">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#D4AF37]' : 'text-gray-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-[#D4AF37] text-white' : 'bg-gray-200 text-gray-500'}`}>1</span>
            <span className="hidden sm:inline">Select Treatment</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-300" />
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#D4AF37]' : 'text-gray-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-[#D4AF37] text-white' : 'bg-gray-200 text-gray-500'}`}>2</span>
            <span className="hidden sm:inline">Choose Specialist & Date</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-300" />
          <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#D4AF37]' : 'text-gray-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-[#D4AF37] text-white' : 'bg-gray-200 text-gray-500'}`}>3</span>
            <span className="hidden sm:inline">Guest Info & Confirm</span>
          </div>
        </div>

        <Card className="p-6 sm:p-10 border-[#D4AF37]/30 shadow-2xl">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
                <h3 className="font-serif text-2xl font-bold text-[#0A0E0C]">Step 1: Choose Your Treatment</h3>
                <span className="text-xs text-[#D4AF37] font-semibold uppercase">{salonServices.length} Rituals Available</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {salonServices.map((service) => {
                  const isSelected = selectedServiceId === service.id;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                        isSelected
                          ? 'bg-[#1B3B2B] text-white border-[#1B3B2B] shadow-lg'
                          : 'bg-white/80 text-[#0A0E0C] border-[#D4AF37]/20 hover:border-[#D4AF37]'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-lg font-bold leading-tight">{service.name}</h4>
                        <span className={`font-serif text-lg font-bold ${isSelected ? 'text-[#D4AF37]' : 'text-[#0A0E0C]'}`}>
                          {formatCurrency(service.price)}
                        </span>
                      </div>
                      <p className={`text-xs line-clamp-2 ${isSelected ? 'text-gray-200' : 'text-[#4A524D]'}`}>
                        {service.description}
                      </p>
                      <div className={`text-xs flex items-center justify-between pt-2 border-t ${isSelected ? 'border-white/10 text-gray-300' : 'border-gray-100 text-gray-500'}`}>
                        <span>Duration: {service.durationMinutes} Mins</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end pt-6">
                <Button onClick={() => setStep(2)} size="md" variant="primary">
                  <span>Continue to Specialist & Date</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Select Specialist & Date */}
          {step === 2 && (
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
                <h3 className="font-serif text-2xl font-bold text-[#0A0E0C]">Step 2: Specialist & Time</h3>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Treatments
                </button>
              </div>

              {/* Therapist Selection */}
              <div className="space-y-4">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A524D]">
                  Select Master Therapist / Specialist
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {salonTherapists.map((therapist) => {
                    const isSelected = selectedTherapistId === therapist.id;
                    return (
                      <div
                        key={therapist.id}
                        onClick={() => setSelectedTherapistId(therapist.id)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                          isSelected
                            ? 'bg-[#1B3B2B] text-white border-[#1B3B2B] shadow-md'
                            : 'bg-white/80 text-[#0A0E0C] border-[#D4AF37]/20 hover:border-[#D4AF37]'
                        }`}
                      >
                        <img
                          src={therapist.image}
                          alt={therapist.name}
                          className="w-14 h-14 rounded-full object-cover border border-[#D4AF37]"
                        />
                        <div>
                          <h5 className="font-serif text-base font-bold">{therapist.name}</h5>
                          <p className={`text-xs ${isSelected ? 'text-[#D4AF37]' : 'text-gray-500'}`}>{therapist.role}</p>
                          <span className="text-[10px] text-gray-400">{therapist.experienceYears}+ Years Exp</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A524D]">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#D4AF37]/30 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A524D]">
                    Available Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                            isSelected
                              ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                              : 'bg-white text-[#0A0E0C] border-[#D4AF37]/30 hover:border-[#D4AF37]'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-6 border-t border-[#D4AF37]/20">
                <Button onClick={() => setStep(1)} variant="outline" size="md">
                  Back
                </Button>
                <Button onClick={() => setStep(3)} variant="primary" size="md">
                  <span>Continue to Guest Info</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Guest Details & Submit */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
                <h3 className="font-serif text-2xl font-bold text-[#0A0E0C]">Step 3: Contact & Confirmation</h3>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Date & Time
                </button>
              </div>

              {/* Reservation Summary Box */}
              <div className="p-5 bg-[#1B3B2B] text-white rounded-2xl space-y-2">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="font-serif text-lg font-bold text-[#D4AF37]">{selectedService.name}</span>
                  <span className="font-serif text-xl font-bold">{formatCurrency(selectedService.price)}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-200 pt-1">
                  <p><strong>Specialist:</strong> {selectedTherapist.name}</p>
                  <p><strong>Duration:</strong> {selectedService.durationMinutes} Mins</p>
                  <p><strong>Date:</strong> {selectedDate}</p>
                  <p><strong>Time Slot:</strong> {selectedTime}</p>
                </div>
              </div>

              {/* Guest Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name *"
                  placeholder="e.g. Victoria Sterling"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                />
                <Input
                  label="Email Address *"
                  type="email"
                  placeholder="e.g. victoria@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                />
              </div>

              <Input
                label="Phone Number *"
                type="tel"
                placeholder="e.g. +1 (555) 234-5678"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                required
              />

              <Textarea
                label="Special Requests / Skin Allergies (Optional)"
                placeholder="Let us know if you have any sensitivities or specific preferences for your appointment."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              <div className="flex justify-between pt-6 border-t border-[#D4AF37]/20">
                <Button type="button" onClick={() => setStep(2)} variant="outline" size="md">
                  Back
                </Button>
                <Button type="submit" isLoading={isSubmitting} variant="primary" size="lg">
                  Confirm Reservation ({formatCurrency(selectedService.price)})
                </Button>
              </div>
            </form>
          )}
        </Card>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
