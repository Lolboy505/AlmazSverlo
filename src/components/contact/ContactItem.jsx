export default function ContactItem({ icon, label, value, href }) {
    return (
        <div className="d-flex align-items-center gap-3">
            <div className="text-red-500 p-2 rounded-3" style={{ background: 'var(--color-red-700)' }}>
                {icon}
            </div>
            <div>
                <p className="text-neutral-500 mb-0">{label}</p>
                {href ? (
                    <a href={href} className="text-white text-decoration-none fw-bold hover-red">
                        {value}
                    </a>
                ) : (
                    <p className="text-white mb-0">{value}</p>
                )}
            </div>
        </div>
    );
}
