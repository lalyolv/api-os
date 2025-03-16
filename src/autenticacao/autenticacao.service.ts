import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AutenticacaoService {
  private usuarioFixo = {
    id: 1,
    nome: 'Usuário Teste',
    email: 'usuario@teste.com',
    senha: '123', // Senha fixa temporária para testar
  }

  constructor(private readonly jwtService: JwtService) {}

  validarUsuario(email: string, senha: string): { token: string } {
    if (email === this.usuarioFixo.email && senha === this.usuarioFixo.senha) {
      const payload = { sub: this.usuarioFixo.id, email: this.usuarioFixo.email }
      return { token: this.jwtService.sign(payload) }
    } else {
      throw new UnauthorizedException('Credenciais inválidas')
    }
  }
}
