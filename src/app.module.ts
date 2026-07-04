import { Module } from '@nestjs/common';
import { TablesModule } from './tables/tables.module';
import { TytpeormModule } from './tytpeorm.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), TablesModule, TytpeormModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
