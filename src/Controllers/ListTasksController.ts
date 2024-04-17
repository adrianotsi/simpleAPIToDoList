import { FastifyRequest, FastifyReply } from "fastify"
import { ListTasksService } from "../Services/ListTasksServices"


class ListTakssController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listTaskService = new ListTasksService();

        const tasks = await listTaskService.execute();

        reply.send(tasks)
    }
}

export { ListTakssController }