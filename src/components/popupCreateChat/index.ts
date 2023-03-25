import { Block } from "../../utils/Block";
import  template  from "./ui.hbs";
import { PopupCreateChatProps } from "./types";
import { Button } from "../button";
import { ButtonClose } from "../buttonClose";
import { InputField } from "../inputField";
import { formIsValid, getFormData } from "../../helpers/getFormData";
import { ChatsController } from "../../controllers/ChatsController";

export class PopupCreateChat extends Block {
  constructor(props: PopupCreateChatProps) {
    super(props);
  }

  init() {
    this.children.button = new Button({
      text: "Создать",
      type: "submit",
      class: "button popup__upload-button",
      events: {
        click: (e: Event) => this.onSubmit(e),
      },
    });
    this.children.input = new InputField({
      type: "text",
      name: "title",
      label: "",
      required: true,
      errorMessage: "Введите название",
    });
    this.children.closeButton = new ButtonClose({
      events: {
        click: () => this.hide(),
      },
    });
  }

  async onSubmit(e: Event) {
    e.preventDefault();
    const form = this.getContent()
      ?.querySelector(".create-chat__form") as HTMLElement | null;
    const data = getFormData(form);
    const isValid = formIsValid(form);
    if (isValid) {
      await ChatsController.create(data["title"]);
      this.hide();
    }
  }

  render() {
    return this.compile(template, {});
  }
}
