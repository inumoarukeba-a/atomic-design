import React from "react";
import styles from "./styles.css";

/**
 * HeadingPresenter
 * @param {*} param0
 */
export const HeadingPresenter = ({
  tag: Tag,
  visualLevel,
  className,
  ...props
}) => (
  <Tag
    className={[styles.h, styles[`h${visualLevel}`], className].join(" ")}
    {...props}
  />
);

/**
 * HeadingUnderlinedPresenter
 * @param {*} param0
 */
export const HeadingUnderlinedPresenter = ({
  tag: Tag,
  visualLevel,
  className,
  ...props
}) => (
  <Tag
    className={[
      styles.h,
      styles.underlined,
      styles[`h${visualLevel}`],
      className,
    ].join(" ")}
    {...props}
  />
);

export const HeadingContainer = ({
  presenter,
  level = 2,
  visualLevel,
  ...props
}) => {
  level = Math.max(0, Math.min(6, level));
  visualLevel = typeof visualLevel !== "undefined" ? visualLevel : level;
  const tag = `h${level}`;

  return presenter({ tag, visualLevel, ...props });
};

/**
 * Heading
 * @param {*} props
 */
const Heading = (props) => (
  <HeadingContainer
    presenter={(presenterProps) => <HeadingPresenter {...presenterProps} />}
    {...props}
  />
);
export default Heading;

/**
 * HeadingUnderlined
 * @param {*} props
 */
export const HeadingUnderlined = (props) => (
  <HeadingContainer
    presenter={(presenterProps) => (
      <HeadingUnderlinedPresenter {...presenterProps} />
    )}
    {...props}
  />
);