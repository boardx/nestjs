import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ){}
  
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findById(id: number) {
    return this.usersRepository.findOne({
      where:{
        id,
      }
    })
  }

  create() {
    return this.usersRepository.create();
  }
}