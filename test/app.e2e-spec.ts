import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('customer Controller e2e test', () => {
  let app: INestApplication;
  const newCustomer = {
    name: 'sen',
    email: 'sen@gmail.com',
    address: 'satmuhane',
    contact: '98677823',
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });
  test('should create new user', async () => {
    const response = await request(app.getHttpServer())
      .post('/customer')
      .send(newCustomer)
      .expect(201);

    expect(response.body).toBeDefined();
  });
});
