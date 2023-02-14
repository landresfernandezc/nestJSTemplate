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
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const get_user_decorator_1 = require("../auth/decorator/get-user.decorator");
const user_entity_1 = require("../auth/entity/user.entity");
const todo_dto_1 = require("./dto/todo.dto");
const todo_service_1 = require("./service/todo.service");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    getAllTodo(user) {
        return this.todoService.getAllTodo(user);
    }
    createTodo(todoDto, user) {
        return this.todoService.createTodo(todoDto, user);
    }
    getTodoById(id, user) {
        return this.todoService.getTodoById(id, user);
    }
    updateTodoById(id, todoDto, user) {
        return this.todoService.updateTodoById(id, todoDto, user);
    }
    deleteTodoById(id, user) {
        return this.todoService.deleteTodoById(id, user);
    }
};
__decorate([
    common_1.Get(),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getAllTodo", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.TodoDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "createTodo", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodoById", null);
__decorate([
    common_1.Patch('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body()),
    __param(2, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, todo_dto_1.TodoDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "updateTodoById", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "deleteTodoById", null);
TodoController = __decorate([
    swagger_1.ApiTags('Todo'),
    swagger_1.ApiBearerAuth(),
    common_1.Controller('todo'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map