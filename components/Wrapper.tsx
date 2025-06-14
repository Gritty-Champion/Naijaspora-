import React from 'react'

const Wrapper = ({children}:{children: React.ReactNode}) => {
  return <div className="container mx-auto px-[10px] flex items-center justify-center md:px-[20px] xl:px-[100px]">{children}</div>;
}

export default Wrapper