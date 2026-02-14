import '@/components/additional/buttonStyle.module.css';

export default function ActionButton({ text, icon: Icon }) {
    return (
        <a href="#" className="btn-glitch-neon">
            {Icon && <Icon size={20} />}
            <span>{text}</span>
        </a>
    );
}

