import "./question.css"
function Question() {


    return (
        <div className="background">
            <div className="infield">
                <div className="header_question">
                    {/* user */}
                    <p>Cicrano</p>
                    {/* tag pergunta */}
                    <span id='tag'>Matemática</span>
                </div>
                <div className="question">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos omnis temporibus ipsm, perferendis, excepturi at ducimus error vitae quae expedita tempore, recusandae veniam assumenda quo quibusdam ab consequatur a.</p>
                </div>
                <div className="footer_question">
                    <p>Ver mais...</p>
                    <button type="submit" id='responder'>Responder</button>
                </div>
                
            </div>
        </div>
    )
}

export default Question