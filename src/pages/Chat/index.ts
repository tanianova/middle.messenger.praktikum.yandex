import Block from '../../utils/Block';
import template from './ui.hbs';
import { PopoverEditUser } from '../../components/popoverEditUser';
import { SearchInput } from '../../components/searchInput';
import { chatList, chatMessageList } from './const';
import { ChatItem } from '../../components/chatItem';
import { ChatMessage } from '../../components/chatMessage';
import { ButtonArrow } from '../../components/buttonArrow';
import { Button } from '../../components/button';
import { RenderDom } from '../../utils/RenderDom';

export class ChatPage extends Block {
  init() {
    this.children.popover = new PopoverEditUser();
    this.children.profileLink = new Button({
      text: 'Профиль',
      type: 'button',
      class: ' chat-link',
      events: {
        click: () => {
          RenderDom('profile');
        },
      },
    });
    this.children.searchInput = new SearchInput();
    this.children.chatList = chatList.map(chat => new ChatItem({ ...chat }));
    this.children.chatMessageList = chatMessageList.map(message => new ChatMessage({ ...message }));
    this.children.buttonArrow = new ButtonArrow({
      type: 'submit',
      class: 'arrow-reverse',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
