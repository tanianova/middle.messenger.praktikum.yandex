import { nanoid } from "nanoid";
import { EventBus } from "./EventBus";

class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  } as const;

  public id = nanoid(6);
  protected props: P;
  public children: Record<string, Block | Block[]>;
  private eventBus: () => EventBus;
  private _element: HTMLElement | null = null;

  constructor(propsWithChildren: P = {} as P) {
    const eventBus = new EventBus();

    const {
      props,
      children,
    } = this._getChildrenAndProps(propsWithChildren);

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _getChildrenAndProps(childrenAndProps: P): { props: P, children: Record<string, Block | Block[]> } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block | Block[]> = {};

    Object.entries(childrenAndProps)
      .forEach(([key, value]) => {
        if (Array.isArray(value) && value.every(el => el instanceof Block)) {
          children[key] = value;
        } else if (value instanceof Block) {
          children[key] = value;
        } else {
          props[key] = value;
        }
      });

    return {
      props: props as P,
      children,
    };
  }

  private _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events)
      .forEach((eventName) => {
        this._element?.addEventListener(eventName, events[eventName]);
      });
  }

  private _removeEvents() {
    const { events = {} } = this.props;

    if (!events || !this._element) {
      return;
    }

    Object.keys(events)
      .forEach((eventName) => {
        this._element!.removeEventListener(eventName, events[eventName]);
      });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init() {
    this.init();

    this.eventBus()
      .emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  public componentDidMount() {
  }

  public dispatchComponentDidMount() {
    this.eventBus()
      .emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children)
      .forEach((child) => {
        if (Array.isArray(child)) {
          child.forEach(el => el.dispatchComponentDidMount());
        } else {
          child.dispatchComponentDidMount();
        }

      });
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus()
        .emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // @ts-ignore
  protected componentDidUpdate(oldProps: P, newProps: P) {
    return true;
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.render();
    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }
    this._element = newElement;

    this._addEvents();
  }

  protected compile(template: (context: any) => string, context: any) {
    const contextAndStubs = { ...context };

    Object.entries(this.children)
      .forEach(([name, component]) => {
        if (Array.isArray(component)) {
          contextAndStubs[name] = component.map(child => `<div data-id="${child.id}"></div>`);
        } else {
          contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
        }

      });

    const html = template(contextAndStubs);

    const temp = document.createElement("template");

    temp.innerHTML = html;

    Object.entries(this.children)
      .forEach(([, component]) => {
        if (Array.isArray(component)) {
          component.forEach(child => {
            const stub = temp.content.querySelector(`[data-id="${child.id}"]`);

            if (!stub) {
              return;
            }

            child.getContent()
              ?.append(...Array.from(stub.childNodes));

            stub.replaceWith(child.getContent()!);
          });
        } else {
          const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

          if (!stub) {
            return;
          }

          component.getContent()
            ?.append(...Array.from(stub.childNodes));

          stub.replaceWith(component.getContent()!);
        }

      });

    return temp.content;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  public getContent() {
    return this.element;
  }

  private _makePropsProxy(props: P) {
    // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target };

        target[prop as keyof P] = value;

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus()
          .emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  show() {
    this.getContent()!.style.display = "block";
  }

  hide() {
    this.getContent()!.style.display = "none";
  }

  toggle() {
    if (this.getContent()!.style.display === "block") {
      this.getContent()!.style.display = "none";
    } else {
      this.getContent()!.style.display = "block";
    }
  }
}

export default Block;
