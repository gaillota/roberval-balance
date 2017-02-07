import React, {Component} from 'react';
import classNames from "classnames";

import './Ball.css';

class Ball extends Component {
    render() {
        return (
            <div className={classNames({
                "ball": true,
                selected: this.props.selected
            })} onClick={() => this.props.handleClick(this.props.ball)}>
                <span className="index">{this.props.ball.index + 1}</span>
                <span className="weight">{this.props.ball.weight}</span>
            </div>
        )
    }
}

export default Ball
