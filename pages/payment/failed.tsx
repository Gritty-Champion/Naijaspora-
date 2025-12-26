import { useRouter } from "next/router";
import Link from "next/link";
import type { NextPage } from "next";
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/Button";
import { path } from "@/routes";

const PaymentFailedPage: NextPage = () => {
  const router = useRouter();
  const { reference, reason } = router.query;

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <div className="text-center">
          {/* Error Icon */}
          <div className="mx-auto w-16 h-16 bg-error-container rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-error-base"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <h1 className="text-headline-large font-medium text-black">
            Payment Failed
          </h1>
          <p className="text-body-large text-neutral-30 mt-2">
            Your payment could not be processed
          </p>
        </div>

        {/* Error Message */}
        {reason && (
          <div className="bg-error-container border border-error-70 rounded-lg p-6">
            <h2 className="text-headline-small font-medium text-error-base mb-2">
              Reason:
            </h2>
            <p className="text-error-base text-body-medium capitalize">
              {(reason as string).replace(/_/g, " ")}
            </p>
          </div>
        )}

        {reference && (
          <div className="bg-neutral-95 border border-neutral-80 rounded-lg p-4">
            <p className="text-body-small text-neutral-30 mb-1">
              Transaction Reference:
            </p>
            <p className="text-body-large font-mono font-semibold text-black">
              {reference}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            type="button"
            variant="primary"
            className="w-full justify-center"
            // onClick={() => router.back()}
          >
            Try Again
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="w-full justify-center"
            onClick={() => router.push(path.home)}
          >
            Return to Home
          </Button>
        </div>

        <p className="text-center text-body-medium text-neutral-30">
          Need help?{" "}
          <Link
            href="mailto:support@naijaspora.com"
            className="font-semibold text-primary-base hover:underline"
          >
            Contact Support
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default PaymentFailedPage;
