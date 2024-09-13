import type { Partial } from "./Partial";
import type { Pick } from "./Record";
import type { Omit } from "./Record";

export type MarkPropsAsOptional<
  T extends object,
  K extends keyof T = keyof T,
> = Flatten<Partial<Pick<T, K>> & Omit<T, K>>;

export type MarkPropsAsOptionalStruct = MarkPropsAsOptional<
  {
    foo: string;
    bar: number;
    baz: boolean;
  },
  "bar"
>;

export type Flatten<T> = {
  [KeyType in keyof T]: T[KeyType] extends object
    ? Flatten<T[KeyType]>
    : T[KeyType];
} & {};
