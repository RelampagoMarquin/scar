import { createElement, useState } from "react"


export function handleQuestion() {

    const [question, setQuestion] = useState('')

    function handleSubmitQuestion (){
        setQuestion ('')
        console.log(question)
    }

    return (
        <div className="containerPergunta">
            <textarea className='pergunta' name="pergunta" value={question} placeholder="Faça sua pergunta aqui!" onChange={e => setQuestion(e.target.value)}/>
            <div className='botoes'>
                {/* <button id='categorias'>Categorias</button> */}
                <button id='enviar' type='submit' onClick={handleSubmitQuestion}>Enviar</button>
            </div>
        </div>
    )
}

export default handleQuestion
