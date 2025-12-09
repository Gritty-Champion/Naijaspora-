import { useRouter } from "next/router";
import { verifyEmailToken } from "@/services/auth.services";
import { useEffect, useState } from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/Button";
import { path } from "@/routes";

const VerifyEmailPage = () => {
  const router = useRouter();
  const { token } = router.query;
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!router.isReady || !token) return;

    verifyEmailToken(token as string)
      .then((res) => {
        setStatus("success");
        setMessage(res.message || "Email verified successfully!");
        // Auto-redirect to login after 2 seconds
        setTimeout(() => {
          router.push(path.login);
        }, 2000);
      })
      .catch(() => {
        setStatus("error");
        setMessage("Verification failed or expired.");
      });
  }, [token, router]);

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6 text-black mt-6">
        {status === "loading" && <p>Verifying your email... Check your Inbox</p>}
        {status === "success" && (
          <>
            <h1>Email Verified</h1>
            <p>{message}</p>
            <p className="text-sm text-neutral-50">Redirecting to login page...</p>
            <Button variant="primary" onClick={() => router.push(path.login)}>
              Go to Login Now
            </Button>
          </>
        )}
        {status === "error" && <p className="text-error-base">{message}</p>}
      </div>
    </AuthLayout>
  );
};

export default VerifyEmailPage;
