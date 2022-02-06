export default function sidedAbout({ content, isQuote }) {
    return (<>   <div class="container">
        <div class="row shadow-big hover:shadow-medium transition-shadow duration-200 height-250 ">
            <div class="justify-content-center align-self-center">
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