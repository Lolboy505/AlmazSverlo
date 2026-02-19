import Header from "@/components/header/Header"
import MainData from "@/components/main/MainData"
import Footer from '@/components/footer/Footer'
import ScrollToTop from "@/components/additional/jsx/ScrollToTop"
import Cookie from "@/components/cookie/Cookie.jsx"

import '@/bootstrapAdd.css'
import '@/components/additional/styles/redLine.css'

export default function App() {
  return (
    <>
      <Header />
      <MainData />
      <Footer />
      <ScrollToTop />
      <Cookie />
    </>
  )
}
