import React from "react";
import Img from "./index.js";

export default (stories) =>
  stories.add("デフォルト", () => (
    <Img src="https://placehold.jp/150x150.png" width="150" height="150" />
  ));
