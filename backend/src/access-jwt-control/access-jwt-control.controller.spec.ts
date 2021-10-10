import { Test, TestingModule } from '@nestjs/testing';
import { AccessJwtControlController } from './access-jwt-control.controller';

describe('AccessJwtControlController', () => {
  let controller: AccessJwtControlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessJwtControlController],
    }).compile();

    controller = module.get<AccessJwtControlController>(AccessJwtControlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
