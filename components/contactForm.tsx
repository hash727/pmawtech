'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast from 'react-hot-toast';

type FormData = {
  name: string;
  email: string;
  phone: string;
  sp_req:string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {

    const loadingToast = toast.loading('Sending message...');
    try{
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const dat = await response.json()
      toast.dismiss(loadingToast);
      if (response.ok) {
        setSuccess(true);
        reset();
      }else{
        toast.error(dat.error || "Something went wrong")
      }
    } catch(err) {
      toast.dismiss(loadingToast);
      toast.error('Failed to send email. Try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input
          {...register('name', { required: true })}
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
          placeholder="Your Name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
      </div>

      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input
          type="email"
          {...register('email', { required: true })}
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
      </div>

      <div>
        <label className="block mb-1 font-semibold">Phone</label>
        <input
          type="tel"
          {...register('phone', { required: true })}
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
          placeholder="Phone Number"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">Phone is required</p>}
      </div>

      <div>
        <label className="block mb-1 font-semibold">Contract Demand(in KW from DISCOM) or Solar Plant Requirement (in KW)</label>
        <input
          type="tel"
          {...register('sp_req', { required: true })}
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
          placeholder="Solar Plant Required (in Kilo Watts)"
        />
        {errors.sp_req && <p className="text-red-500 text-sm mt-1">Solar Plant (in KW) is required</p>}
      </div>

      <div>
        <label className="block mb-1 font-semibold">Message</label>
        <textarea
          {...register('message', { required: true })}
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
          rows={5}
          placeholder="Write your message..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-slate-600 text-white px-6 py-2 rounded-md hover:bg-slate-700 transition"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {success && (
        <p className="text-slate-600 text-sm mt-2">Your message has been sent successfully!</p>
      )}
    </form>
  );
}
