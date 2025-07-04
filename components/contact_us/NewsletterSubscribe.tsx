import { useState, FormEvent } from "react";

const NewsletterSubscribe: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle your subscription logic here (e.g., API call)
    console.log("Submitted email:", email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <div className="w-full text-center p-4">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 mb-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl text-primary-base mb-1">
            Keen to know the latest Updates?
          </h2>
          <p>Keep up to date with NaijaSpora news via email</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex items-center bg-[#F3F0F4] rounded-full h-12 shadow-md"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="flex-grow bg-transparent text-gray-700 placeholder-gray-500 text-base py-2 pl-4 border-none outline-none rounded-full"
          />
          <button
            type="submit"
            className="bg-primary-base text-white font-semibold py-2 px-6 rounded-full cursor-pointer transition-colors duration-300 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 h-12"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="text-[14px]">
        <p className="text-xs text-gray-500">
          We promise not to bombard you, we&apos;ll never pass on your email to a
          third party, and you can obviously unsubscribe at any time. Read more
          on our
          <a href="/privacy-policy" className="underline hover:text-gray-700">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
