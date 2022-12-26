import React, { FormEvent, useEffect, useState } from 'react';
import { useAuth } from '../../hooks';
import api from '../../services/api';

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
    } catch (error){
      console.log(error)
      alert('erro ao cadastrar')
    }

  }

  return (
    <div>
      <form onSubmit={handleQuestion}>
        <label>
          <p>Escreva aqui sua Pergunta:</p>
          <textarea  className='campoformulario' name="question" placeholder="Escreva sua pergunta" required />
        </label>
        <label htmlFor="tag">Qual a tag</label>
        <select
          name='tag'
          id="tag"
        >
          <option disabled defaultValue="" value="">Selecione a tag</option>
          {tags.map(tag => {
            return <option key={tag.id} value={tag.id}>{tag.name}</option>
          })}
        </select>
        <button type="submit" className="submitformbutton">Perguntar</button>
      </form>
    </div>
  );
}

export default QuestionField;