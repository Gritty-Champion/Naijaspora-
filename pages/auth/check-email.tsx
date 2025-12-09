import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/Button";
import { path } from "@/routes";
import { resendVerificationEmail } from "@/services/auth.services";
import { useMutation } from "@tanstack/react-query";

const CheckEmailPage = () => {
  const router = useRouter();
  const { email } = router.query;
  const [resendSuccess, setResendSuccess] = useState(false);

  const resendMutation = useMutation({
    mutationFn: (email: string) => resendVerificationEmail(email),
    onSuccess: () => {
      setResendSuccess(true);
    },
  });

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-headline-large font-medium text-black">Check Your Email</h1>
          <p className="text-body-large text-neutral-30 mt-2">
            We&rsquo;ve sent a verification link to{" "}
            {email && <span className="font-semibold text-black">{email}</span>}
          </p>
        </div>

        <div className="bg-secondary-container border border-secondary-70 rounded-lg p-6">
          <h2 className="text-headline-small font-medium text-black mb-2">
            What&rsquo;s next?
          </h2>
          <ol className="list-decimal list-inside text-body-medium text-neutral-30 space-y-2">
            <li>Check your email inbox</li>
            <li>Click the verification link we sent you</li>
            <li>You&rsquo;ll be redirected to log in</li>
          </ol>
        </div>

        {resendSuccess && (
          <div className="bg-success-container border border-success-70 rounded-lg p-4">
            <p className="text-success-on_container text-sm">
              Verification email sent! Please check your inbox.
            </p>
          </div>
        )}

        {resendMutation.isError && (
          <div className="bg-error-container border border-error-70 rounded-lg p-4">
            <p className="text-error-base text-sm">
              {resendMutation.error?.message || "Failed to resend email. Please try again."}
            </p>
          </div>
        )}

        <div className="text-center">
          <p className="text-body-medium text-neutral-30 mb-4">
            Didn&rsquo;t receive the email?
          </p>
          <Button
            type="button"
            variant="primary"
            className="w-full justify-center"
            onClick={() => resendMutation.mutate(email as string)}
            disabled={resendMutation.isPending || !email || resendSuccess}
            loading={resendMutation.isPending}
          >
            Resend Verification Email
          </Button>
        </div>

        <p className="text-center text-body-large text-neutral-30">
          Already verified?{" "}
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

export default CheckEmailPage;
