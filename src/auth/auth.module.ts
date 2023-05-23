import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { GoogleStrategy } from './utils/GoogleStrategy';
import { UsersModule } from 'src/users/users.module';
import { SessionSerializer } from './utils/SessionSerializer';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, SessionSerializer],
})
export class AuthModule {}
