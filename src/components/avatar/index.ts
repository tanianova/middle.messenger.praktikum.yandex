import Block from "../../utils/Block";
import template from "./ui.hbs";
import { AvatarProps } from "./types";
import { PopupEditAvatar } from "../popupEditAvatar";
import { AvatarButton } from "../avatarButton";

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super(props);
  }

  init() {
    this.children.popup = new PopupEditAvatar({events: {
        click: () => {
          (this.children.popup as PopupEditAvatar).hide();
        },
      }});
    this.children.avatarButton = new AvatarButton({
      class: this.props.class,
      events: { click: () => {
        (this.children.popup as PopupEditAvatar).show();
        } },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
