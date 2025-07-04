import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motions";
import contact2 from "@/img/contact_us/contact2.svg?url";
import Image from "next/image";

interface CallbackFormData {
  name: string;
  phoneNumber: string;
  reasonForCall: string;
  captcha: string;
}

interface CallbackFormErrors {
  name?: string;
  phoneNumber?: string;
  reasonForCall?: string;
}

interface RequestCallbackProps {
  className?: string;
}

export default function RequestCallback({
  className = "",
}: RequestCallbackProps) {
  const [formData, setFormData] = useState<CallbackFormData>({
    name: "",
    phoneNumber: "",
    reasonForCall: "",
    captcha: "",
  });
  const [errors, setErrors] = useState<CallbackFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof CallbackFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): CallbackFormErrors => {
    const newErrors: CallbackFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phoneNumber.replace(/\s/g, ""))
    ) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (!formData.reasonForCall.trim()) {
      newErrors.reasonForCall = "Please provide a reason for the call";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your API
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Thank you! A NaijaSpora advisor will call you within 24 hours.");
      setFormData({
        name: "",
        phoneNumber: "",
        reasonForCall: "",
        captcha: "",
      });
      setErrors({});
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      variants={fadeIn("top", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`w-full md:py-8 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Form */}
          <div className="order-2 lg:order-1">
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-[45px] font-medium text-gray-900 mb-2">
                  Request a Callback
                </h1>
                <p className="text-gray-600 mb-2 text-center">
                  Need help? Let us call you.
                </p>
                <p className="text-sm text-gray-500 text-center">
                  Fill out this quick form and a NaijaSpora advisor will reach
                  out within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="callback-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="callback-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className={`w-full px-4 py-3 bg-[#F3F0F4] focus:outline-none rounded-lg focus:ring-2 focus:ring-[#d3eaf2] focus:border-transparent transition-colors ${
                      errors.name ? "border-red-500 bg-red-50" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="callback-phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="callback-phone"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={`w-full px-4 py-3 bg-[#F3F0F4] focus:outline-none rounded-lg focus:ring-2 focus:ring-[#d3eaf2] focus:border-transparent transition-colors ${
                      errors.phoneNumber ? "border-red-500 bg-red-50" : ""
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="callback-reason"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Reason for Call
                  </label>
                  <textarea
                    id="callback-reason"
                    name="reasonForCall"
                    value={formData.reasonForCall}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Please describe what you need help with..."
                    className={`w-full px-4 py-3 bg-[#F3F0F4] focus:outline-none rounded-lg focus:ring-2 focus:ring-[#d3eaf2] focus:border-transparent transition-colors resize-none ${
                      errors.reasonForCall ? "border-red-500 bg-red-50" : ""
                    }`}
                  />
                  {errors.reasonForCall && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.reasonForCall}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-base text-primary-on py-3 px-10 rounded-full font-medium hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Requesting..." : "Request call back"}
                </button>

                {/* Honeypot field for spam protection */}
                <div className="hidden">
                  <label htmlFor="callback-captcha" className="hidden">
                    Leave this field empty
                  </label>
                  <input
                    type="text"
                    id="callback-captcha"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Right Section - Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end ml-8">
            <Image
              src={contact2}
              alt="Contact Us"
              width={600}
              height={350}
              className="md:h-[33rem] h-[25rem]"
              priority
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
