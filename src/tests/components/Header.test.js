import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
//react-test-renderer

test('should render header correctly',() =>{
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header/>);
    console.log(renderer.getRenderOutput());
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
