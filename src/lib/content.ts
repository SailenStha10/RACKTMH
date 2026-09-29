/** True for unfilled `[[TODO: ...]]` placeholders (see content/TODO_CONTENT.md). */
function isTodo(value: string): boolean {
  return value.startsWith("[[TODO");
}

export { isTodo };
