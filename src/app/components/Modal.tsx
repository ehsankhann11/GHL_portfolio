'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  preselectedService?: string;
}

export default function Modal({ isOpen, onClose, title = "Let's Get Started", preselectedService = '' }: ModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    service: '',
    budget: '',
    projectDetails: ''
  });

  // Update formData when modal opens with preselectedService
  useEffect(() => {
    if (isOpen && preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [isOpen, preselectedService]);

  const services = [
    { value: 'ghl-automation-800', label: 'GHL Automation Setup ($800)' },
    { value: 'ai-automation-1700', label: 'AI Automation System ($1,700)' },
    { value: 'ghl-va-1200', label: 'GHL VA Monthly ($1,200)' },
    { value: 'conversion-funnel-1000', label: 'Conversion Funnel ($1,000)' },
    { value: 'advanced-workflows-900', label: 'Advanced Workflows ($900)' },
    { value: 'custom-snapshot-600', label: 'Custom Snapshot ($600)' },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
          setFormData({
            fullName: '',
            email: '',
            businessName: '',
            service: '',
            budget: '',
            projectDetails: ''
          });
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-[201] p-4"
          >
            <div className="bg-neutral-900 border border-white/10 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h3 className="text-xl font-black uppercase tracking-tight">{title}</h3>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Form or Success */}
              {isSuccess ? (
                <div className="p-12 text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 text-4xl mx-auto mb-6">
                    ✓
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-4">Thank You!</h4>
                  <p className="text-gray-400">I'll review your request and get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@agency.com"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">
                      Business / Agency Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="My Digital Agency"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget (Optional) */}
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">
                      Budget (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="$1,000 - $2,000"
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

