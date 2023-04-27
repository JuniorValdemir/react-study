// Link to React to use JSX //
import React from "react"

export default function ComParamentro(props) {
    const status = props.nota >= 7 ? ' aprovado' : ' reprovado'
    const notaInt = Math.ceil(props.nota)

    return (
        <div>
            <p>
                <strong>{ props.aluno }</strong>
                , nota: <strong>{ notaInt }</strong>
                <strong>{ status }</strong>
            </p>
        </div>
    )
}