import { Test, TestingModule } from '@nestjs/testing';
import { AccessJwtControlService } from './access-jwt-control.service';

describe('AccessJwtControlService', () => {
  let service: AccessJwtControlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessJwtControlService],
    }).compile();

    service = module.get<AccessJwtControlService>(AccessJwtControlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
