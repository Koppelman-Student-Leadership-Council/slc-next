import React from "react";


export default function LayoutOne(props){
    return(
        <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Koppelman Student Leadership Council</title>
        </Head>
        {props.children}
        </>
    )
}