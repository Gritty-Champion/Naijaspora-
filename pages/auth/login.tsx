import { FormEvent, useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/Button";
import InputField from "@/components/contact_us/Input"; // Use your universal InputField
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { path } from "@/routes";

const LoginPage = () => {
  const router = useRouter();
  const { user, setUser, loginMutation } = useAuth();
  const userLoginDetails = user.login;
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!userLoginDetails.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(userLoginDetails.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!userLoginDetails.password) {
      newErrors.password = "Password is required.";
    } else if (userLoginDetails.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
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
        onSuccess: () => {
          const nextUrl = (router.query.next as string) || path.activeServices;
          console.log(cookieStore)
          router.push(nextUrl);
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
            href="/forgot-password"
            className="text-right text-title-small font-medium text-primary-base hover:underline"
          >
            Forgot password?
          </Link>

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
