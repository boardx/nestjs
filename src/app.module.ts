import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import {UserModule} from './modules/user/user.module';
import {ShopModule} from './modules/shop/shop.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Grf123456!',
      database: 'nestjs',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule, 
    ShopModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
