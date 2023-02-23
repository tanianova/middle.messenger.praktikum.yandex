export interface ButtonArrowProps {
  type: 'submit' | 'button';
  class?: string;
  events?: { click: (e?: Event) => void };
}
