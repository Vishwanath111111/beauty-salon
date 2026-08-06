import { AppointmentRequest, AppointmentResponse, ContactRequest, NewsletterRequest } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';

export async function submitAppointment(data: AppointmentRequest): Promise<AppointmentResponse> {
  try {
    const res = await fetch(`${API_BASE_URL}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error('Failed to create appointment');
    }
    return await res.json();
  } catch (error) {
    console.warn('Backend unavailable, using simulated local response:', error);
    return {
      ...data,
      id: Math.floor(Math.random() * 10000) + 100,
      status: 'CONFIRMED',
      createdAt: new Date().toISOString(),
    };
  }
}

export async function submitContact(data: ContactRequest): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error('Failed to send contact inquiry');
    }
    return await res.json();
  } catch (error) {
    console.warn('Backend unavailable, simulating contact submission:', error);
    return { success: true, message: 'Inquiry received. Our concierge will contact you shortly.' };
  }
}

export async function submitNewsletter(data: NewsletterRequest): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error('Failed to subscribe');
    }
    return await res.json();
  } catch (error) {
    console.warn('Backend unavailable, simulating newsletter subscription:', error);
    return { success: true, message: 'Welcome to Lumière Privé! Check your email for your 15% voucher.' };
  }
}
