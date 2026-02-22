import { useAppState } from "@/components/additional/jsx/StateContext.jsx";

export const usePageReady = () => {
    const { isReady } = useAppState();
    const isBot = typeof navigator !== 'undefined' &&
        navigator.userAgent.includes("HeadlessChrome");
    return isReady || isBot;
};