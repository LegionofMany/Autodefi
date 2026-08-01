import "reflect-metadata";
import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller("health")
class HealthController {
  @Get()
  health() {
    return { service: "api-gateway", status: "ok", timestamp: new Date().toISOString() };
  }

  @Get("services")
  services() {
    return { services: ["auth", "finance", "ai", "token"], status: "ok" };
  }
}

@Module({ controllers: [HealthController] })
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(Number(process.env.PORT || 4010));
}

bootstrap();
