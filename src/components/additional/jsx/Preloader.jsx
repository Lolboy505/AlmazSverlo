import { useState, useEffect, useMemo } from 'react';
import { useAppState } from '@/context/AppState/AppStateContext.jsx';


export default function App({ children }) {
    const { setReady } = useAppState()
    const [isLoading, setIsLoading] = useState(true);

    // не работатет в node.js
    useEffect(() => {

        const handleLoad = () => {
            requestAnimationFrame(() => {
                setIsLoading(false);
                setReady();
            })
        };

        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            handleLoad();
        } else {
            window.addEventListener('DOMContentLoaded', handleLoad);
            const backupTimeout = setTimeout(handleReady, 3000);
            return () => {
                window.removeEventListener('DOMContentLoaded', handleLoad);
                clearTimeout(backupTimeout)
            }
        }
    }, [setReady]);

    const overlayStyle = useMemo(() => ({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0f0f0f',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? 'all' : 'none',
        transition: 'opacity 0.4s ease-out',
        willChange: 'opacity'
    }), [isLoading]);

    return (
        <>
            <div style={overlayStyle}>
                {isLoading && (
                    <div
                        className="spinner-border"
                        role="status"
                        style={{
                            height: "50px",
                            width: "50px",
                            color: "var(--color-red-700)",
                        }}
                    />
                )}
            </div>

            <div style={{
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 0.5s ease-in',
                willChange: 'opacity'
            }}>
                {children}
            </div>
        </>
    );
};
