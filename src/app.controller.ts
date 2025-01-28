import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private prisma: PrismaService,
  ){}

  @Get('hello')
  async getHello(){
  const aranhas = await this.prisma.aranha.findMany();
  return {
    aranhas,
  };
}}