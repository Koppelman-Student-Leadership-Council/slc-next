

import Breadcrumbs from "./Breadcrumb"

export default function PostTitle({ children, breadcrumb }) {
  return (
    <>
      <div className="">
        <br />
        {breadcrumb && <Breadcrumbs/>}
        <br />
        <h1 className="
        -mt-[20px] link link--metis text-center font-bold tracking-tighter leading-tight text-4xl
        mm:text-5xl
        5h:text-6xl
        md:text-7xl 
        lg:text-8xl lg:mb-3 lg:w-auto
        ">
          {children}
        </h1>
      </div>
    </>
  )
}

// class: max-w-2xl mx-auto center
