/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserDTO } from './dtos/user.dto';
import { User } from './user.entity';
import { UserConverter } from './converters/user-converters';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createUser: UserDTO): Promise<any> {
    const search = await this.findById(createUser.userId);
    if (!search) {
      const userObj = await UserConverter.toUserEntity(createUser);
      this.userRepository.save(userObj);
    } else {
      throw new BadRequestException('error.user.duplicate');
    }
  }

  async update(userDTO: UserDTO): Promise<any> {
    const userObj = await UserConverter.updateToUserEntity(userDTO);
    this.userRepository.update(userObj.userId, userObj);
  }

  async findById(userId: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { userId: userId },
    });
  }
}
