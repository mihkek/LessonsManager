import { Test, TestingModule } from '@nestjs/testing';
import { LessonsManagerService } from './lessons-manager.service';

describe('LessonsManagerService', () => {
  let service: LessonsManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonsManagerService],
    }).compile();

    service = module.get<LessonsManagerService>(LessonsManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
