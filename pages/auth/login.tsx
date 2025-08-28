// app/login/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/Button";
import InputField from "@/components/contact_us/Input"; // Use your universal InputField
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string, password?: string }>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: { email?: string, password?: string } = {};
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Submitted:", formData);
      // Handle login API call here
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-headline-large font-medium text-black">Log In</h1>
        
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
          <InputField
            variant="auth"
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            labelClassName="text-headline-medium"
            rightIcon={
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="text-black"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <RiEyeOffLine/> : <RiEyeLine />}
              </button>
            }
          />

          <Link href="/forgot-password" className="text-right text-title-small font-medium text-primary-base hover:underline">
            Forgot password?
          </Link>

          <Button type="submit" variant="primary" className="w-full justify-center mt-4">
            Log in
          </Button>
        </form>

        <p className="text-center text-body-large text-neutral-30">
          Don&rsquo;t have an account?{' '}
          <Link href="/auth/signup" className="font-semibold text-primary-base hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;