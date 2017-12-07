import React from 'react';
import {shallow} from 'enzyme';
// import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';
//react-test-renderer

test('should render header correctly',() =>{
    const wrapper = shallow(<Header />);
    // expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper).toMatchSnapshot();

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
