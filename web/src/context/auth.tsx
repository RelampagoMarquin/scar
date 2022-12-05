import React from "react"


export const AuthProvider: React.FC = ({children}) => {

}



//Para salvar os dados:
async function Login(){

    localStorage.setItem("@App:user", JSON.stringify(response.data.user))
    localStorage.setItem("@App:token",response.data.token)
}