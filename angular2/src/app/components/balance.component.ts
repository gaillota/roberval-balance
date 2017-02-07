import {Component, Input, OnInit} from '@angular/core';

import {Ball} from './ball';
import {compute} from '../services/computer.service';

@Component({
  moduleId: module.id,
  selector: 'balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  @Input()
  ballsCount: number;

  defaultWeight = 10;
  balls: Ball[] = [];
  selectedBall: Ball;
  error: String;
  result: any;

  ngOnInit(): void {
    this.balls = Array.from(Array(this.ballsCount).keys()).map(i => this._generateBall(i));
  }

  _generateBall(index: number, weight: number = this.defaultWeight) {
    return {
      index,
      weight
    }
  }

  _resetBalls() {
    this.balls.forEach((b, i) => this.balls[i].weight = this.defaultWeight);
  }

  onSelect(ball: Ball): void {
    this.error = null;
    this.selectedBall = ball;
    this._resetBalls();
    this.balls[ball.index].weight = this.defaultWeight * 2;
  }

  reset() {
    this.selectedBall = null;
    this.error = null;
    this.result = null;
    this._resetBalls();
  }

  findBall() {
    if (!this.selectedBall) {
      this.error = "Please choose a ball first";
      return;
    }

    this.result = compute(this.balls);
  }
}
