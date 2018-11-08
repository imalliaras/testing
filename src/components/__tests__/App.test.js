import React from 'react';
import {shallow} from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

it('should render CommentBox component', () => {
    const component = shallow(<App />);

    expect(component.find(CommentBox).length).toEqual(1);
});

it('should render CommentList component', () => {
    const component = shallow(<App />);

    expect(component.find(CommentList).length).toEqual(1);
});