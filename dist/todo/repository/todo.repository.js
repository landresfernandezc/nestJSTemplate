"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = void 0;
const typeorm_1 = require("typeorm");
const todo_entity_1 = require("../entity/todo.entity");
let TodoRepository = class TodoRepository extends typeorm_1.Repository {
    async createTodo(todoDto, user) {
        const { title, description } = todoDto;
        const todo = new todo_entity_1.Todo();
        todo.title = title;
        todo.description = description;
        todo.user = user;
        await todo.save();
        delete todo.user;
        return todo;
    }
    async getAllTodo(user) {
        const query = this.createQueryBuilder('todo');
        query.where('todo.userId = :userId', { userId: user.id });
        const todos = await query.getMany();
        return todos;
    }
};
TodoRepository = __decorate([
    typeorm_1.EntityRepository(todo_entity_1.Todo)
], TodoRepository);
exports.TodoRepository = TodoRepository;
//# sourceMappingURL=todo.repository.js.map