/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class UserDTO {

  userId?: number;

  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  cellPhone?: number;

  @IsNotEmpty()
  email?: string;
}
