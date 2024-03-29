import { BgStyles } from 'src/components/models';

export const shiftColor = (color: string, multiply: number): string => {
  const countColor = (stringSlice: string): number => {
    const result = Math.floor(parseInt(stringSlice, 16) * multiply);

    return result > 255 ? 255 : result;
  };
  const normalize = (color: string): string =>
    color.length === 1 ? `0${color}` : color;
  const red = normalize(countColor(color.slice(1, 3)).toString(16));
  const green = normalize(countColor(color.slice(3, 5)).toString(16));
  const blue = normalize(countColor(color.slice(5)).toString(16));

  return `#${red}${green}${blue}`;
};

export const getBgStyles = (bg: BgStyles): string => {
  const { color, gradient } = bg;
  if (gradient)
    return `background-image: linear-gradient(to bottom, ${gradient
      .map((g) => `${g.color} ${g.percent}%`)
      .join(', ')});`;
  if (color) return `background-color: ${color};`;
  return '';
};

export const getBgImage = (bg: BgStyles): string => {
  const { image } = bg;
  if (image) return `background: url('/img/${image}');`;
  return '';
};

export const getGradientColor = (bg: BgStyles, number = 0): string => {
  const DEFAULT_TOP = '#999999';
  const DEFAULT_BOTTOM = '#eeeeee';

  return (
    bg?.gradient?.[number].color || (number > 0 ? DEFAULT_TOP : DEFAULT_BOTTOM)
  );
};
