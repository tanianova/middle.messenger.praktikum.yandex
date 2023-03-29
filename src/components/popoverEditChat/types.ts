import { ChatInfo, User } from "../../api/types";

export interface PopoverEditChatProps {
  selectedChatUserList: User[],
  selectedChat: ChatInfo;
  showPopupAddUserToChat: () => void
  showPopupChatUserList: () => void
}
