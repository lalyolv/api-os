import { Module } from '@nestjs/common'
import { OrdensServicoController } from './ordens_servico.controller'
import { OrdensServicoService } from './ordens_servico.service'

@Module({
  controllers: [OrdensServicoController],
  providers: [OrdensServicoService]
})
export class OrdensServicoModule {}
