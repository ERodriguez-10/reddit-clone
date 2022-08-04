import React from "react";
import { Trending } from '../Trending/Trending'
import { Content } from '../Content/Content';

import './Main.css';

export function Main() {
  return (
    <div className="bg-content">
      <h3 className="width-content">Trending</h3>
      <Trending />
      <Content />
    </div>
  )
}