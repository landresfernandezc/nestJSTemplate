import { User } from "../../auth/entity/user.entity";
import { TodoDto } from "../dto/todo.dto";
import { Todo } from "../entity/todo.entity";
import { TodoPayload } from "../interface/todo-payload.interface";
import { TodoRepository } from "../repository/todo.repository";
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: TodoRepository);
    getAllTodo(user: User): Promise<TodoPayload[]>;
    createTodo(todoDto: TodoDto, user: User): Promise<TodoPayload>;
    getTodoById(id: number, user: User): Promise<Todo>;
    updateTodoById(id: number, todoDto: TodoDto, user: User): Promise<TodoPayload>;
    deleteTodoById(id: number, user: User): Promise<{
        message: string;
    }>;
}
