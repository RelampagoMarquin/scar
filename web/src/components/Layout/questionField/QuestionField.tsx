import React, { FormEvent, useEffect, useState } from 'react';
import { useAuth } from '../../../hooks';
import api from '../../../services/api';
import './styles.css'

interface Tag {
  id: number;
  name: string; 
}

export function QuestionField() {
  const [tags, setTags] = useState<Tag[]>([])
  const [userId, setUserId] = useState<number>()
  const auth = useAuth().user?.id


  useEffect(() => {
    api.get('/tags').then(response => {
      setTags(response.data)
    })
  }, [])

  async function handleQuestion(event: FormEvent) {
    const formData = new FormData(event.target as HTMLFormElement)

    const data = Object.fromEntries(formData)
    console.log(auth)
    if (!data.question) {
      return
    }
    try {
      api.post('/questions', {
        "question": data.question,
        "userId": auth,
        "tagId": Number(data.tag)
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
    <div className='background'>
      <form onSubmit={handleQuestion}>
        <label>
          <textarea className='campoformulario' name="question" placeholder="Faça sua pergunta aqui" required />
        </label>
        <div id='undertextarea'>
          <label htmlFor="tag">
            <select
              name='tag'
              id="tag"
            >
              <option disabled defaultValue="" value="">Categorias</option>
              {tags.map(tag => {
                return <option key={tag.id} value={tag.id}>{tag.name}</option>
              })}
            </select>
          </label>

          <button type="submit" className="submitquestion">Enviar</button>
        </div>

      </form>
    </div>
  );
}

export default QuestionField;