import { Controller, Get, Post, Delete, Param, Body, UseGuards } from '@nestjs/common'
import { OrdensServicoService } from './ordens_servico.service'
import { AuthGuard } from '@nestjs/passport'

@Controller('ordens-servico')
@UseGuards(AuthGuard('jwt'))  
export class OrdensServicoController {
  constructor(private readonly ordensServicoService: OrdensServicoService) {}

  @Get()
  listarTodas() {
    return this.ordensServicoService.listarOrdens()
  }

  @Get(':id')
  obterPorId(@Param('id') id: string) {
    return this.ordensServicoService.obterOrdemPorId(Number(id))
  }

  @Post()
  criar(@Body() body: { descricao: string; checklist: string[]; imagemUrl?: string }) {
    return this.ordensServicoService.criarOrdem(body.descricao, body.checklist, body.imagemUrl)
  }

  @Delete(':id')
  excluir(@Param('id') id: string) {
    this.ordensServicoService.excluirOrdem(Number(id))
    return { message: 'Ordem de serviço removida' }
  }
}
