import React from 'react'
import { YoutubeIcon } from '@/components/icons/YoutubeIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { FacebookIcon } from '@/components/icons/FacebookIcon'
import { RimacIcon } from '@/components/icons/RimacIcon'

export default function Footer() {
  return (
    <footer className='bg-[#D9D9D9] p-16 flex flex-col items-center gap-8 '>
      <div className=' flex items-center justify-between w-full '>
        <RimacIcon />
        <div className='flex gap-2'>
          <a
            className='cursor-pointer'
            href='https://www.facebook.com/segurosrimac/'
            target='_blank'
          >
            <FacebookIcon />
          </a>
          <a
            className='cursor-pointer'
            href='https://www.linkedin.com/company/rimac-seguros/'
            target='_blank'
          >
            <LinkedInIcon />
          </a>
          <a
            className='cursor-pointer'
            href='https://www.youtube.com/user/SegurosRimac/'
            target='_blank'
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
      <p className='text-[#5E6488]'>
        Todos los derechos reservados. La información contenida en esta página
        web es solo para fines informativos y no constituye asesoramiento legal,
        financiero ni de seguros. Al utilizar este sitio, usted acepta nuestros
        términos y condiciones. Para más detalles, consulte nuestras políticas
        de privacidad y uso
        <br />© 2024 RIMAC SEGUROS Y REASEGUROS. Todos los Derechos Reservados.
      </p>
    </footer>
  )
}
