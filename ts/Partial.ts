export type Partial<T> = {
  [P in keyof T]?: T[P];
};

export type Require<T> = {
  [P in keyof T]-?: T[P];
};

export type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
