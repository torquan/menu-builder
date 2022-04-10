export function truncateString(text: string, maxLength: number) {
  if (text.length > maxLength - 3) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
}
