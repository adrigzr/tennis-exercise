import { describe, it } from 'mocha';
import { checkAllScores } from './utils.js';
import { TennisGame } from '../src/index.js';

describe('TennisGame', function () {
  it('should correctly check all the scores', function () {
    checkAllScores(() => new TennisGame('player1', 'player2'));
  });
});
