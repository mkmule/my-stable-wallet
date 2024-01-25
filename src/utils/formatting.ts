interface NumberFormatSettings {
  decimalSeparator: string;
  groupingSeparator: string;
}

const DEFAULT_NUMBER_FORMAT_SETTINGS = {
  decimalSeparator: '.',
  groupingSeparator: ',',
};

export const formatCurrencyNumber = (
  num: number,
  decimals: number,
  options: NumberFormatSettings = DEFAULT_NUMBER_FORMAT_SETTINGS,
) => {
  if (num == null) {
    return '';
  }

  const { decimalSeparator, groupingSeparator } = options;
  const numRounded = num.toFixed(decimals);

  if (decimals) {
    const [numInteger, numDecimals] = numRounded.split('.');
    return `${numInteger.replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      `$1${groupingSeparator}`,
    )}${decimalSeparator}${numDecimals}`;
  }

  return numRounded.replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    `$1${groupingSeparator}`,
  );
};
