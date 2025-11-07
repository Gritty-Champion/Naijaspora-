import { useRouter } from "next/router";
import { verifyEmailToken } from "@/services/auth.services";
import { useEffect, useState } from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/Button";

const VerifyEmailPage = () => {
  const router = useRouter();
  const { token } = router.query;
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) return;
    verifyEmailToken(token as string)
      .then((res) => {
        setStatus("success");
        setMessage(res.message);
      })
      .catch(() => {
        setStatus("error");
        setMessage("Verification failed or expired.");
      });
  }, [token]);

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6 text-black mt-6">
        {status === "loading" && <p>Verifying your email... Check your Inbox</p>}
        {status === "success" && (
          <>
            <h1>Email Verified</h1>
            <p>{message}</p>
            <Button variant="primary" onClick={() => router.push("/auth/login")}>
              Go to Login
            </Button>
          </>
        )}
        {status === "error" && <p className="text-red-500">{message}</p>}
      </div>
    </AuthLayout>
  );
};

export default VerifyEmailPage;
