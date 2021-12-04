import { ISolutionService } from './isolution.service';
import { SolutionsCollectorService } from './solutions-collector.service';

export abstract class BaseSolutionService implements ISolutionService {
  protected constructor(
    protected solutionsCollectorService: SolutionsCollectorService,
    protected year: number,
    protected day: number,
    protected dayName: string
  ) {
    solutionsCollectorService.registerSolution(year, day, dayName, this);
  }
  solvePart1(input: string): string | number {
    throw new Error('Method not implemented.');
  }
  solvePart2(input: string): string | number {
    throw new Error('Method not implemented.');
  }
}
