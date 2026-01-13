import { TIN, PSRNSP , fullName} from '@/components/additional/contactData'
export default function Footer() {
    return (
        <footer className="pt-4"
            style={{
                borderTop:"1px solid grey "
            }}
        >
            <div 
                className="pt-3"
            style={{
                overflow: 'hidden'
            }}>
                <div className="text-center">
                    <p className="mx-2">
                        ©2020-2026 AlmazSverlo (или название любое другое). Все права защищены.
                    </p>
                    <p className="m-0 p-0 col-12 ">
                        ИП {fullName}
                    </p>
                    <div className="my-2 d-flex justify-content-center align-items-center flex-column flex-md-row">
                        <p className="m-0 p-0 col-12 col-md-6">
                            ИНН: {TIN}
                        </p>
                        <p className="m-0 p-0 col-12 col-md-6">
                            ОГРНИП: {PSRNSP}
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center p-0 pt-2 m-0">
                <a
                    className="text-center"
                    href="https://github.com/Lolboy505"
                    style={{
                        color:"grey",
                        textShadow: '0 0 30px rgb(255, 255, 255)',
                        textDecoration: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Создано Pentemiven
                </a>
            </div>
        </footer>
    )
}
