import { useState, FormEvent } from "react";
import Button from "@/components/Button";
import InputField from "@/components/contact_us/Input";

const NewsletterSubscribe: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Optional basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError(undefined);
    console.log("Submitted email:", email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <div className="w-full text-center p-4 font-montserrat">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 mb-4">
        <div className="text-center font-regular text-title-large">
          <h2 className="text-title-large text-primary-base mb-1">
            Keen to know the latest Updates?
          </h2>
          <p className="text-body-medium text-black">
            Keep up to date with NaijaSpora news via email
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="sm:w-full max-w-md flex items-center bg-neutral-95 rounded-full h-12 pl-2"
        >
          <div className="flex-grow">
            <InputField
              label=""
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              error={error}
              className="!bg-transparent"
            />
          </div>

          <div className="ml-2">
            <Button type="submit" size="sm" variant="primary" className="!h-12 !rounded-full">
              Subscribe
            </Button>
          </div>
        </form>
      </div>

      <div className="text-label-medium text-black">
        <p>
          We promise not to bombard you, we&apos;ll never pass on your email to a
          third party, and you can obviously unsubscribe at any time. Read more
          on our&nbsp;
          <a href="/privacy-policy" className="underline text-primary-base">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
