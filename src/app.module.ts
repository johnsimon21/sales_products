import { Module } from '@nestjs/common';
import { ClientModule } from './modules/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './Modules/product.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [`${__dirname}/**/models/*.{ts, js}`],
      synchronize: true,

      // migrations: [`${__dirname}/**/migrations/*.{ts, js}`],
 
    }),
    ClientModule,
    ProductModule
  ],
})
export class AppModule { }
