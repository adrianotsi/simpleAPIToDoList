import prismaClient from "../Prisma";
import moment from 'moment';

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
        const dueDateMoment = moment(dueDate).startOf('day');
        const currentDate = moment().startOf('day');
        if (dueDateMoment.isBefore(currentDate)) {
            throw new Error("Data inválida");
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