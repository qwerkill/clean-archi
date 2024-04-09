import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('Get Order by Customer (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return Order by CustomerName', async () => {
    const customerName = 'customer1';
    const responseGetOrderByCustomer = await  request(app.getHttpServer()).get(`/orders/${customerName}`)
    
    expect(responseGetOrderByCustomer.status).toBe(200);
    expect(responseGetOrderByCustomer.body).toStrictEqual([]);
    });
});
 