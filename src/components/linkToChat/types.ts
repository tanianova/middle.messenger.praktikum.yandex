import { PropsWithRouter } from "../../hocs/withRouter";

export interface LinkProps extends PropsWithRouter {
  to: string;
  events?: Record<string, EventListenerOrEventListenerObject>;
}
