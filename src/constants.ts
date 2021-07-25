export const hobbyList: Array<string> = [
  "Баскетбол",
  "Нарезка Photoshop/Fireworks макетов на скорость, в экстримельных условиях, на природе",
  "Высокоточная вёрстка под старые версии Microsoft Internet Explorer, начиная с версии 5.01",
  "Чтение книг",
  "Вязание",
  "Йога",
  "Компьютерная графика (дизайн, 3D, flash, спецэффекты и т.д.)",
  "Сноуборд",
  "Футбол",
];

interface Types {
  MY: string;
  FRIEND: string;
}
export const types: Types = {
  MY: "my",
  FRIEND: "friend",
};
interface Errors {
  EMPTY: string;
  SOME: string;
}
export const errors: Errors = {
  EMPTY: "Поле хобби пустое",
  SOME: "Такое хобби уже существует",
};
