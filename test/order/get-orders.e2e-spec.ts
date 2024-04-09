import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('Get Orderq (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return all', async () => {
     const responseGetOrders = await  request(app.getHttpServer()).get('/orders')
     
    expect(responseGetOrders.status).toBe(200);
    expect(responseGetOrders.body).toStrictEqual([]);
  });
});
