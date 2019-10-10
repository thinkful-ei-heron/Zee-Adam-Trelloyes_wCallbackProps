import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';
import { tsPropertySignature, exportAllDeclaration } from '@babel/types';

describe('<Card />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Card title='test title' content='test content'/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})