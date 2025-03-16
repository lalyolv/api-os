import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AutenticacaoService } from './autenticacao.service'
import { AutenticacaoController } from './autenticacao.controller'
import { JwtEstrategia } from './jwt.estrategia'

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' }
      })
    })
  ],
  providers: [AutenticacaoService, JwtEstrategia],
  controllers: [AutenticacaoController]
})
export class AutenticacaoModule {}
