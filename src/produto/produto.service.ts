import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutoService {
  constructor (private prisma: PrismaService) {}

  listarTodos() {
    return this.prisma.produto.findMany();
  }

  buscarPorID(id: number) {
    return this.prisma.produto.findUnique({
      where: { id }
    });
  }

  create(dados: CreateProdutoDto) {
    return this.prisma.produto.create({
      data: dados
    });
  }

  
  update(id: number, dados: UpdateProdutoDto) {
    return this.prisma.produto.update({
      where: { id },
      data: dados
    });
  }

  delete(id: number) {
    return this.prisma.produto.delete({
      where: { id }
    });
  }
}
