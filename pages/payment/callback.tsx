import { useRouter } from "next/router";
import { useEffect } from "react";
import type { NextPage } from "next";

const PaymentCallbackPage: NextPage = () => {
  const router = useRouter();
  const { reference, trxref } = router.query;

  useEffect(() => {
    // Wait for router to be ready and have the reference
    if (!router.isReady) return;

    const paymentReference = (reference || trxref) as string;

    if (!paymentReference) {
      // No reference found, redirect to failed page
      router.replace('/payment/failed?reason=missing_reference');
      return;
    }

    // Redirect to success page with reference
    // The success page will handle verification
    router.replace(`/payment/success?reference=${paymentReference}`);
  }, [router.isReady, reference, trxref, router]);

  // Show loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-95">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary-base border-r-transparent mb-4"></div>
        <p className="text-body-large text-neutral-30">Processing payment...</p>
      </div>
    </div>
  );
};

export default PaymentCallbackPage;
