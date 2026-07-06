import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from './shared/shared.module';
import { EnvService } from './shared/services/env.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (envService: EnvService) => ({
        type: envService.dbType as 'mysql',
        host: envService.dbHost,
        //host: '127.0.0.1',
        port: envService.dbPort,
        username: envService.dbUsername,
        password: envService.dbPassword,
        database: envService.dbDatabase,
        migrations: [__dirname + '/src/migrations/*{.ts,.js}'],
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [EnvService],
    }),
  ],
})
export class TypeormModule {}
