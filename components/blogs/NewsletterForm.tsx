import React, { useState } from 'react';
import InputField from '@/components/contact_us/Input';
import Button from '@/components/Button';

const NewsletterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, lastName, email });
    
  };

  return (
    <div className="bg-[#000A85] py-16 sm:rounded-2xl max-w-7xl">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left section: Heading and subheading */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-display-medium font-semibold text-white mb-4">
              Join the <span className="text-light-purple">NaijaSpora</span> Community
            </h2>
            <p className="text-headline-small font-regular text-white">
              Stay in the loop. We&apos;ll send you migration updates, embassy changes, funding options, and community alerts — no spam, just the essentials.
            </p>
          </div>
          {/* Right section: Form */}
          <div className="md:w-1/2">
            <div className="bg-[#0014C3] rounded-lg shadow-md p-6 sm:p-12">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <InputField
                  label="Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  labelClassName='text-white'
                  className='rounded-none'
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  labelClassName='text-white'
                  className='rounded-none'
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  labelClassName='text-white'
                  className='rounded-none'
                />
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  className="w-full !py-6"
                >
                  Subscribe to Newsletter
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;