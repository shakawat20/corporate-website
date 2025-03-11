import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ContactPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contact Card */}
      <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 max-w-5xl w-full mx-5 md:mx-10 shadow-xl">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="text-white space-y-5">
            <p className="text-lg">
              We'd love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="space-y-3">
              <p className="flex items-center">
                <i className="fa-solid fa-location-dot mr-3 text-xl"></i> Dhaka, Bangladesh
              </p>
              <p className="flex items-center">
                <i className="fa-solid fa-envelope mr-3 text-xl"></i> shakawat.cse20@gmail.com
              </p>
              <p className="flex items-center">
                <i className="fa-solid fa-phone mr-3 text-xl"></i> +8801609431059
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register('name')}
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-white/20 placeholder-white text-white border border-white/30 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
            <input
              {...register('email')}
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl bg-white/20 placeholder-white text-white border border-white/30 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
            <textarea
              {...register('message')}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-xl bg-white/20 placeholder-white text-white border border-white/30 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
