import { useParams } from 'react-router-dom';
import api from '../../services/api';
import '../events/question/question.css'
import AnswerField from '../Layout/answerField/answersField';
import './question_viwer.css'

interface propsQuestion {
    id: number | undefined;
    user: { name: string, id: number } | undefined;
    question: string | undefined;
    resolved: boolean | undefined;
    creatAt: Date | undefined;
    logado: number | undefined;
}

export function QuestionViwer(props: propsQuestion) {

    const { id } = useParams()
    const idt = Number(id)

    async function handleSolved() {
        const id = props.id
        api.patch(`/questions/solved/${id}`, {
        }).then(response => {
            alert('Avaliado com sucesso')
        }).catch(response => {
            alert('Erro ao cadastrar Avaliação')
        })

    }

    return (
        <div className="background question_viwer">

            <div id='container_question_viwer' className="infield">


                <p id='question_viwer_header'><span>Feito por: {props.user?.name}</span><span id='resolved'>
                    {props.logado == props.user?.id ? <button onClick={handleSolved}>Resolvido</button> : null}
                    
                </span></p>
                <div id='infield_question_viewer' className='question'>
                    <p>{props.resolved ? <p>Resolvido -</p> : null}{props.question}</p>
                </div>
                <small>{props.creatAt?.toString()}</small>
            </div>

            <div>
                <AnswerField id={idt}/>
            </div>
        </div>
    )
}
export default QuestionViwer