export const getKeys = <T>(obj: T) =>
	Object.keys(obj as object) as Array<keyof T>;

/* another option, but it's harder to read
  export const getKeys = Object.keys as <T extends object>(
    obj: T
  ) => Array<keyof T>;
*/
