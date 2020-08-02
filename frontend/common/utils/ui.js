/**
 * UIKit
 * @description tools for ui
 * @author John Kindem
 * @since 2020-8-2
 */
export class UIKit {
    static __clickParented = {};

    /**
     * prevent double click for button
     * @param btnName name of button
     * @param time time to prevent double click
     * @param onClickAvailable callback to call when click available
     * @param onTimeRefresh callback to call when time refresh
     */
    static preventDoubleClick(btnName, time, onClickAvailable, onTimeRefresh) {
        if (UIKit.__clickParented[btnName]) {
            return;
        }
        UIKit.__clickParented[btnName] = true;
        setTimeout(() => { UIKit.__clickParented[btnName] = false; }, time * 1000);
        let timeCount = time;
        const interval = setInterval(() => { onTimeRefresh(--timeCount); }, 1000);
        setTimeout(() => { clearInterval(interval); }, time * 1000);
        onClickAvailable();
    }
}