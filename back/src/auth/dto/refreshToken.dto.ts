import { IsString } from 'class-validator';

export class RefreshTokenDto {
  @IsString({
    message: "You did't pass refresh token or it isn't a string!",
  })
  refreshToken: string;
}
