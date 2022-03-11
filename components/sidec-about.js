export default function sidedAbout({ content, isQuote }) {
    return (<>   <div className="container">
        <div className="row shadow-big hover:shadow-medium transition-shadow duration-200 min-h-[200px] m-auto self-center">
            <div className="justify-content-center align-self-center">
                {isQuote && <>
                    <div className="content justify-content" align="center"> 
                        <i>{content}</i>
                    </div>
                </>}
                {!isQuote && <div className="p-auto" >{content}</div>}
            </div>
        </div>
    </div></>);
}