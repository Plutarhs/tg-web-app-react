export function useTelegram() {
    const tg = window.Telegram && window.Telegram.WebApp;

    if (!tg) {
        console.error("Ошибка: объект Telegram.WebApp не определен.");
        return null; // или возвращайте объект с ошибкой или пустым значением
    }

    const onClose = () => {
        if (tg.close) {
            tg.close();
        } else {
            console.error("Метод close не определен в объекте Telegram.WebApp.");
        }
    };

    const onToggleButton = () => {
        if (tg.MainButton && tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            console.error("Метод hide не определен в объекте tg.MainButton.");
        }
    };

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    };
}