import React from "react";
import Balloon from "./index.js";

export default (stories) =>
  stories
    .add("2文字ラベル", () => <Balloon>次へ</Balloon>)
    .add("4文字ラベル", () => <Balloon>削除する</Balloon>)
    .add("絶対座標配置", () => (
      <Balloon style={{ position: "absolute", left: "200px", top: "200px" }}>
        左上から200px配置
      </Balloon>
    ));
