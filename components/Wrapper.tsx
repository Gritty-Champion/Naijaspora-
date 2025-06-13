import React from 'react'

const Wrapper = ({children}:{children: React.ReactNode}) => {
  return <div className="container mx-auto px-[100px]">{children}</div>;
}

export default Wrapper