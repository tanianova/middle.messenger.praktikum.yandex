export interface InputFieldProps {
  type: string;
  name: string;
  label: string;
  required?: boolean;
  value?: string;
  readonly?: boolean;
  events?: Record<string, EventListenerOrEventListenerObject>;
}
