import { AppStateProvider } from '@/context/AppState/AppStateContext.jsx'
import Preloader from '@/components/additional/jsx/Preloader.jsx'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

import "bootstrap/dist/css/bootstrap.min.css"
import '@/pages/bootstrapAdd.css'
import '@/components/additional/styles/redLine.css'
import '@/components/additional/styles/buttonStyle.css'
import '@/pages/index.css'

export default function Layout({ children }) {
    return (
        <AppStateProvider>
            <Preloader>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </Preloader>
        </AppStateProvider>
    )
}