"use client";

import { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/Button";
import InputField from "@/components/contact_us/Input";

const SignUpPage = () => {
  const [formData, setFormData] = useState({ email: '', terms: false, marketing: false });
  const [errors, setErrors] = useState<{ email?: string, terms?: string }>({});
  const [collectInfo, setCollectInfo] = useState<boolean>(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: { email?: string, terms?: string } = {};
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.terms) newErrors.terms = "You must agree to the Terms of Service and Privacy Policy.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Submitted:", formData);
      // Handle sign up API call here
    }
  };

  return (
    <AuthLayout collectInfo={collectInfo} setCollectInfo={setCollectInfo}>
      <div className="flex flex-col gap-6">
        <h1 className="text-headline-large font-medium text-black">Sign Up</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <InputField
            variant="auth"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            labelClassName="text-headline-medium"
          />

          <div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="h-5 w-5 md:h-10 md:w-10 accent-primary-base"
              />
              <label htmlFor="terms" className="md:text-headline-medium font-medium text-black">
                By signing up you agree to the <Link href="/terms" className="font-semibold text-primary-base hover:underline">Terms of Service</Link> and <Link href="/privacy" className="font-semibold text-primary-base hover:underline">Privacy Policy</Link>
              </label>
            </div>
            {errors.terms && <span className="mt-1 text-[11px] text-[#ef4444]">{errors.terms}</span>}
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="marketing"
              name="marketing"
              checked={formData.marketing}
              onChange={handleChange}
              className="h-5 w-5 md:h-10 md:w-10  accent-primary-base"
            />
            <label htmlFor="marketing" className="md:text-headline-medium font-medium text-black">
              I would like to receive marketing updates from NaijaSpora
            </label>
          </div>

          <Button onClick={() => {setCollectInfo(true)}} type="submit" variant="primary" className="w-full justify-center ">
            Continue
          </Button>
        </form>

        <p className="text-center text-body-large md:text-headline-medium text-black font-regular">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-primary-base hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
