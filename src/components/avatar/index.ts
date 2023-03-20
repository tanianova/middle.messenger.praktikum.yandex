import Block from "../../utils/Block";
import template from "./ui.hbs";
import { AvatarProps } from "./types";
import { PopupEditAvatar } from "../popupEditAvatar";
import { AvatarButton } from "../avatarButton";
import { withStore } from "../../hocs/withStore";

export class AvatarBase extends Block {
  constructor(props: AvatarProps) {
    super(props);
  }

  init() {
    this.children.popup = new PopupEditAvatar({});
    this.children.avatarButton = new AvatarButton({
      class: this.props.class,
      avatar: `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}`,
      events: {
        click: () => {
          (this.children.popup as PopupEditAvatar).show();
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const Avatar = withStore((state) => {
  return state.user || {};
})(AvatarBase);
