import { ShopService } from './shop.service';
export declare class ShopController {
    private readonly shopService;
    constructor(shopService: ShopService);
    getHello(): Promise<import("./shop.entity").Shop[]>;
}
