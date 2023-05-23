import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { Types } from 'mongoose';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userService: UsersService) {
    super();
  }

  serializeUser(_id: Types.ObjectId, done: Function) {
    done(null, _id);
  }

  async deserializeUser(_id: Types.ObjectId, done: Function) {
    const user = await this.userService.getUserByObjectId(_id);

    return user ? done(null, _id) : done(null, null);
  }
}
