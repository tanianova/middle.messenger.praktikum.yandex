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
    this.children.avatarButton = this.createAvatarButton(this.props);
  }

  createAvatarButton(props: AvatarProps) {
    return new AvatarButton({
      class: props.class,
      avatar: `https://ya-praktikum.tech/api/v2/resources${props.avatar}`,
      events: {
        click: () => {
          (this.children.popup as PopupEditAvatar).show();
        },
      },
    });
  }

  componentDidUpdate(_oldProps: AvatarProps, newProps: AvatarProps): boolean {
    this.children.avatarButton = this.createAvatarButton(newProps);
    return true;
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const Avatar = withStore((state) => {
  return { ...state.user };
})(AvatarBase);
