import { Message, User } from "../../api/types";

export interface ChatMessageProps {
  data: Message;
  user: User;
}
