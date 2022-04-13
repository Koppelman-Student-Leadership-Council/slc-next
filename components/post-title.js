

import Breadcrumbs from "./Breadcrumb"

export default function PostTitle({ children, breadcrumb }) {
  return (
    <>
      <div className="" >
        <br />
        {breadcrumb && <Breadcrumbs/>}
        <br />
        <h1 className="
        -mt-[20px] link link--metis text-center font-bold tracking-tighter leading-tight ml-2 text-4xl
        mm:text-5xl
        ml:text-6xl
        md:text-7xl 
        lg:text-8xl lg:mb-3
        ">
          {children}
        </h1>
      </div>
    </>
  )
}

// class: max-w-2xl mx-auto center
