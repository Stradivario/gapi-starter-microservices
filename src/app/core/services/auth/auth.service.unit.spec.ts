import { Container } from '@gapi/core';
import { AuthPrivateService } from './auth.service';

const authService: AuthPrivateService = Container.get(AuthPrivateService);

describe('Auth Service', () => {
  it('unit: encryptPassword <=> decryptPassword : Should sucessfully encrypt and decrypt user password', async done => {
    const password = '123456';
    const encrypted = authService.encryptPassword(password);
    const decrypted = authService.decryptPassword(encrypted);
    expect(decrypted).toBe(password);
    done();
  });
});
