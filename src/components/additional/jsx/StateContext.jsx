import { createContext, useState, useContext } from 'react';

// 1. Создаем сам контекст (пустую коробочку)
const AppStateContext = createContext();

// 2. Создаем Провайдер (этот компонент будет "раздавать" данные)
export const AppStateProvider = ({ children }) => {
    const [isReady, setIsReady] = useState(false);

    // Функция, которую вызовет твоя Обертка, когда всё загрузится
    const setReady = () => setIsReady(true);

    return (
        // Передаем и само значение, и функцию для его изменения
        <AppStateContext.Provider
            value={{ isReady, setReady }}
        >
            {children}
        </AppStateContext.Provider>
    );
};

// 3. Создаем короткую команду для вызова (наш личный хук)
export const useAppState = () => useContext(AppStateContext);