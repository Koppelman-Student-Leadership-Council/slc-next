import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

var convertBreadcrumb = string => {
    return string
        .replace(/-/g, ' ')
        .replace(/oe/g, 'ö')
        .replace(/ae/g, 'ä')
        .replace(/ue/g, 'ü')

};


const Breadcrumbs = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState(null);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            var pathArray = linkPath.map((path, i) => {
                return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
            });

            pathArray.splice(-1);

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }

    return (
        <nav aria-label="breadcrumbs">
            <ol className="breadcrumb bg-white">
                <li className="text-xl font-bold text-decoration-none ">
                    <Link href="/"  ><a className="text-decoration-none text-secondary dark-text-hover">Home</a></Link>
                </li>
                {breadcrumbs.map((breadcrumb, i) => {
                    return (
                        <>

                            <p className="text-xl font-bold text-decoration-none text-secondary ">&nbsp;/&nbsp;</p>
                            <li key={breadcrumb.href} className="text-xl font-bold text-decoration-none " >
                                <Link href={breadcrumb.href}>
                                    <a className="text-decoration-none text-secondary dark-text-hover" >
                                        {capitalizeFirstLetter(convertBreadcrumb(breadcrumb.breadcrumb))}
                                    </a>
                                </Link>
                            </li>
                        </>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// <div className="flex items-center">
{/* <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
<div className="text-xl font-bold">{name}</div>
</div> */}