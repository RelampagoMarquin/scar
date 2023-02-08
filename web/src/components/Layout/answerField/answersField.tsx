import { FormEvent } from 'react';
import { useAuth } from '../../../hooks';
import api from '../../../services/api';


interface idprops {
  id: number
}
export function AnswerField(props: idprops) {
  const auth = useAuth()
  const authId = auth.user?.id
  const token = auth.token

  async function handleAnswer(event: FormEvent) {
    const ansData = new FormData(event.target as HTMLFormElement)

    const data = Object.fromEntries(ansData)
    console.log(props.id)
    if (!data.answer) {
      return
    }
    try {
      api.post(`/answers/question/${props.id}`, {
        "answer": data.answer,
        "userId": authId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(response => {
        alert('Resposta cadastrada')
      }).catch(response => {
        alert('Erro ao cadastrar Resposta')
      })
    } catch (error) {
      console.log(error)
      alert('erro ao cadastrar')
    }

  }

  return (

    <form onSubmit={handleAnswer}>
      <label id='lbl-answer' className='bg-terciary'>
        <textarea className='bg-terciary' name="answer"
        placeholder='Responder' id='text-area-answer' required/>
        <button type="submit" className='bg-green'>Enviar</button>
      </label>
      
    </form>
  );
}

export default AnswerField;