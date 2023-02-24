export interface ButtonArrowProps {
  type: 'submit' | 'button';
  class?: string;
  events?: Record<string, EventListenerOrEventListenerObject>;
}
