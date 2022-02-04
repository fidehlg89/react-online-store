import React from "react";
import ReactDOM from "react-dom";
import Footer from "..";

import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer"

afterEach(cleanup);

it("renders with out crashing", () => {
    const div=document.createElement('div');
    ReactDOM.render(<Footer></Footer>, div);    
});

it("matches snapshot", ()=>{
    const tree=renderer.create(<Footer></Footer>).toJSON();
    expect(tree).toMatchSnapshot();
});


