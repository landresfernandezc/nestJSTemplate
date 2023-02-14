"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const todo_repository_1 = require("../repository/todo.repository");
let TodoService = class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async getAllTodo(user) {
        return this.todoRepository.getAllTodo(user);
    }
    async createTodo(todoDto, user) {
        return this.todoRepository.createTodo(todoDto, user);
    }
    async getTodoById(id, user) {
        const todo = await this.todoRepository.findOne({ where: { id, userId: user.id } });
        if (!todo) {
            throw new common_1.NotFoundException(`This ${id} is not found`);
        }
        return todo;
    }
    async updateTodoById(id, todoDto, user) {
        const todo = await this.getTodoById(id, user);
        todo.title = todoDto.title;
        todo.description = todoDto.description;
        await todo.save();
        return {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            createdDate: todo.createdDate,
            updatedDate: todo.updatedDate
        };
    }
    async deleteTodoById(id, user) {
        const todo = await this.todoRepository.delete({ id, userId: user.id });
        if (todo.affected === 0) {
            throw new common_1.NotFoundException(`This ${id} is not found`);
        }
        return { message: 'Deleted successfully !' };
    }
};
TodoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(todo_repository_1.TodoRepository)),
    __metadata("design:paramtypes", [todo_repository_1.TodoRepository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map