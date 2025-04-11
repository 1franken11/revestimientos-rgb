export interface Opinion {
    id: number;
    name: string;
    comment: string;
    date: string;
    approved: boolean;
  }
  // types.ts
export interface EmbeddedReview {
  id: number;
  iframeSrc: string;
}
