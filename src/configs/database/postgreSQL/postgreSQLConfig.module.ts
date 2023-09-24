import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import postgreConfig from './postgreSQLConfig';
import CONSTANTS from 'src/common/constants';
import ENTITIES from 'src/entities';

@Module({
  imports: [
    ConfigModule.forFeature(postgreConfig),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get(CONSTANTS.DB_CONFIG_HOST),
        port: configService.get(CONSTANTS.DB_CONFIG_PORT),
        username: configService.get(CONSTANTS.DB_CONFIG_USERNAME),
        password: configService.get(CONSTANTS.DB_CONFIG_PASSWORD),
        database: configService.get(CONSTANTS.DB_CONFIG_DATABASE),
        entities: Object.values(ENTITIES),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class PostgresModule {}
