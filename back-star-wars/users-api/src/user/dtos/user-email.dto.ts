/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class UserEmailDTO {
  @IsNotEmpty()
  userEmailId?: number;

  @IsNotEmpty()
  userId?: number;

  @IsNotEmpty()
  dsEmail: string;
}
