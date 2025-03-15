import { Controller, Post, Body } from '@nestjs/common'
import { AutenticacaoService } from './autenticacao.service'

@Controller('auth')
export class AutenticacaoController {
  constructor(private readonly autenticacaoService: AutenticacaoService) {}

  @Post('login')
  login(@Body() body: { email: string; senha: string }) {
    return this.autenticacaoService.validarUsuario(body.email, body.senha)
  }
}
