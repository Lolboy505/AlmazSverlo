import redWallUrl from '@images/RedWall_light.webp';

if (typeof window !== 'undefined') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = redWallUrl;
  document.head.appendChild(link);
}

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
