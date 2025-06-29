import React from 'react'

const Wrapper = ({children}:{children: React.ReactNode}) => {
  return <div className="container mx-auto px-[20px] h-full flex items-center justify-center">{children}</div>;
}

export default Wrapper