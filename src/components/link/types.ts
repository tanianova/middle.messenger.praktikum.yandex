import { PropsWithRouter } from "../../hocs/withRouter";

export interface LinkProps extends PropsWithRouter {
  text: string;
  class?: string;
  to: string;
  events?: Record<string, EventListenerOrEventListenerObject>;
}
