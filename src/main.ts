import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Habilita CORS para permitir conexões do frontend
  app.enableCors({
    origin: 'http://localhost:3001', // URL do frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })

  await app.listen(3000)
}
bootstrap()
