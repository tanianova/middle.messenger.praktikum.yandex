import img from "../../../static/img/ava.jpeg";

export const chatList = [
  {
    name: "Андрей",
    message: "Изображение",
    time: "10:49",
    unread: "2",
    src: img,
  },
  {
    name: "Киноклуб",
    message: "стикер",
    time: "12:00",
    lastMessageMine: true,
  },
  {
    name: "Илья",
    message: "Друзья, у меня для вас особенный выпуск новостей!...",
    time: "15:12",
    unread: "4",
  },
  {
    name: "Вадим",
    message: "Круто!",
    time: "Пт",
    class: "selected",
  },
];

export const chatMessageList = [
  {
    text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в\n    какой-то момент попросила\n    Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью\n    500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с\n    собой забрали только кассеты с пленкой.\n\n    Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не\n    попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
    time: "11:56",
  },
  {
    text: "Круто!",
    isMine: true,
    time: "12:26",
  },
];
