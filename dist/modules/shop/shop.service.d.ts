import { Repository } from 'typeorm';
import { Shop } from './shop.entity';
export declare class ShopService {
    private usersRepository;
    constructor(usersRepository: Repository<Shop>);
    findAll(): Promise<Shop[]>;
    getHello(): string;
}
