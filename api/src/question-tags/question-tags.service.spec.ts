import { Test, TestingModule } from '@nestjs/testing';
import { QuestionTagsService } from './question-tags.service';

describe('QuestionTagsService', () => {
  let service: QuestionTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionTagsService],
    }).compile();

    service = module.get<QuestionTagsService>(QuestionTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
