"use client"
import { ChangeEvent, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import QRCode from 'react-qr-code'
import QRCodeGen from 'qrcode'
import { AnimatePresence, motion } from "framer-motion"
import { BottomGradient } from '@/components/ui/bottom-gradient'
import Head from 'next/head'


export default function QrCode() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleQrcodeGenerate(url: string) {
    QRCodeGen.toDataURL(url, {
      width: 400,
      margin: 3
    }, (_, url) => {
      if (url) {
        setQrcodeLink(url)
      }
    })
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value

    setLink(value)

    if (value !== '') {
      handleQrcodeGenerate(value)
    }
  }

  const qrCodeAnimation = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <>
      <Head key='qrcodeGen'>
        <link rel="icon" href="/qr-code/favicon.ico" type="image/x-icon" sizes="16x16" />
      </Head>
      <div className='flex flex-col items-center justify-center bg-black 
      w-full h-screen px-10 py-10 sm:px-[30%] gap-20'
      >
        <h1 className='text-center text-slate-200 text-3xl md:text-6xl sm:text-5xl'>Gerador de QR code</h1>

        <div className="flex flex-col w-full gap-4">
          <Label htmlFor='link' className='text-slate-200 text-xl'>
            Seu link
          </Label>
          <Input
            id='link'
            type='text'
            onChange={handleChange}
            placeholder='Link'
            className='bg-brand-martinique text-slate-200 '
          />
          <div className='flex flex-col items-center w-full space-y-5 pt-4'>
            <AnimatePresence>
              {link !== '' && (
                <motion.div
                  initial="hidden"
                  animate={link !== '' ? "visible" : "hidden"}
                  exit="hidden"
                  variants={qrCodeAnimation}
                  transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  <QRCode
                    value={link}
                    className={`${link !== '' ? 'flex' : 'hidden'}`}
                  />

                  <Button
                    variant={'secondary'}
                    className={`${link !== '' ? 'flex' : 'hidden'} mt-6 
                    bg-gradient-to-br from-brand-martinique/[0.8] to-brand-martinique relative group/btn
                    shadow-[0px_0px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] text-white
                  `}
                    asChild
                  >
                    <a href={qrcodeLink} download='meu-qrcode.jpg'>
                      Baixar QR code
                      <BottomGradient />
                    </a>

                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7594484605572689"
          crossOrigin="anonymous">
        </script> */}
          {/* qrcode-footer */}
          {/* <ins
          className="adsbygoogle"
          style={{ display: 'block', backgroundColor: 'black' }}
          data-ad-client="ca-pub-7594484605572689"
          data-ad-slot="2768251025"
          data-ad-format="auto"
          data-adtest="on"
          data-full-width-responsive="true">
        </ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({ });
        </script> */}
        </div>
      </div>
    </>
  )
}
