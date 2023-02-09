import api from "../../services/api";

interface AnswerProps {
  id: number;
  answer: string;
  best: boolean;
  avaliation: number;
  user: { name: string, id: number };
  userQuestionID: number;
  logado: number | undefined;
  token: string | undefined;
}

function Answers(props: AnswerProps) {
  const token = props.token
  async function handleUp() {
    const id = props.id
    api.patch(`/answers/avaliationup/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      alert('Avaliado com sucesso')
      window.location.reload()
    }).catch(response => {
      alert('Erro ao cadastrar Avaliação')
    })
  }

  async function handleDown() {
    const id = props.id
    api.patch(`/answers/avaliationdown/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      alert('Avaliado com sucesso')
      window.location.reload()
    }).catch(response => {
      alert('Erro ao cadastrar Avaliação')
    })
  }

  async function handleBest() {
    const id = props.id
    api.patch(`/answers/best/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      alert('Avaliado com sucesso')
      window.location.reload()
    }).catch(response => {
      alert('Erro ao cadastrar Avaliação')
    })

  }

  return (

    <div className="bg-primary f-padding">
      <div className="bg-secondary f-padding foreground container-ans">
        <aside>
          <h3 className='up-down'>
            <button onClick={handleUp} className='upDown'>ᐱ</button>
            {props.avaliation}
            <button onClick={handleDown} className='upDown'>ᐯ</button>
          </h3>
        </aside>
        <div>
          <div>
            <span>{props.user.name}{props.best ? <span>👑</span> : null}</span>
            <span>{props.logado == props.userQuestionID ? <button onClick={handleBest} className='bg-green'>Amei!</button> : null}</span>
          </div>
          <div className="bg-terciary f-padding infield">
            <p>{props.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Answers