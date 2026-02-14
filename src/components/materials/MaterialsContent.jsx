import { Check } from 'lucide-react';
import { useEffect, useState } from "react";
import { useRef } from 'react';

export default function MaterialsContent({ styleBorder, styleImg, styleText, classNameFullContent, classNameContent, imgSize, classNameStyleText, material, index }) {
    let [flag, setFlag] = useState(true)
    let box = useRef(null)
    let text = useRef(null)

    useEffect(() => {
        text.current.style.whiteSpace = "nowrap"
    }, [text])

    const handleClick = (e) => {
        if (flag) {
            box.current.style.transform = "translateY(-12px)"
            box.current.style.backgroundImage = "var(--color-card-red-700-right)";
            text.current.style.whiteSpace = ""
        }
        else {
            box.current.style.transform = "translateY(0px)"
            box.current.style.backgroundImage = "var(--color-card)";
            text.current.style.whiteSpace = "nowrap"
        }
        setFlag((prev) => (!prev))
    }

    return (
        <li
            className={classNameFullContent}
        >
            <div
                ref={box}
                className={classNameContent}
                style={{ ...styleBorder }}
                onClick={(e) => handleClick(e)}
            >
                <div style={styleImg}>
                    <Check size={imgSize} width={100} color={"black"} />
                </div>
                <span
                    ref={text}
                    className={classNameStyleText}
                    style={{ ...styleText }}
                >
                    {material}
                </span>
            </div>
        </li>
    )
}

