import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import contact1 from "@/img/contact_us/contact1.svg?url";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motions";
import fbIcon from "@/img/fb.svg";
import linkedIcon from "@/img/linked.svg";
import instaIcon from "@/img/insta.svg";
import twitterIcon from "@/img/twitter.svg";
import Link from "next/link";
import InputField from "@/components/contact_us/Input";
import TextareaField from "@/components/contact_us/TextArea";
import Button from "@/components/Button";

interface FormData {
  name: string;
  email: string;
  message: string;
  captcha: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const socialLinks = [
    { icon: fbIcon, link: "" },
    { icon: linkedIcon, link: "" },
    { icon: instaIcon, link: "" },
    { icon: twitterIcon, link: "" },
  ];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    captcha: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
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
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
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
      // simulating a successful submission pending api integration
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Thank you for your message! We'll be in touch soon.");
      setFormData({ name: "", email: "", message: "", captcha: "" });
      setErrors({});
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full h-fit"
    >
      <Head>
        <title>Contact Us - NaijaSporra</title>
        <meta
          name="description"
          content="Get in touch with NaijaSporra. We'd love to hear from you!"
        />
      </Head>

      <div className="min-h-screen bg-gray-50 md:py-8 px-4 sm:px-6 lg:px-8 font-montserrat">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Section - Contact Info */}
            <div className="space-y-8">
              <Image
                src={contact1}
                alt="Contact Us"
                width={600}
                height={350}
                className="h-[33rem]"
                priority
              />

              <div className="space-y-6">
                <div>
                  <span className="text-lg sm:text-headline-medium font-medium text-neutral-10 mb-2">
                    Tel:{" "}
                  </span>
                  <span className="text-neutral-20 sm:text-headline-small font-regular">
                    +234 (0) 123 456 7890
                  </span>
                </div>

                <div>
                  <span className="text-lg sm:text-headline-medium font-medium text-neutral-10 mb-2">
                    Email:{" "}
                  </span>
                  <span className="text-neutral-20 sm:text-headline-small font-regular">
                    Hello@naijaSpora.com
                  </span>
                </div>

                <div>
                  <span className="text-lg sm:text-headline-medium font-medium text-neutral-10 mb-2">
                    Location:{" "}
                  </span>
                  <span className="text-neutral-20 sm:text-headline-small font-regular">
                    Lagos, Nigeria
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-regular sm:text-headline-medium text-neutral-20 text-gray-900 mb-4">
                    Find us on Social Media
                  </h3>
                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    {socialLinks.map((Item, idx) => (
                      <Link key={idx} href={Item.link}>
                        {<Item.icon />}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-white rounded-2xl md:p-8">
              <div className="text-center mb-8">
                <h1 className="sm:text-display-medium text-headline-medium font-medium text-black mb-2">
                  How can we help?
                </h1>
                <p className="text-black font-medium text-label-large">
                  Please, drop a message using the form below. We&apos;ll be in
                  touch!
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
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="Email"
                  className="focus:ring-2 focus:ring-neutral-90"
                />

                <TextareaField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="Your message here..."
                />

                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  className="!rounded-full"
                >
                  Submit
                </Button>

                <div className="text-label-large text-neutral-10 mt-1 mb-2">
                  <p>Please correct errors before submitting this form.</p>
                  <p className="mb-3">
                    If you are a human seeing this field, please leave it empty
                  </p>
                  <TextareaField
                    label="Captcha"
                    labelClassName="sr-only"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
