"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const bodyParser = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = +process.env.APP_PORT || 3000;
    app.setGlobalPrefix('api');
    console.log('Port running on: ', port);
    const options = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('Todo APP')
        .setDescription('Todo API documentation')
        .setVersion('1.0')
        .addTag('Todo')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
    app.use(bodyParser.json({ limit: '1mb' }));
    app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
    app.use(bodyParser.text({ type: 'text/html' }));
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map