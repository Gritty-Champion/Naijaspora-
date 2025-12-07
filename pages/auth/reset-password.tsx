import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/Button";
import InputField from "@/components/contact_us/Input";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import { useAuth } from "@/hooks/useAuth";
import { path } from "@/routes";

const ResetPasswordPage = () => {
  const router = useRouter();
  const { resetPasswordMutation, authError, setAuthError } = useAuth();
  const [token, setToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    // Get token from URL query parameter
    if (router.isReady) {
      const tokenFromQuery = router.query.token as string;
      if (!tokenFromQuery) {
        setErrors({ token: "Invalid reset link. Please request a new password reset." });
      } else {
        setToken(tokenFromQuery);
      }
    }
  }, [router.isReady, router.query.token]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Password validation matching backend requirements
    if (!formData.newPassword) {
      newErrors.newPassword = "Password is required.";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters.";
    } else if (!/(?=.*[a-z])/.test(formData.newPassword)) {
      newErrors.newPassword = "Password must contain at least one lowercase letter.";
    } else if (!/(?=.*[A-Z])/.test(formData.newPassword)) {
      newErrors.newPassword = "Password must contain at least one uppercase letter.";
    } else if (!/(?=.*\d)/.test(formData.newPassword)) {
      newErrors.newPassword = "Password must contain at least one number.";
    } else if (!/(?=.*[@$!%*?&])/.test(formData.newPassword)) {
      newErrors.newPassword = "Password must contain at least one special character (@$!%*?&).";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    if (!token) {
      setErrors({ token: "Invalid reset link. Please request a new password reset." });
      return;
    }

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    resetPasswordMutation.mutate(
      { token, newPassword: formData.newPassword },
      {
        onSuccess: (data) => {
          if (!data.error) {
            // Redirect to login page on success
            router.push({
              pathname: path.login,
              query: { reset: "success" },
            });
          }
        },
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Clear auth error when user starts typing
    if (authError) {
      setAuthError(null);
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-headline-large font-medium text-black">Reset Password</h1>
          <p className="text-body-large text-neutral-30 mt-2">
            Enter your new password below.
          </p>
        </div>

        {errors.token ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-error-base text-sm">{errors.token}</p>
            <Link
              href={path.forgotPassword}
              className="text-primary-base hover:underline text-sm mt-2 inline-block"
            >
              Request a new reset link
            </Link>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="flex flex-col gap-5"
          >
            <InputField
              variant="auth"
              label="New Password"
              name="newPassword"
              type={showPassword ? "text" : "password"}
              value={formData.newPassword}
              onChange={handleChange}
              error={errors.newPassword}
              labelClassName="text-headline-medium"
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-black"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              }
            />

            <InputField
              variant="auth"
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              labelClassName="text-headline-medium"
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-black"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              }
            />

            {authError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-error-base text-sm">{authError}</p>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full justify-center mt-4"
              loading={resetPasswordMutation.isPending}
              disabled={resetPasswordMutation.isPending}
            >
              Reset Password
            </Button>
          </form>
        )}

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

export default ResetPasswordPage;
