import Header from "./components/header/Header"
import MainData from "./components/main/MainData"
import Footer from './components/footer/Footer'
import ScrollToTop from "./components/additional/ScrollToTop"

export default function App() {
  return (
    <>
      <div style={{
        background:"black"
      }}>
        <Header />
        <MainData />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}
