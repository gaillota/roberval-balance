import React from 'react';
import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe('App component', function () {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('should display the app name', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2>Roberval Balance</h2>;

        expect(wrapper.contains(welcome)).toEqual(true);
    });
});
