import React from "react";
import { action } from "@storybook/addon-actions";
import NotificationList from "./index.js";

const notifications = [
  {
    id: 0,
    thumbnail: "/mock/images/img01.jpg",
    title: "コンポーネント思考でUIを設計しよう！Volume.01",
    channelName: "UIチャンネル",
    startAt: "1507032000000",
    startAt: "1507035600000",
  },
  {
    id: 1,
    thumbnail: "/mock/images/img02.jpg",
    title: "コンポーネント思考でUIを設計しよう！Volume.02",
    channelName: "UIチャンネル",
    startAt: "1507032000000",
    startAt: "1507035600000",
  },
  {
    id: 2,
    thumbnail: "/mock/images/img01.jpg",
    title: "コンポーネント思考でUIを設計しよう！Volume.03",
    channelName: "UIチャンネル",
    startAt: "1507032000000",
    startAt: "1507035600000",
  },
  {
    id: 3,
    thumbnail: "/mock/images/img02.jpg",
    title: "コンポーネント思考でUIを設計しよう！Volume.04",
    channelName: "UIチャンネル",
    startAt: "1507032000000",
    startAt: "1507035600000",
  },
];

export default (stories) =>
  stories.add("デフォルト", () => (
    <NotificationList
      programs={notifications}
      onClickDelete={action("削除ボタンがクリックされました")}
    />
  ));
