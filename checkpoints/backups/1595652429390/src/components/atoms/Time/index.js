import React from "react";
import moment from "moment";
import "moment/locale/ja";

/**
 * TimePresenter
 * @param {*} props
 */
export const TimePresenter = (props) => <time {...props} />;

/**
 * TimeContainer
 * @param {*} param0
 */
export const TimeContainer = ({
  presenter,
  children: value,
  dateTime,
  format = "MM月DD日（ddd）HH:mm",
  ...props
}) => {
  value = parseInt(value, 10);

  var children;
  if (isValid(!value)) {
    children = "有効な時間表現ではありません";
  } else {
    children = formatDatetime(value, format);
  }

  if (!dateTime) {
    dateTime = formatDatetime(value);
  }

  return presenter({ children, dateTime, ...props });
};

/**
 * Time
 * @param {*} props
 */
const Time = (props) => (
  <TimeContainer
    presenter={(presenterProps) => <TimePresenter {...presenterProps} />}
    {...props}
  />
);
export default Time;

moment.locale();

/**
 * isValid
 * @param {*} unixtime
 */
function isValid(unixtime) {
  return moment(unixtime, "x, true").isValid();
}

/**
 * formatDatetime
 * @param {*} dateTime
 * @param {*} format
 */
function formatDatetime(dateTime, format = "YYYY-MM-DDTHH:mm") {
  return moment(dateTime).format(format);
}
