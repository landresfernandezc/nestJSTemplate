import { User } from "../../auth/entity/user.entity";
import { Repository } from "typeorm";
import { TodoDto } from "../dto/todo.dto";
import { Todo } from "../entity/todo.entity";
import { TodoPayload } from "../interface/todo-payload.interface";
export declare class TodoRepository extends Repository<Todo> {
    createTodo(todoDto: TodoDto, user: User): Promise<Todo>;
    getAllTodo(user: User): Promise<TodoPayload[]>;
}
