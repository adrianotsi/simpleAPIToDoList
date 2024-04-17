import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteTaskService } from "../Services/DeleteTaskService"

class DeleteTaskController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const taskService = new DeleteTaskService()
        const { id } = request.query as {id: string}

        const task = await taskService.execute({id})

        reply.send(task);
    }
}

export { DeleteTaskController }