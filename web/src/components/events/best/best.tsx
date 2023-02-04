import api from "../../../services/api"
import { useAuth } from "../../../hooks"
import React, { FormEvent, useState } from "react"
import axios from "axios"




interface idprops {
    id: number
}
export function Best(props: idprops) {

    async function handleBest(event: FormEvent) {
        const resultData = new FormData(event.target as HTMLFormElement)

        const data = Object.fromEntries(resultData)

        const [bestAs, setBest] = useState(false)

        const handleClick = async () => {
            if (!data) {
                return
            }
            try {
                const response = await axios.put(`/api/questions/${props.id}`, { best: true });
                setBest(response.data.best);
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <div>
            <button type="submit" name='best' onClick={ handleClick }>Parabéns</button>
            <p></p>
        </div>
    )
}

export default Best