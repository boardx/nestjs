import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from './shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private usersRepository: Repository<Shop>,
  ){}
  
  findAll(): Promise<Shop[]> {
    return this.usersRepository.find();
  }

  getHello(): string {
    return 'Hello!';
  }
}