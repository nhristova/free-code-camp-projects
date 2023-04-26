import { Quote } from "../types/Quote";

export const getRandomQuote = (q: Quote[]): Quote => {
  const i = Math.random() * 10 | 0;
  return q[i];
}