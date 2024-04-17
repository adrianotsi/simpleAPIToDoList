import prismaClient from "../Prisma";

interface CreateTaskProps{
    taskName: string;
    dueDate: Date;
    priority: string
}

class CreateTaskService{
    async execute({taskName, dueDate, priority}: CreateTaskProps){
        if(!taskName || !dueDate || !priority){
            throw new Error("Preencha todos os campos")
        }

        const task = await prismaClient.task.create({
            data:{
                taskName,
                dueDate,
                priority,
                status: true
            }
        })

        return task
    }
}

export { CreateTaskService }