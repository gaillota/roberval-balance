import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import Ball from './Ball';

describe('Ball component', function () {
    const defaultWeight = 10;
    const ball = {
        index: 1,
        weight: 10
    };
    const handleBallClick = () => {
        ball.weight = defaultWeight * 2;
    };
    const ballComponent = <Ball key={ball.index} id={ball.index} ball={ball} selected={ball.weight !== defaultWeight} handleClick={handleBallClick}/>;

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(ballComponent, div);
    });

    it('should have 2 children', () => {
        const wrapper = shallow(ballComponent);

        expect(wrapper.find('.ball').children().length).toEqual(2);
    });

    it('should select the ball', () => {
        const wrapper = shallow(ballComponent);

        wrapper.find('.ball').simulate('click');
        expect(ball.weight).toEqual(defaultWeight * 2);
    });
});
