import { FormEvent, useEffect, useState } from 'react';
import { useAuth } from '../../../hooks';
import api from '../../../services/api';

interface Tag {
  id: number;
  name: string;
}

export function QuestionField() {
  const [tags, setTags] = useState<Tag[]>([])
  const auth = useAuth()
  const token = auth.token
  const authid = useAuth().user?.id


  useEffect(() => {
    api.get('/tags', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      setTags(response.data)
    })
  }, [])

  async function handleQuestion(event: FormEvent) {
    const formData = new FormData(event.target as HTMLFormElement)

    const data = Object.fromEntries(formData)
    if (!data.question) {
      return
    }
    try {
      api.post('/questions', {
        "question": data.question,
        "userId": authid,
        "tagId": Number(data.tag)
      },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then(response => {
          alert('Pergunta cadastrada com sucesso')
        }).catch(response => {
          alert('Erro ao cadastrar pergunta')
        })
    } catch (error) {
      console.log(error)
      alert('erro ao cadastrar')
    }

  }

  return (
    <div className='bg-primary'>
      <form onSubmit={handleQuestion} className='form-question'>
        <label id='lbl-question'>
          <textarea className='bg-secondary' name="question" placeholder="Faça sua pergunta aqui" required />
          <div>
            <select
              name='tag'
              id="tag"
              className='bg-primary'>
              <option disabled defaultValue="" value="">Categorias</option>
              {tags.map(tag => {
                return <option key={tag.id} value={tag.id}>{tag.name}</option>
              })}
            </select>

            <button type="submit" className='bg-green'>Enviar</button>
          </div>

        </label>

      </form>
    </div>
  );
}

export default QuestionField;