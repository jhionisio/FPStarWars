import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AutomapperModule } from 'nestjsx-automapper';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env.dev' : `.env.${ENV}`,
    }),
    AutomapperModule.withMapper({
      useUndefined: true,
    }),
  ],
})
export class AppModule {}
