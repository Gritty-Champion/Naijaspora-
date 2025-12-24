import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/Button";
import { path } from "@/routes";
import { verifyPayment } from "@/services/payment.services";

const PaymentSuccessPage: NextPage = () => {
  const router = useRouter();
  const { reference, status } = router.query;

  // Fetch payment details using the reference
  const {
    data: paymentData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["payment-verification", reference],
    queryFn: () => verifyPayment(reference as string),
    enabled: !!reference,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  // Check if payment verification returned an error
  const hasError = isError || paymentData?.error;
  const errorMessage = paymentData?.message || (error as Error)?.message || "Payment verification failed";

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        {/* Loading State */}
        {isLoading && (
          <div className="text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary-base border-r-transparent mb-4"></div>
            <h1 className="text-headline-large font-medium text-black">
              Verifying Payment...
            </h1>
            <p className="text-body-large text-neutral-30 mt-2">
              Please wait while we confirm your payment
            </p>
          </div>
        )}

        {/* Success State */}
        {!isLoading && !hasError && paymentData && (
          <>
            <div className="text-center">
              {/* Success Icon */}
              <div className="mx-auto w-16 h-16 bg-success-container rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-success-base"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h1 className="text-headline-large font-medium text-black">
                Payment Successful!
              </h1>
              <p className="text-body-large text-neutral-30 mt-2">
                Your payment has been confirmed and your service request has been submitted.
              </p>
            </div>

            {/* Payment Details */}
            {paymentData.payment && (
              <div className="bg-success-container border border-success-70 rounded-lg p-6">
                <h2 className="text-headline-small font-medium text-black mb-4">
                  Payment Details
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-body-medium">
                    <span className="text-neutral-30">Reference:</span>
                    <span className="font-semibold text-black">
                      {paymentData.payment.reference || paymentData.payment._id || reference}
                    </span>
                  </div>
                  <div className="flex justify-between text-body-medium">
                    <span className="text-neutral-30">Status:</span>
                    <span className="font-semibold text-success-base capitalize">
                      {paymentData.payment.status || paymentData.status}
                    </span>
                  </div>
                  {paymentData.payment.amount && (
                    <div className="flex justify-between text-body-medium">
                      <span className="text-neutral-30">Amount:</span>
                      <span className="font-semibold text-black">
                        {paymentData.payment.currency || "NGN"} {(paymentData.payment.amount / 100).toLocaleString()}
                      </span>
                    </div>
                  )}
                  {paymentData.payment.serviceType && (
                    <div className="flex justify-between text-body-medium">
                      <span className="text-neutral-30">Service:</span>
                      <span className="font-semibold text-black capitalize">
                        {paymentData.payment.serviceType.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </div>
                  )}
                  {(paymentData.payment.paidAt || paymentData.payment.updatedAt) && (
                    <div className="flex justify-between text-body-medium">
                      <span className="text-neutral-30">Paid At:</span>
                      <span className="font-semibold text-black">
                        {new Date((paymentData.payment.paidAt || paymentData.payment.updatedAt) as string).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* What's Next */}
            <div className="bg-secondary-container border border-secondary-70 rounded-lg p-6">
              <h2 className="text-headline-small font-medium text-black mb-2">
                What&rsquo;s next?
              </h2>
              <ol className="list-decimal list-inside text-body-medium text-neutral-30 space-y-2">
                <li>Our team will review your service request</li>
                <li>You&rsquo;ll receive a confirmation email shortly</li>
                <li>We&rsquo;ll contact you within 24-48 hours</li>
                <li>Check your dashboard for updates on your request</li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                type="button"
                variant="primary"
                className="w-full justify-center"
                onClick={() => router.push(path.dashboard)}
              >
                Go to Dashboard
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
          </>
        )}

        {/* Error State */}
        {!isLoading && hasError && (
          <>
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
                Payment Verification Failed
              </h1>
              <p className="text-body-large text-neutral-30 mt-2">
                We couldn&rsquo;t verify your payment
              </p>
            </div>

            {/* Error Message */}
            <div className="bg-error-container border border-error-70 rounded-lg p-6">
              <p className="text-error-base text-body-medium">
                {errorMessage}
              </p>
            </div>

            {/* What to Do */}
            <div className="bg-secondary-container border border-secondary-70 rounded-lg p-6">
              <h2 className="text-headline-small font-medium text-black mb-2">
                What should I do?
              </h2>
              <ul className="list-disc list-inside text-body-medium text-neutral-30 space-y-2">
                <li>Check if you were charged and have a payment receipt</li>
                <li>If charged, contact our support team with your payment reference</li>
                <li>If not charged, you can try submitting your request again</li>
                <li>Email us at support@naijaspora.com with your reference number</li>
              </ul>
            </div>

            {reference && (
              <div className="bg-neutral-95 border border-neutral-80 rounded-lg p-4">
                <p className="text-body-small text-neutral-30 mb-1">
                  Payment Reference (save this):
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
                onClick={() => router.push(path.services)}
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
          </>
        )}
      </div>
    </AuthLayout>
  );
};

export default PaymentSuccessPage;
