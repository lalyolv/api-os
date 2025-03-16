import { Injectable, NotFoundException } from '@nestjs/common'
import { OrdemServico } from './ordens_servico.model'

@Injectable()
export class OrdensServicoService {
  private ordens: OrdemServico[] = []

  listarOrdens(): OrdemServico[] {
    return this.ordens
  }

  obterOrdemPorId(id: number): OrdemServico {
    const ordem = this.ordens.find(os => os.id === id)
    if (!ordem) throw new NotFoundException('Ordem de serviço não encontrada')
    return ordem
  }

  criarOrdem(descricao: string, checklist: string[], imagemUrl?: string): OrdemServico {
    const novaOrdem: OrdemServico = {
      id: this.ordens.length + 1,
      descricao,
      checklist,
      imagemUrl,
      criadoEm: new Date()
    }
    this.ordens.push(novaOrdem)
    return novaOrdem
  }

  excluirOrdem(id: number): void {
    this.ordens = this.ordens.filter(os => os.id !== id)
  }
}
