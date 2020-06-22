import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [
    CompaniesModule,
    // TODO: take connection details from configuration file
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true, // disable for prod
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
