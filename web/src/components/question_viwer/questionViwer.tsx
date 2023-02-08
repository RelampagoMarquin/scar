import { useParams } from 'react-router-dom';
import api from '../../services/api';
import AnswerField from '../Layout/answerField/answersField';


interface propsQuestion {
    id: number | undefined;
    user: { name: string, id: number } | undefined;
    question: string | undefined;
    resolved: boolean | undefined;
    creatAt: Date | undefined;
    logado: number | undefined;
    token: string | undefined;
}

export function QuestionViwer(props: propsQuestion) {

    const { id } = useParams()
    const idt = Number(id)
    const token = props.token

    async function handleSolved() {
        const id = props.id
        api.patch(`/questions/solved/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(response => {
            alert('Avaliado com sucesso')
            window.location.reload()
        }).catch(response => {
            alert('ERRO AO MARCAR COMO RESOLVIDO')
        })

    }

    return (
        <div className="bg-primary form-question f-padding">
            <div className=" bg-secondary f-padding infield">
                <p id='questionV_header'><span>Feito por: {props.user?.name}</span><span id='resolved'>
                    {props.logado == props.user?.id ? <button onClick={handleSolved} className='bg-green'>Resolvido</button> : null}
                </span></p>
                <div className='bg-terciary text-question f-padding'>
                    <p>{props.resolved ? <p>Resolvido -</p> : null}{props.question}</p>
                </div>
                <small id='createTime'>{props.creatAt?.toString()}</small>
                <div>
                    <AnswerField id={idt} />
                </div>
            </div>

        </div>
    )
}
export default QuestionViwer