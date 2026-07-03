import { Module } from '@nestjs/common';
import { TablesModule } from './tables/tables.module';
import { TytpeormModule } from './tytpeorm.module';

@Module({
  imports: [TablesModule, TytpeormModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
