import { Test, TestingModule } from '@nestjs/testing';
import { QuestionTagsController } from './question-tags.controller';
import { QuestionTagsService } from './question-tags.service';

describe('QuestionTagsController', () => {
  let controller: QuestionTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionTagsController],
      providers: [QuestionTagsService],
    }).compile();

    controller = module.get<QuestionTagsController>(QuestionTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
