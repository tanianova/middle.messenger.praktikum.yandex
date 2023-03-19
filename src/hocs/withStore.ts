import Block from "../utils/Block";
import store, { State, StoreEvent } from "../utils/Store";
import { isEqual } from "../helpers/isEqual";

export const withStore = (mapStateToProps: (state: State) => any) => (Component: typeof Block<any>) => {
  let propsFromState: any;
  return class WithStore extends Component {
    constructor(props: Record<string, any>) {
      propsFromState = mapStateToProps(store.getState());
      super({ ...props, ...propsFromState });

      store.on(StoreEvent.Updated, (newState) => {
        const newPropsFromState = mapStateToProps(newState);

        if (isEqual(propsFromState, newPropsFromState)) {
          return;
        }

        propsFromState = { ...newPropsFromState };

        this.setProps({ ...propsFromState });
      });
    }
  };
};
