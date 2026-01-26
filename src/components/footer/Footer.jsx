import { TIN, fullName, nameOrg } from '@/components/additional/contactData'


export default function Footer() {
    return (
        <footer className="pt-4"
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
                    <p className="mx-2">
                        ©2026 {nameOrg}. Все права защищены.
                    </p>
                    <p className="m-0 p-0 col-12 ">
                        {fullName}
                    </p>
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
