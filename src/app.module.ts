import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ReportModule } from './report/report.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user-entity';
import { Report } from './report/report-entity';

@Module({
  imports: [UserModule, ReportModule, TypeOrmModule.forRoot(
    {
      type: "sqlite",
      database: "db.sqlite",
      autoLoadEntities: true,
      synchronize: true
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
