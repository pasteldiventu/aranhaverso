import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private prisma: PrismaService,
  ){}

  @Get('hello')
  async getHello(){
    const aranha = await this.prisma.aranha.create({
        data: {
        id: '5',
        nome: 'Peter Porker',
        nomeHeroi: 'Porco-Aranha',
      },
    });
    return {
      aranha,
    };
  }
}