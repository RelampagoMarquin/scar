import { useEffect, useRef } from 'react'


function Question({ question }: { question: any }) {

    const ref = useRef(null)

    useEffect(() => { [question] })

    return (
        <div key={question}>

            <span>
                { question.question }
            </span>
        </div>

    )
}

export default Question