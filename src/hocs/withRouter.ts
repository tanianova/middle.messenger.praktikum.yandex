import { Block } from "../utils/Block";
import { router } from "../utils/Router";

export interface PropsWithRouter {
  router: typeof router;
}

export function withRouter(Component: typeof Block<any>) {
  type Props = typeof Component extends typeof Block<infer P extends Record<string, unknown>> ? P : unknown;

  return class WithRouter extends Component {
    constructor(props: Props & PropsWithRouter) {
      super({
        ...props,
        router: router,
      });
    }
  };
}


