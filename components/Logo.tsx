import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {

  return (
    <Link href="/" className='flex flex-col items-start gap-2.5 lg:p-2.5'>
      <Image 
        src="/logo.svg"
        alt="NaijaSpora Logo"
        width={200}
        height={60}
        priority
      />
    </Link>
  );
};

export default Logo;