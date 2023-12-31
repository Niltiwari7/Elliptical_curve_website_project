import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css'

function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_kl0jhjj', 'template_xzjp9il', e.target, 'r-ane09nVmDUAJ0SG')
      .then(
        (result) => {
          console.log('Email sent successfully:', result);
          // You can add code here to handle success, like showing a success message to the user.
        },
        (error) => {
          console.error('Email error:', error);
          // You can add code here to handle errors, like showing an error message to the user.
        }
      );
  };

  return (
    <section className="bg-slate-500 min-h-screen m-2">
      <div className="main py-8 lg:py-16 px-4 mx-auto">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-white sm:text-xl">Give Your Valuable feedback</p>
        <form  onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input
              type="email"
              id="email"
              value={email}
              name='to_name'
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              value={subject}
              name='message'
              onChange={(e) => setSubject(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea
              id="message"
              name='message'
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
