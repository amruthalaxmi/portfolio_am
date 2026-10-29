import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Check, Copy, ExternalLink } from 'lucide-react';
import { CANDIDATE } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CANDIDATE.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1.5">
            Communication
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Contact & Channels
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Reach out regarding software engineering opportunities, collegiate collaborations, or technical questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Functional Contact Form */}
          <div className="lg:col-span-7 clean-card rounded-xl p-6 sm:p-7">
            <h3 className="text-sm font-bold text-white font-mono mb-4">
              Send a Direct Message
            </h3>

            {submitted ? (
              <div className="py-8 px-4 text-center bg-slate-900/60 rounded-lg border border-slate-800">
                <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-white mb-1">
                  Message Dispatched
                </p>
                <p className="text-xs text-slate-300 mb-4">
                  Thank you, {formData.name}. Amrutha Laxmi will follow up via email.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-3.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-medium text-slate-300 mb-1"
                    >
                      Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-3 py-2 text-xs text-white bg-slate-900 rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs font-medium text-slate-300 mb-1"
                    >
                      Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-3 py-2 text-xs text-white bg-slate-900 rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="form-subject"
                    className="block text-xs font-medium text-slate-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="form-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship inquiry, project discussion"
                    className="w-full px-3 py-2 text-xs text-white bg-slate-900 rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs font-medium text-slate-300 mb-1"
                  >
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-3 py-2 text-xs text-white bg-slate-900 rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Verified External Badges */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* LinkedIn Card */}
            <div className="clean-card rounded-xl p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">LinkedIn</h4>
                    <p className="text-[11px] text-slate-400">Professional Network</p>
                  </div>
                </div>
                <a
                  href={CANDIDATE.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-medium"
                >
                  <span>View</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-[11px] font-mono text-slate-400 mt-2 truncate">
                linkedin.com/in/amrutha-laxmi-51137a340
              </p>
            </div>

            {/* GitHub Card */}
            <div className="clean-card rounded-xl p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">GitHub</h4>
                    <p className="text-[11px] text-slate-400">Repositories & Code</p>
                  </div>
                </div>
                <a
                  href={CANDIDATE.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-medium"
                >
                  <span>View</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-[11px] font-mono text-slate-400 mt-2">
                github.com/amruthalaxmi
              </p>
            </div>

            {/* Email Card */}
            <div className="clean-card rounded-xl p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Email</h4>
                    <p className="text-[11px] text-slate-400">{CANDIDATE.contact.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-1.5 px-2 text-center text-[11px] font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded border border-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-blue-400" />
                      <span className="text-blue-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${CANDIDATE.contact.email}`}
                  className="flex-1 py-1.5 px-2 text-center text-[11px] font-medium text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors"
                >
                  Open Mail App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
