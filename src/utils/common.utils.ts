import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';

export interface JwtAccessPayload {
  id: string;
  role: string;
}
export interface JwtRefreshPayload {
  id: string;
  role: string;
}
@Injectable()
export class CommonUtils {
  constructor(
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

  async generateAccessToken(payload: JwtAccessPayload) {
    const secret = this.config.get('ACCESS_TOKEN_SECRET');
    return this.jwt.signAsync(payload, {
      expiresIn: this.config.get('ACCESS_EXPIRY'),
      secret,
    });
  }

  async generateRefreshToken(payload: JwtRefreshPayload) {
    const secret = this.config.get('REFRESH_TOKEN_SECRET');
    return this.jwt.signAsync(payload, {
      secret,
      expiresIn: this.config.get('REFRESH_EXPIRY'),
    });
  }

  async passwordMatches(userPassword: string, inputPassword: string) {
    const pwMatches = await argon.verify(userPassword, inputPassword);
    if (!pwMatches) {
      throw new HttpException(
        "password or email doesn't match",
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
