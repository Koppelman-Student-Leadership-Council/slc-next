

import Breadcrumbs from "./Breadcrumb"

export default function PostTitle({ children, breadcrumb }) {
  return (
    <>
      <div className="" >
        <br />
        {breadcrumb && <Breadcrumbs />}
        <br />
        <h1 className="closer-top text-center text-4xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 -mx-15">
          {children}
        </h1>
       
      </div>
    </>
  )
}

// class: max-w-2xl mx-auto center
