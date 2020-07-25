import React from "react";
import styles from "./styles.css";

/**
 * IconPresenter
 * @param {*} param0
 */
export const IconPresenter = ({
  iconName,
  width = 20,
  height = 20,
  ...props
}) => (
  <img
    src={`https://placehold.jp/${iconName}.png`}
    alt={iconName}
    width={width}
    height={height}
    {...props}
  />
);

/**
 * IconContainer
 * @param {*} param0
 */
export const IconContainer = ({
  presenter,
  onClick,
  className = "",
  ...props
}) => {
  if (onClick) className += ` ${styles.clickable}`;
  return presenter({ onClick, className, ...props });
};

/**
 * iconFactory
 * @param {*} iconName
 */
export const iconFactory = (iconName) => (props) => (
  <IconContainer
    presenter={(presenterProps) => <IconPresenter {...presenterProps} />}
    {...{ iconName, ...props }}
  />
);

export const TrashCanIcon = iconFactory("150x150");
export const ChevronRightIcon = iconFactory("200x200");
export const SearchIcon = iconFactory("250x250");
export const SettingsIcon = iconFactory("300x300");
