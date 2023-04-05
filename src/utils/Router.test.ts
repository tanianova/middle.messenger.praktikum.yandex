import { expect } from "chai";
import sinon from "sinon";
import { BlockConstructable, router } from "./Router";
import { Routes } from "../index";

describe("Router", () => {
  const originalHistoryBack = global.window.history.back;
  const originalHistoryForward = global.window.history.forward;

  before(() => {
    global.window.history.back = () => {
      if (typeof window.onpopstate === "function") {
        window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
      }
    };
    global.window.history.forward = () => {
      if (typeof window.onpopstate === "function") {
        window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
      }
    };
  });

  after(() => {
    global.window.history.back = originalHistoryBack;
    global.window.history.forward = originalHistoryForward;
  });

  const getContentFake = sinon.fake.returns(document.createElement("div"));

  const BlockMock = class {
    getContent = getContentFake;
  } as unknown as BlockConstructable;

  it("use() should return Router instance", () => {
    const result = router.use(Routes.Auth, BlockMock);

    expect(result)
      .to
      .eq(router);
  });

  it("should render a page on history back action", () => {
    router
      .use(Routes.Auth, BlockMock)
      .start();

    router.back();

    expect(getContentFake.callCount)
      .to
      .eq(1);
  });

  it("should render a page on history forward action", () => {
    router
      .use(Routes.Auth, BlockMock)
      .start();

    router.forward();

    expect(getContentFake.callCount)
      .to
      .eq(1);
  });

  it("should render a page on start", () => {
    router
      .use(Routes.Auth, BlockMock)
      .start();

    expect(getContentFake.callCount)
      .to
      .eq(1);
  });
});
