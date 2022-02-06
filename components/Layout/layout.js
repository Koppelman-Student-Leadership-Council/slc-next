import React from "react";


export default function LayoutOne(props){
    return(
        <>
        <Head>
            <title>Koppelman Student Leadership Council</title>
        </Head>
        {props.children}
        </>
    )
}