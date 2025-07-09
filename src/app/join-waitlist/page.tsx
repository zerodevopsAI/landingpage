"use client";
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Send } from 'lucide-react';


export default function JoinWaitlistPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        const json = await res.json();
        setError(json.error || 'Failed to submit.');
      }
    } catch {
      setError('Failed to submit.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-900 to-background">
        <div className="container mx-auto max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-center">
            Join Our Waitlist
          </h1>
          <p className="text-lg text-gray-300 mb-10 text-center">
            Be the first to know when MonkCI launches. Fill out the form below to join our exclusive waitlist.
          </p>
          <form className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-xl space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="designation" className="block text-sm font-medium text-gray-200 mb-2">Designation</label>
              <input
                type="text"
                id="designation"
                name="designation"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your role or title"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message <span className="text-gray-400">(optional)</span></label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Anything you want to share... (optional)"
              ></textarea>
            </div>
            {success && <div className="text-green-400 text-center font-semibold">Thank you! We&apos;ve received your request.</div>}
            {error && <div className="text-red-400 text-center font-semibold">{error}</div>}
            {/* <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg font-semibold py-3" disabled={loading}>
              {loading ? 'Submitting...' : 'Join Waitlist'}
            </Button> */}

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
                  {loading ? 'Sending...' : 'Join Waitlist'}
                  <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
} 