import { Test, TestingModule } from '@nestjs/testing';
import { InterestCalculatorService } from './interest-calculator.service';

describe('InterestCalculatorService', () => {
  let service: InterestCalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterestCalculatorService],
    }).compile();

    service = module.get<InterestCalculatorService>(InterestCalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
