import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTaskService } from "../Services/CreateTaskService";

class CreateTaskController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {taskName, dueDate, priority} = request.body as {taskName: string, dueDate: Date, priority: string}
    

        const taskservice = new CreateTaskService()
        const task = await taskservice.execute({taskName, dueDate, priority});

        reply.send(task)
    }
}

export { CreateTaskController }