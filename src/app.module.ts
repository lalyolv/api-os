import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AutenticacaoModule } from './autenticacao/autenticacao.module'
import { OrdensServicoModule } from './ordens_servico/ordens_servico.module'

@Module({
  imports: [
    ConfigModule.forRoot(), // variáveis do .env
    AutenticacaoModule,
    OrdensServicoModule
  ]
})
export class AppModule {}
