import {compute} from './computer.service';

describe('ComputerService', function () {
  const defaultWeight = 10;
  const heavierBallIndex = 4;

  beforeEach(() => {
    this.balls = Array.from(Array(8).keys()).map(index => ({
        index,
        weight: index == heavierBallIndex ? defaultWeight * 2 : defaultWeight
      }));
  });

  it('should find the correct ball', () => {
    const result = compute(this.balls);

    expect(result.ball.index).toEqual(heavierBallIndex,
      'Ball found should be the heavier ball choosen');
  });

  it('should take less than 3 rounds', () => {
    const result = compute(this.balls);

    expect(result.round).toBeLessThan(3);
  });
});
