declare module 'homepage/*'
declare module 'payment/*'
interface ImportMeta {
    env: {
        VITE_PAYMENT_URL: string;
    }
}