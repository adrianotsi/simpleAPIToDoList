import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateTaskController } from "./Controllers/CreateTaskController";
import { ListTakssController } from "./Controllers/ListTasksController";
import { DeleteTaskController } from "./Controllers/DeleteTaskController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/helloWorld", async(request: FastifyRequest, reply: FastifyReply) =>{
        return { message: "Hello World, how you doing?"}
    })

    fastify.post("/task", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateTaskController().handle(request, reply)
    })

    fastify.get("/tasks", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListTakssController().handle(request, reply)
    })

    fastify.delete("/task", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteTaskController().handle(request, reply)
    })

}