import { Check } from 'lucide-react';
import { useState, memo } from "react";
import styles from "./MaterialsContent.module.css";

// Используем memo, чтобы карточки не перерендеривались просто так
const MaterialsContent = memo(({ material }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => setIsActive(!isActive);

    return (
        <li className={`${styles.fullContent} col-12 col-md-6 col-xxl-4 `}>
            <div
                className={`${styles.cardBorder} ${isActive ? styles.activeCard : ''}`}
                onClick={toggleActive}
            >
                <div className={styles.iconCircle}>
                    <Check size={20} strokeWidth={3} color="black" />
                </div>
                <span className={`${styles.text} ${isActive ? styles.textFull : styles.textTruncate}`}>
                    {material}
                </span>
            </div>
        </li>
    );
});

export default MaterialsContent;