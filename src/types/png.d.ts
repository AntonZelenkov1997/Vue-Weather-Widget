// Инициализация, чтобы Typescript не ругался на импорты фотографий формата .png
declare module "*.png" {
    const value: any;
    export default value;
}