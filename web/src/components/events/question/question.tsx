import { createElement, useState } from "react"
import './question.css'



export function handleQuestion() {

    const [question, setQuestion] = useState('')

    function handleSubmitQuestion (){
        setQuestion ('')
    }

    return (
        <div id="containerAreaTexto">
            <textarea id='AreaTexto' name="pergunta" value={question} placeholder="Faça sua pergunta aqui!" onChange={e => setQuestion(e.target.value)}/>
            <div className='botoes'>
               
                <select>
                    {/* Tentar deixar a primeira slecionada por padrão */}
                    <option value=''disabled>categorias</option>
                    <option value='portugues'>portugues</option>
                    <option value='matematica'>matematica</option>
                    <option value='geografia'>geografia</option>
                    <option value='historia'>historia</option>
                    <option value='fisica'>fisica</option>
                    <option value='quimica'>quimica</option>
                    <option value='filosofia'>filosofia</option>
                    <option value='sociologia'>sociologia</option>
                </select>

                
                <button id='enviar' type='submit' onClick={handleSubmitQuestion}>Enviar</button>
            </div>
        </div>
    )
}

export default handleQuestion
