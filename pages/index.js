import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Assinatura from '../components/Assinatura'

export default function Home() {
  return (
    <div style={{ justifyContent: "center" }} className={`containt-register `}>
      <Assinatura />
    </div>
  )
}
