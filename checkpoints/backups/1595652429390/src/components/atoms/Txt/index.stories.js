import React from "react";
import Txt, { InfoTxt, WarningTxt } from "./index.js";

export default (stories) =>
  stories
    .add("テキスト - S", () => <Txt size="s">テキスト</Txt>)
    .add("テキスト - M", () => <Txt size="m">テキスト</Txt>)
    .add("テキスト - L", () => <Txt size="L">テキスト</Txt>)
    .add("情報テキスト - S", () => <InfoTxt size="s">テキスト</InfoTxt>)
    .add("情報テキスト - M", () => <InfoTxt size="m">テキスト</InfoTxt>)
    .add("情報テキスト - L", () => <InfoTxt size="L">テキスト</InfoTxt>)
    .add("警告テキスト - S", () => <WarningTxt size="s">テキスト</WarningTxt>)
    .add("警告テキスト - M", () => <WarningTxt size="m">テキスト</WarningTxt>)
    .add("警告テキスト - L", () => <WarningTxt size="L">テキスト</WarningTxt>);
