export const BASE_PATH = process.env.NODE_ENV === "production" ? "/jasmine-portfolio" : "";

export function withBasePath(path: string) {
  return `${BASE_PATH}${path}`;
}
