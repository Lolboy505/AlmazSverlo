import { FOOTER } from '@/constants/contactData'


export default function Footer() {
    return (
        <footer className="py-4"
            style={{
                borderTop: "1px solid grey"
            }}
        >
            <div
                className="pt-3"
                style={{
                    overflow: 'hidden'
                }}>
                <div className="text-center">
                    <div className="d-flex row mx-2">
                        <span className="d-block">
                            {FOOTER.nameOrg}
                        </span>
                        <span className="d-block">
                            {FOOTER.publicOferta}
                        </span>
                    </div>
                    <div className="m-0 p-0 col-12 mt-3">
                        {FOOTER.fullName}
                    </div>
                    <div className="my-2 d-flex justify-content-center align-items-center flex-column flex-md-row">
                        <p className="m-0 p-0 col-12 col-md-6 col-lg-3">
                            ИНН: {FOOTER.tin}
                        </p>
                        <a
                            className="m-0 p-0 col-12 col-md-6 col-lg-3"
                            href="/privacy.html"
                            style={{ color: 'white' }}
                            target="_blank"
                            rel="noreferrer">
                            Политика конфиденциальности
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
