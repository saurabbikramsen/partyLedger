import { Global, Module } from '@nestjs/common';
import { CommonUtils } from './common.utils';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [JwtModule.register({})],
  providers: [CommonUtils],
  exports: [CommonUtils],
})
export class UtilsModule {}
