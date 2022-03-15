

import Breadcrumbs from "./Breadcrumb"

export default function PostTitle({ children, breadcrumb }) {
  return (
    <>
      <div className="" >
        <br />
        {breadcrumb && <Breadcrumbs />}
        <br />
        <h1 className="-mt-[20px] link link--metis text-center text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-12 ml-2">
          {children}
        </h1>
       
      </div>
    </>
  )
}

// class: max-w-2xl mx-auto center
