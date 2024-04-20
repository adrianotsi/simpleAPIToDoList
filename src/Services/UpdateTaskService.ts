import prismaClient from "../Prisma";
import moment from 'moment';

interface CreateTaskProps{
    id: string;
    taskName: string;
    dueDate: Date;
    priority: string
    status: boolean
}

class UpdateTaskService{
    async execute({id,taskName, dueDate, priority, status}: CreateTaskProps){
        console.log(taskName)
        if(!taskName || !dueDate || !priority){
            throw new Error("Preencha todos os campos")
        }
        const dueDateMoment = moment(dueDate);
        const currentDate = moment();
        if (dueDateMoment.isBefore(currentDate)) {
            throw new Error("Data inválida");
        }


        const task = await prismaClient.task.update({
            where:{
                id: id
            },
            data:{
                taskName,
                dueDate,
                priority,
                status
            }
        })

        return task
    }
}

export { UpdateTaskService }