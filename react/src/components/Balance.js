import React, {Component} from 'react';

import Ball from './Ball';
import Result from './Result';
import {compute} from '../services/compute';

import './Balance.css';

class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = this._getDefaultState();

        this.handleBallClick = this.handleBallClick.bind(this);
        this.reset = this.reset.bind(this);
        this.findBall = this.findBall.bind(this);
    }

    _getDefaultState() {
        return {
            result: false,
            error: false,
            balls: this._getDefaultBalls()
        }
    }

    _generateBall(index, weight = this.props.defaultWeight) {
        return {
            index,
            weight
        }
    }

    _getDefaultBalls() {
        return Array.from(Array(this.props.ballsCount).keys()).map(i => this._generateBall(i));
    }

    handleBallClick(ball) {
        const balls = this._getDefaultBalls();
        balls[ball.index].weight = this.props.defaultWeight * 2;
        this.setState({
            error: null,
            balls
        });
    }

    reset() {
        this.setState(this._getDefaultState());
    }

    findBall() {
        this.setState({
            result: compute(this.state.balls)
        });
    }

    render() {
        const balls = this.state.balls.map(ball => (
            <Ball key={ball.index} id={ball.index} ball={ball} selected={ball.weight !== this.props.defaultWeight}
                  handleClick={this.handleBallClick}/>
        ));

        return (
            <div className="balance">
                <div className="balls">
                    {balls}
                </div>
                <div className="row">
                    <div className="controls">
                        <button className="button reset" onClick={this.reset}>Reset</button>
                        <button className="button run" onClick={this.findBall}>Run</button>
                    </div>
                </div>
                {
                    this.state.error ? (
                            <div className="error">
                                {this.state.error}
                            </div>
                        ) : ''
                }
                {
                    this.state.result ? (
                            <Result result={this.state.result}/>
                        ) : ''
                }
            </div>
        );
    }
}

Balance.propTypes = {
    ballsCount: React.PropTypes.number,
    defaultWeight: React.PropTypes.number
};

export default Balance;
