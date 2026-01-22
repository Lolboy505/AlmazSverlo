import { useState, useEffect } from 'react';

export default function App({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

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
                            height:"50px",
                            width:"50px",
                            color:"var(--color-red-700)",
                        }}
                    >
                    </div>
                </div>
            )}

            <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
                {children}
            </div>
        </>
    );
};
