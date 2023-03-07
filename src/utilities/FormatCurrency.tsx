import React from "react";

const CURRENCY_FORMATTER = Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
const FormatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};

export default FormatCurrency;
