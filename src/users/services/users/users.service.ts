import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { UserDetails } from 'src/utils/types';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(userDetails: UserDetails): Promise<User> {
    const user = new this.userModel(userDetails);

    return await user.save();
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email });
  }

  async getUserByObjectId(_id: Types.ObjectId): Promise<User | null> {
    return await this.userModel.findById(_id);
  }
}
