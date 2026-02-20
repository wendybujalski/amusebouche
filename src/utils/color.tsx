export function hexToRgb(hex: string): { r: number, g: number, b: number } | null {
  // Add hash if it is not present
  if (!hex.startsWith('#')) {
    hex = '#' + hex;
  };
  
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function computeLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    throw new Error('Invalid color format. Use hex strings like "#FFF" or "#000000"');
  }

  let r = rgb.r / 255.0;
  let g = rgb.g / 255.0;
  let b = rgb.b / 255.0;

  // Apply standard gamma correction
  r = (r <= 0.03928) ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = (g <= 0.03928) ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = (b <= 0.03928) ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  // Calculate relative luminance using the W3C formula
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance;
}

export function getContrastTextColor(backgroundHex: string): 'black' | 'white' {
  const luminance = computeLuminance(backgroundHex);
  const threshold = 0.2;

  // If the luminance is above the threshold, use black text, otherwise use white
  return luminance > threshold ? 'black' : 'white';
}
