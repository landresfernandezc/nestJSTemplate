import { User } from "../auth/entity/user.entity";
import { TodoDto } from "./dto/todo.dto";
import { Todo } from "./entity/todo.entity";
import { TodoPayload } from "./interface/todo-payload.interface";
import { TodoService } from "./service/todo.service";
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getAllTodo(user: User): Promise<TodoPayload[]>;
    createTodo(todoDto: TodoDto, user: User): Promise<TodoPayload>;
    getTodoById(id: number, user: User): Promise<Todo>;
    updateTodoById(id: number, todoDto: TodoDto, user: User): Promise<TodoPayload>;
    deleteTodoById(id: number, user: User): Promise<{
        message: string;
    }>;
}
