import { useState, useEffect } from 'react';

export default function App({ children }) {
    // return (<>{children}</>)
    const [isLoading, setIsLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // не работатет в node.js
    useEffect(() => {
        setIsMounted(true);
        setIsLoading(true);

        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 10);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    if (!isMounted) {
        return <>{children}</>;
    }

    return (
        <>
            {isLoading && (
                <div style={{
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
                    transition: 'opacity 0.5s ease'
                }}>
                    <div
                        className="spinner-border"
                        role="status"
                        style={{
                            height: "50px",
                            width: "50px",
                            color: "var(--color-red-700)",
                        }}
                    >
                    </div>
                </div>
            )}

            <div style={{
                visibility: isLoading ? 'hidden' : 'visible',
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 0.3s ease'
            }}>
                {children}
            </div>
        </>
    );
};
