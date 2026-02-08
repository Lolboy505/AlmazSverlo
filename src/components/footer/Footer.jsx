import { TIN, fullName, nameOrg } from '@/components/additional/contactData'


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
                            ©2026 {nameOrg}. Все права защищены.
                        </span>
                        <span className="d-block">
                            Информация на сайте не является публичной офертой (ст. 437 ГК РФ).
                        </span>
                    </div>
                    <div className="m-0 p-0 col-12 mt-3">
                        {fullName}
                    </div>
                    <div className="my-2 d-flex justify-content-center align-items-center flex-column flex-md-row">
                        <p className="m-0 p-0 col-12 col-md-6">
                            ИНН: {TIN}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
