"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express_1 = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    var whitelist = ['http://localhost:3001', 'http://localhost:3001/', 'http://localhost:3000', 'undefined'];
    app.enableCors({
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            }
            else {
                callback(null, true);
            }
        },
        allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Authorization',
        methods: "GET,PUT,POST,DELETE,UPDATE,OPTIONS",
        credentials: true,
    });
    app.use(express_1.json({ limit: '50mb' }));
    app.use(express_1.urlencoded({ extended: true, limit: '50mb' }));
    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map