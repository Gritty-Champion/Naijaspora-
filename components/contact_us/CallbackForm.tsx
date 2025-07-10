import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motions";
import contact2 from "@/img/contact_us/contact2.svg?url";
import Image from "next/image";
import InputField from "@/components/contact_us/Input";
import TextareaField from "@/components/contact_us/TextArea";
import Button from "@/components/Button";

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
      <div className="max-w-6xl mx-auto font-montserrat">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Form */}
          <div className="order-2 lg:order-1">
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="text-center mb-8">
                <h1 className="sm:text-display-medium text-headline-medium font-medium text-black mb-2">
                  Request a Callback
                </h1>
                <p className="text-black font-medium text-label-large">
                  Need help? Let us call you.
                </p>
                <p className="text-black font-medium text-label-large">
                  Fill out this quick form and a NaijaSpora advisor will reach
                  out within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Name"
                  className="focus:ring-2 focus:ring-neutral-90"
                />

                <InputField
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={errors.phoneNumber}
                  placeholder="Phone Number"
                  className="focus:ring-2 focus:ring-neutral-90"
                />

                <TextareaField
                  label="Reason for Call"
                  name="reasonForCall"
                  value={formData.reasonForCall}
                  onChange={handleChange}
                  error={errors.reasonForCall}
                  placeholder="Please describe what you need help with..."
                  rows={4}
                />

                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  className="!rounded-full"
                >
                  Request call back
                </Button>

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
