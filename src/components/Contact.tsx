import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const SERVICE_ID = 'service_bcbm62c';
const TEMPLATE_ID = 'template_pzx49wu';
const PUBLIC_KEY = 'NBITzlWs3MIjNaFqT';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        PUBLIC_KEY
      );
      toast.success("Message sent successfully! I'll get back to you soon. 🚀");
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const inputClass = (hasError?: boolean) =>
    `w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-700 border ${hasError ? 'border-red-400' : 'border-gray-200 dark:border-gray-600'} text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors text-sm`;

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Get In <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Let's work together</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed text-sm">
                I'm currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hi — my inbox is always open!
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: <FiMail size={16} />, label: 'Email', value: 'sadhanav.1206@gmail.com' },
                  { icon: <FiMapPin size={16} />, label: 'Location', value: 'Coimbatore, India' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                    <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">{item.icon}</div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                      <p className="font-medium text-gray-800 dark:text-gray-200 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                {[
                  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: <FiGithub size={18} />, href: 'https://github.com', label: 'GitHub' },
                  { icon: <FiMail size={18} />, href: 'mailto:sadhanav.1206@gmail.com', label: 'Email' },
                  { icon: <SiLeetcode size={18} />, href: 'https://leetcode.com', label: 'LeetCode' },
                ].map((s) => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2.5 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 transition-all"
                    aria-label={s.label}>
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-7 border border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input {...register('name', { required: 'Name is required' })} placeholder="Your Name" className={inputClass(!!errors.name)} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })} placeholder="Your Email" className={inputClass(!!errors.email)} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <input {...register('subject', { required: 'Subject is required' })} placeholder="Subject" className={inputClass(!!errors.subject)} />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <textarea {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Min 10 characters' } })} placeholder="Your Message" rows={5} className={inputClass(!!errors.message)} />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <motion.button type="submit" disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-70 text-sm shadow-md shadow-indigo-100 dark:shadow-indigo-900/30">
                  {isSubmitting ? 'Sending...' : <><FiSend size={15} /> Send Message</>}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
