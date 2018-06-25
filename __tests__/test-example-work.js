import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: Adapter()});

const myWork = [
    {
        'title': "Work Example 1",
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': "images/example1.png",
            'comment': ""
        }
    }
];

describe("ExampleWork component", () => {
    let component = shallow(<ExampleWork work={myWork}/>);
  
    it("Should be section element", () => {
      expect(component.type()).toEqual('section');
  
    });
  
    it("Should contain as many children as there are work examples", () => {
      expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
    });
  
  });

describe("ExampleWorkBubble component", () => {

});