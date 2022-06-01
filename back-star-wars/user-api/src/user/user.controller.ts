/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  UsePipes,
} from '@nestjs/common';
import { UserDTO } from './dtos/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('/user-api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes()
  async create(@Body() userDTO: UserDTO): Promise<any> {
    return await this.userService.create(userDTO);
  }

  @Put()
  async update(@Body() userDTO: UserDTO): Promise<any> {
    return await this.userService.update(userDTO);
  }

  @Get('/getUserById')
  async getUserById(
    @Query('id') id: number,
  ): Promise<User> {
    return await this.userService.findById(id);
  }
}
