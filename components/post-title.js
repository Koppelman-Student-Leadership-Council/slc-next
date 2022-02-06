

import Breadcrumbs from "./Breadcrumb"

export default function PostTitle({ children, breadcrumb }) {
  return (
    <>
      <div className="" >
        <br />
        {breadcrumb && <Breadcrumbs />}
        <br />
        <h1 className="link link--metis closer-top text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 ml-2">
          {children}
        </h1>
       
      </div>
    </>
  )
}

// class: max-w-2xl mx-auto center
