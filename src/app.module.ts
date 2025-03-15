import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AutenticacaoModule } from './autenticacao/autenticacao.module'

@Module({
  imports: [
    ConfigModule.forRoot(), // variáveis do .env
    AutenticacaoModule
  ]
})
export class AppModule {}
