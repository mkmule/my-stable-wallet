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

export const splitFormattedNumber = (
  displayNum: string,
  decimals: number,
  options: NumberFormatSettings = DEFAULT_NUMBER_FORMAT_SETTINGS,
): [string, string] => {
  if (decimals) {
    let [numInteger, numDecimals = ''] = displayNum.split(
      options.decimalSeparator,
    );
    numInteger = numInteger
      .replaceAll(options.groupingSeparator, '')
      .replace(/\s/g, '');

    return [numInteger, numDecimals];
  }

  return [
    displayNum.replaceAll(options.groupingSeparator, '').replace(/\s/g, ''),
    '',
  ];
};

export const parseFormattedNumber = (
  displayNum: string,
  decimals: number,
  options: NumberFormatSettings = DEFAULT_NUMBER_FORMAT_SETTINGS,
): number | null => {
  if (decimals) {
    let [numInteger, numDecimals = ''] = splitFormattedNumber(
      displayNum,
      decimals,
      options,
    );

    if (numInteger.length && numDecimals.length) {
      return Number(`${numInteger}.${numDecimals}`);
    } else if (numInteger.length || numDecimals.length) {
      return Number(
        `${numInteger || '0'}.${numDecimals || '0'.repeat(decimals)}`,
      );
    }

    return null;
  }

  const [numInteger] = splitFormattedNumber(displayNum, decimals, options);
  if (numInteger.length) {
    return Number(displayNum.replaceAll(options.groupingSeparator, ''));
  }

  return null;
};

export const roundCeil = (num: number, decimals: number = 0): number => {
  const decimalMultiplier = Number(`1${'0'.repeat(decimals)}`);

  return Math.ceil(num * decimalMultiplier) / decimalMultiplier;
};
export const round = (num: number, decimals: number = 0): number => {
  const decimalMultiplier = Number(`1${'0'.repeat(decimals)}`);

  return Math.round(num * decimalMultiplier) / decimalMultiplier;
};
