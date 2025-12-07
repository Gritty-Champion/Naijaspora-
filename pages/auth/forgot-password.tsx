import { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/Button";
import InputField from "@/components/contact_us/Input";
import { useAuth } from "@/hooks/useAuth";
import { path } from "@/routes";

const ForgotPasswordPage = () => {
  const { requestPasswordResetMutation, authError, setAuthError } = useAuth();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ email?: string }>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: { email?: string } = {};

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    requestPasswordResetMutation.mutate(email, {
      onSuccess: () => {
        setSuccess(true);
        setEmail(""); // Clear the email field
      },
    });
  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);

    setErrors({});

    // Clear auth error and success message when user starts typing
    if (authError) {
      setAuthError(null);
    }
    if (success) {
      setSuccess(false);
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-headline-large font-medium text-black">Forgot Password</h1>
          <p className="text-body-large text-neutral-30 mt-2">
            Enter your email address and we&rsquo;ll send you instructions to reset your password.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col gap-5"
        >
          <InputField
            variant="auth"
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleFormInputChange}
            error={errors.email}
            labelClassName="text-headline-medium"
          />

          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-700 text-sm">
                If an account exists with this email, a password reset link has been sent.
                Please check your inbox and follow the instructions.
              </p>
            </div>
          )}

          {authError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-error-base text-sm">{authError}</p>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full justify-center mt-4"
            loading={requestPasswordResetMutation.isPending}
            disabled={requestPasswordResetMutation.isPending}
          >
            Send Reset Link
          </Button>
        </form>

        <p className="text-center text-body-large text-neutral-30">
          Remember your password?{" "}
          <Link
            href={path.login}
            className="font-semibold text-primary-base hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
