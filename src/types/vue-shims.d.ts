// Инициализация, чтобы Typescript не ругался на импорты Vue-компонентов формата .vue
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}