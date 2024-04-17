import prismaClient from "../Prisma";

class ListTasksService{
    async execute(){
        const tasks = await prismaClient.task.findMany()

        return tasks;
    }
}

export { ListTasksService }