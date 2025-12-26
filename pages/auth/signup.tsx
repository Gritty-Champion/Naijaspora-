import { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/Button";
import InputField from "@/components/contact_us/Input";
import { useAuth } from "@/hooks/useAuth";

const SignUpPage = () => {
  const { registerMutation, authError, setAuthError } = useAuth();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    terms: false,
    marketing: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));

    // Clear auth error when user starts typing
    if (authError) {
      setAuthError(null);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // First name validation (2-34 characters)
    if (!formData.first_name) {
      newErrors.first_name = "First name is required.";
    } else if (formData.first_name.length < 2 || formData.first_name.length > 34) {
      newErrors.first_name = "First name must be between 2 and 34 characters.";
    }

    // Last name validation (2-34 characters)
    if (!formData.last_name) {
      newErrors.last_name = "Last name is required.";
    } else if (formData.last_name.length < 2 || formData.last_name.length > 34) {
      newErrors.last_name = "Last name must be between 2 and 34 characters.";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    // Password validation matching backend requirements
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    } else if (!/(?=.*[a-z])/.test(formData.password)) {
      newErrors.password = "Password must contain at least one lowercase letter.";
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password = "Password must contain at least one uppercase letter.";
    } else if (!/(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Password must contain at least one number.";
    } else if (!/(?=.*[@$!%*?&])/.test(formData.password)) {
      newErrors.password = "Password must contain at least one special character (@$!%*?&).";
    }

    if (!formData.terms)
      newErrors.terms = "You must agree to the Terms and Privacy Policy.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) return setErrors(newErrors);

    registerMutation.mutate({
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-headline-large font-medium text-black">
          Create your account
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid md:grid-cols-2 gap-5">
            <InputField
              variant="auth"
              label="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              error={errors.first_name}
            />
            <InputField
              variant="auth"
              label="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              error={errors.last_name}
            />
          </div>

          <InputField
            variant="auth"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <InputField
            variant="auth"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="h-5 w-5 md:h-6 md:w-6 accent-primary-base mt-1"
              />
              <label
                htmlFor="terms"
                className="text-sm md:text-headline-medium font-medium text-black"
              >
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-primary-base hover:underline font-semibold"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-primary-base hover:underline font-semibold"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.terms && (
              <span className="mt-1 text-[11px] text-[#ef4444]">
                {errors.terms}
              </span>
            )}
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="marketing"
              name="marketing"
              checked={formData.marketing}
              onChange={handleChange}
              className="h-5 w-5 md:h-6 md:w-6 accent-primary-base mt-1"
            />
            <label
              htmlFor="marketing"
              className="text-sm md:text-headline-medium font-medium text-black"
            >
              I’d like to receive marketing updates from NaijaSpora
            </label>
          </div>
          {authError && (
            <p className="text-error-base text-sm mt-2">
              {authError}
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full justify-center"
            disabled={registerMutation.isPending}
          >
            {registerMutation.isPending ? "Registering..." : "Continue"}
          </Button>

          
        </form>

        <p className="text-center text-body-large md:text-headline-medium text-black">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-primary-base hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
