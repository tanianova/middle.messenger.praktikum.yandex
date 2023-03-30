import proxyquire from "proxyquire";
import { expect } from "chai";
import sinon from "sinon";
import { type Block as BlockType } from "./Block";

const eventBusMock = {
  on: sinon.stub(),
  emit: sinon.stub(),
};

const { Block: Block } = proxyquire("./Block", {
  "./EventBus": {
    EventBus: class {
      emit = eventBusMock.emit;
      on = eventBusMock.on;
    },
  },
}) as { Block: typeof BlockType };

describe("Block", () => {
  beforeEach(() => {
    eventBusMock.on.reset();
    eventBusMock.emit.reset();
  });

  class ComponentMock extends Block {
  }

  it("should fire init event on initialization", () => {
    new ComponentMock({});

    expect(eventBusMock.emit.calledWith("init"))
      .to
      .eq(true);
  });

});
