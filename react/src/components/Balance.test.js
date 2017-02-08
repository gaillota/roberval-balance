import React from 'react';
import {mount} from 'enzyme';
import ReactDOM from 'react-dom';
import Balance from './Balance';

describe('Balance component', function () {
    const ballsCount = 8;
    const defaultWeight = 10;
    const balanceComp = <Balance ballsCount={ballsCount} defaultWeight={defaultWeight} />;

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(balanceComp, div);
    });

    it('should have ' + ballsCount + ' balls', () => {
        const wrapper = mount(balanceComp);

        expect(wrapper.find('.balls').children().length).toEqual(ballsCount);
    });
});
