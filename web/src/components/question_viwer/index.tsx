import api from '../../services/api';
import '../events/question/question.css'

interface propsQuestion {
    id: number | undefined;
    user: { name: string, id: number } | undefined;
    question: string | undefined;
    resolved: boolean | undefined;
    creatAt: Date | undefined;
    logado: number | undefined;
}

export function QuestionViwer(props: propsQuestion) {

    async function handleSolved(){
        const id = props.id
        api.patch(`/questions/solved/${id}`, {
        }).then(response => {
          alert('Avaliado com sucesso')
        }).catch(response => {
          alert('Erro ao cadastrar Avaliação')
        })

    }

    return (
        <div className="background">
            {props.logado == props.user?.id ? <button onClick={handleSolved}>Resolvido</button> : null}
            {props.resolved ? <h2>resolvido</h2> : null}
            <div id='container_question_viwer ' className="infield">
                
                <p>Feito por: <span>{props.user?.name}</span></p>
                <div id='infield_question_viewer' className='question'>
                    <p>{props.question}</p>
                </div>
                <small>{props.creatAt?.toString()}</small>
            </div>

        </div>
    )
}
export default QuestionViwer