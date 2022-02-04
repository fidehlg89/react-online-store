import React from "react";
import ReactDOM from "react-dom";
import Header from "..";

import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer"

afterEach(cleanup);

it("renders with out crashing", () => {
  const div=document.createElement('div');
  ReactDOM.render(<Header></Header>, div);
});

it("matches snapshot", ()=>{
  const tree=renderer.create(<Header></Header>).toJSON();
  expect(tree).toMatchSnapshot();
});
