import { redirect } from "react-router-dom";

export function mutateResponse(login){
    let response = redirect(login)
    response.body = true
    return response
}