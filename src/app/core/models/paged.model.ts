

export interface Paged<T> {
  count: string;
  next: string;
  previous: string;
  results: T[];
}
