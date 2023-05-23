import { Injectable } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UsersService } from 'src/users/services/users/users.service';
import { UserDetails } from 'src/utils/types';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async validateUser(userDetails: UserDetails): Promise<User> {
    const user = await this.userService.getUserByEmail(userDetails.email);

    if (user) return user;
    return await this.userService.createUser(userDetails);
  }
}
