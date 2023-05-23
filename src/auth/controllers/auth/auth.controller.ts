import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { GoogleAuthGuard } from 'src/auth/utils/Guards';

@Controller('auth')
export class AuthController {
  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  handleLogin() {
    return { msg: 'Authenticated with Google.' };
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/redirect')
  handleRedirect() {
    return { msg: 'Redirected from Google.' };
  }

  @Get('status')
  getStatus(@Req() req: Request) {
    if (req.user) return { msg: 'Authenticated', _id: req.user };
    return { msg: 'Not Authenticated' };
  }
}
