import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  public readonly jwtSecret: string;
  public readonly accessTokenExpirationTime: number;
  public readonly refreshTokenExpirationTime: number;

  public readonly dbType: string;
  public readonly dbHost: string;
  public readonly dbPort: number;
  public readonly dbUsername: string;
  public readonly dbPassword: string;
  public readonly dbDatabase: string;

  constructor(private configService: ConfigService) {
    this.jwtSecret = configService.get<string>(
      'JWT_SECRET',
      '470e8281ef5470d6799e6a427d25878d39b8349da2da5998710e631122036bdb517e6f86e614be1f',
    );
    this.accessTokenExpirationTime = configService.get<number>(
      'ACCESS_TOKEN_EXPIRATION_TIME',
      600,
    );
    this.refreshTokenExpirationTime = configService.get<number>(
      'REFRESH_TOKEN_EXPIRATION_TIME',
      1200,
    );

    this.dbType = configService.get<string>('DB_TYPE', 'mysql');
    this.dbHost = configService.get<string>('DB_HOST', 'localhost');
    this.dbPort = configService.get<number>('DB_PORT', 3307);
    this.dbUsername = configService.get<string>('DB_USERNAME', 'user');
    this.dbPassword = configService.get<string>('DB_PASSWORD', 'user');
    this.dbDatabase = configService.get<string>(
      'DB_DATABASE',
      'my-nestjs-practice',
    );
  }
}
