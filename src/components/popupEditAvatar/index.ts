import { Block } from "../../utils/Block";
import  template  from "./ui.hbs";
import { Button } from "../button";
import { InputAvatar } from "../inputAvatar";
import { PopupEditAvatarProps } from "./types";
import { ButtonClose } from "../buttonClose";
import { UserController } from "../../controllers/UserController";

export class PopupEditAvatar extends Block {
  constructor(props: PopupEditAvatarProps) {
    super(props);
  }

  init() {
    this.children.button = new Button({
      text: "Поменять",
      type: "submit",
      class: "button popup__upload-button",
      events: {
        click: (e: Event) => this.onSubmit(e),
      },
    });
    this.children.inputAvatar = new InputAvatar();
    this.children.closeButton = new ButtonClose({
      events: {
        click: () => this.hide(),
      },
    });
  }

  async onSubmit(e: Event) {
    e.preventDefault();
    const form = new FormData(document.querySelector(".avatar__form") as HTMLFormElement);
    if (form.get("avatar")) {
      await UserController.updateAvatar(form);
      this.hide();
    }
  }

  render() {
    return this.compile(template, {});
  }
}
