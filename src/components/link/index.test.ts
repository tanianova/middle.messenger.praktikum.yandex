import { BaseLink as Link } from "./index";
import { router as Router } from "../../utils/Router";
import { expect } from "chai";
import sinon from "sinon";

describe("Link component", () => {
  const text = "Home page";
  const to = "/";
  const callback = sinon.stub<[string]>();
  const router = { go: callback } as unknown as typeof Router;

  beforeEach(()=>{
    callback.reset();
  });

  it("should render", () => {
    new Link({
      to,
      text,
      router,
    });
  });

  it("should render passed label", () => {
    const text = "Home page";
    const link = new Link({
      to,
      text,
      router,
    });
    expect(link.element?.textContent)
      .to
      .eq(text);
  });

  it("should call Router.go on click", () => {
    const link = new Link({
      to,
      text,
      router,
    });
    link.element?.click();
    expect(callback.calledWith(to))
      .to
      .eq(true);
  });
});
