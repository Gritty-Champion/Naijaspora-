import { useState, useEffect } from "react";
import Link from "next/link";
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/Button";
import InputField from "@/components/contact_us/Input"; // Use your universal InputField
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { path } from "@/routes";
import { resendVerificationEmail } from "@/services/auth.services";
import { useMutation } from "@tanstack/react-query";

const LoginPage = () => {
  const router = useRouter();
  const { user, setUser, loginMutation, authError, setAuthError } = useAuth();
  const userLoginDetails = user.login;
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);

  const resendMutation = useMutation({
    mutationFn: (email: string) => resendVerificationEmail(email),
    onSuccess: () => {
      setResendSuccess(true);
    },
  });

  // Check for password reset success in query params
  useEffect(() => {
    if (router.query.reset === "success") {
      setPasswordResetSuccess(true);
      // Clear the query param
      router.replace(path.login, undefined, { shallow: true });
    }
  }, [router.query.reset, router]);

  const isEmailNotVerified = authError?.includes("verify your email");

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!userLoginDetails.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(userLoginDetails.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!userLoginDetails.password) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  };

  const handleLoginFormLogic = () => {

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    loginMutation.mutate(
      {
        email: user.login.email ?? "",
        password: user.login.password ?? "",
      },
      {
        onSuccess: (data) => {
          // Only navigate if login was successful
          if (!data.error) {
            const nextUrl = (router.query.next as string) || path.activeServices;
            router.push(nextUrl);
          }
        },
      },
    );

  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      login: {
        ...prev.login,
        [name]: value,
      },
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    // Clear auth error when user starts typing
    if (authError) {
      setAuthError(null);
    }

    // Clear resend success message
    if (resendSuccess) {
      setResendSuccess(false);
    }

    // Clear password reset success message
    if (passwordResetSuccess) {
      setPasswordResetSuccess(false);
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-headline-large font-medium text-black">Log In</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLoginFormLogic();
          }}
          className="flex flex-col gap-5"
        >
          <InputField
            variant="auth"
            label="Email"
            name="email"
            type="email"
            value={userLoginDetails.email ?? ""}
            onChange={(e) => handleFormInputChange(e)}
            error={errors.email}
            labelClassName="text-headline-medium"
          />
          <InputField
            variant="auth"
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={userLoginDetails.password ?? ""}
            onChange={(e) => handleFormInputChange(e)}
            error={errors.password}
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

          <Link
            href={path.forgotPassword}
            className="text-right text-title-small font-medium text-primary-base hover:underline"
          >
            Forgot password?
          </Link>

          {passwordResetSuccess && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-700 text-sm">
                Password reset successful! You can now log in with your new password.
              </p>
            </div>
          )}

          {authError && (
            <div className="mt-2">
              <p className="text-error-base text-sm">
                {authError}
              </p>

              {isEmailNotVerified && !resendSuccess && (
                <Button
                  type="button"
                  variant="text"
                  className="text-primary-base mt-2"
                  onClick={() => resendMutation.mutate(userLoginDetails.email ?? "")}
                  disabled={resendMutation.isPending || !userLoginDetails.email}
                  loading={resendMutation.isPending}
                >
                  Resend verification email
                </Button>
              )}

              {resendSuccess && (
                <p className="text-green-600 text-sm mt-2">
                  Verification email sent! Please check your inbox.
                </p>
              )}

              {resendMutation.isError && (
                <p className="text-error-base text-sm mt-2">
                  {resendMutation.error?.message || "Failed to resend email. Please try again."}
                </p>
              )}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full justify-center mt-4"
            loading={loginMutation.isPending}
            disabled={loginMutation.isPending}
          >
            Log in
          </Button>

          
        </form>

        <p className="text-center text-body-large text-neutral-30">
          Don&rsquo;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-semibold text-primary-base hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
