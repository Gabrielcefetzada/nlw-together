import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface PayloadInterface {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
 
        // Receber o token
        const authToken = request.headers.authorization

        // Validar se o token está preenchido

        if(!authToken){
            return response.status(401).end()
        }

        // Validar se o token é válido 

        const tokenDivided = authToken.split(" ") // ignorar o Bearer 
        const token = tokenDivided[1]

        try { 
            const { sub } = verify(token, "&G&44HIHeHsdod1UIREDTvfrfyTRYHYp[~874aWs") as PayloadInterface

            request.user_id = sub // Recuperar informações do usuário
            return next()
        } catch(err) {
            return response.status(401).end()
        } 

    }

