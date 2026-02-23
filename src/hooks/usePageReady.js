import { useAppState } from "@/context/AppState/AppStateContext.jsx";

export const usePageReady = () => {
    const { isReady } = useAppState();
    const isBot = typeof navigator !== 'undefined' &&
        navigator.userAgent.includes("HeadlessChrome");
    return isReady || isBot;
};