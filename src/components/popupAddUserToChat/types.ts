import { User } from "../../api/types";

export interface PopupAddUserToChatProps {
  userSearchResultList?: User[];
  selectedChatId: number;
}
