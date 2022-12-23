import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./user.entity").User[]>;
    findById(id: number): Promise<import("./user.entity").User>;
}
