import { useState } from "react";
import { useRouter } from "next/router";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardFooter from "@/components/dashboard/DashboardFooter";
import Button from "@/components/Button";
import InputField from "@/components/contact_us/Input";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import { useAuth } from "@/hooks/useAuth";
import { AuthGuard } from "@/components/AuthGuard";
import { path } from "@/routes";

const ChangePasswordPage = () => {
  const router = useRouter();
  const { changePasswordMutation, authError, setAuthError, userToken } = useAuth();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Current password validation
    if (!formData.currentPassword) {
      newErrors.currentPassword = "Current password is required.";
    }

    // New password validation matching backend requirements
    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required.";
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

    // Check if new password is same as current password
    if (formData.newPassword && formData.currentPassword === formData.newPassword) {
      newErrors.newPassword = "New password must be different from current password.";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password.";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    if (!userToken) {
      setErrors({ general: "You must be logged in to change your password." });
      return;
    }

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    changePasswordMutation.mutate(
      {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
        token: userToken,
      },
      {
        onSuccess: (data) => {
          if (!data.error) {
            setSuccess(true);
            // Clear form
            setFormData({
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            });
            // Optionally redirect after success
            setTimeout(() => {
              router.push("/dashboard");
            }, 3000);
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

    // Clear auth error and success message when user starts typing
    if (authError) {
      setAuthError(null);
    }
    if (success) {
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen font-montserrat">
      <DashboardHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-90 p-8">
          <div className="mb-8">
            <h1 className="text-headline-large font-medium text-black">Change Password</h1>
            <p className="text-body-large text-neutral-30 mt-2">
              Update your password to keep your account secure.
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
              label="Current Password"
              name="currentPassword"
              type={showCurrentPassword ? "text" : "password"}
              value={formData.currentPassword}
              onChange={handleChange}
              error={errors.currentPassword}
              labelClassName="text-headline-medium"
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="text-black"
                  aria-label={showCurrentPassword ? "Hide password" : "Show password"}
                >
                  {showCurrentPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              }
            />

            <InputField
              variant="auth"
              label="New Password"
              name="newPassword"
              type={showNewPassword ? "text" : "password"}
              value={formData.newPassword}
              onChange={handleChange}
              error={errors.newPassword}
              labelClassName="text-headline-medium"
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="text-black"
                  aria-label={showNewPassword ? "Hide password" : "Show password"}
                >
                  {showNewPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              }
            />

            <InputField
              variant="auth"
              label="Confirm New Password"
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

            {success && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 text-sm">
                  Password changed successfully! Redirecting to dashboard...
                </p>
              </div>
            )}

            {authError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-error-base text-sm">{authError}</p>
              </div>
            )}

            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-error-base text-sm">{errors.general}</p>
              </div>
            )}

            <div className="flex gap-4 mt-4">
              <Button
                type="button"
                variant="secondary"
                className="flex-1 justify-center"
                onClick={() => router.push("/dashboard")}
                disabled={changePasswordMutation.isPending}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="flex-1 justify-center"
                loading={changePasswordMutation.isPending}
                disabled={changePasswordMutation.isPending}
              >
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </main>

      <DashboardFooter />
    </div>
  );
};

export default AuthGuard(ChangePasswordPage);
