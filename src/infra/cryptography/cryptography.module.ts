import { Module } from '@nestjs/common'

import { Encrypt } from '@/domain/forum/application/cryptography/encrypt'
import { HashComparer } from '@/domain/forum/application/cryptography/hash-comparer'
import { HashGenerator } from '@/domain/forum/application/cryptography/hash-generator'

import { JwtEncrypt } from './jwt-encrypt'
import { BcryptHash } from './bcrypt-hash'

@Module({
  providers: [
    { provide: Encrypt, useClass: JwtEncrypt },
    { provide: HashComparer, useClass: BcryptHash },
    { provide: HashGenerator, useClass: BcryptHash },
  ],
  exports: [Encrypt, HashComparer, HashGenerator],
})
export class CryptographyModule {}
