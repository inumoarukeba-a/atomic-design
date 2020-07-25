import React from "react";
import { action } from "@storybook/addon-actions";
import Notification from "./index.js";

const notification = {
  id: 0,
  thumbnail: "/mock/images/img01.jpg",
  title: "コンポーネント思考でUIを設計しよう！Volume.01",
  channelName: "UIチャンネル",
  startAt: "1507032000000",
  startAt: "1507035600000",
};

export default (stories) =>
  stories.add("デフォルト", () => (
    <Notification
      program={notification}
      onClickDelete={action("削除ボタンがクリックされました")}
    />
  ));
