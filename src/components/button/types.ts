export interface ButtonProps {
  text: string;
  class: string;
  type: string;
  events?: Record<string, EventListenerOrEventListenerObject>;
}
