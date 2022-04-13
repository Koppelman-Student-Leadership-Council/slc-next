export default function sidedAbout({ content, isQuote }) {
    return (<>   <div className="container">
        <div className="row min-h-[200px] m-auto self-center rounded-10 pb-3">
            <div className="justify-content-center align-self-center">
                {isQuote && <>
                    <div className="content justify-content" align="center"> 
                        <i>{content}</i>
                    </div>
                </>}
                {!isQuote && <div className="p-2" >{content}</div>}
            </div>
        </div>
    </div></>);
}