import { ConnectKitButton } from "connectkit"
import Image from "next/image"
import logo from "@/assets/logo.svg"
import { ConnectWallet } from "@thirdweb-dev/react"

export default function Navbar({ className, ...rest }) {
    return (
        <header className="bg-gray-200 py-4">
            <div className="container mx-auto flex items-center justify-between md:px-32 px-4">
                <Image src={logo} alt="lil-nouns-logo" />
                <ConnectWallet theme="light" />
            </div>
        </header>

        // <>
        //   <div className='container'>
        //     <div className='NavBar_brandAndTreasuryWrapper__zyIxH'>
        //       <Link className='NavBar_navBarBrand__GT1xz navbar-brand' href='/'>
        //         <Image
        //           src='/static/media/logo.7ff50e048caa0e13155f5d3281e28cde.svg'
        //           className='NavBar_navBarLogo__Ps1s0'
        //           alt='Lil Nouns DAO logo'
        //           width={100}
        //           height={100}
        //         />
        //       </Link>
        //       <div className='nav-item'>
        //         <Image
        //           className='NavBar_testnetImg__Ay3x6'
        //           src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAACACAYAAAA4RVZRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAj1JREFUeNrs3EtOwzAURmGMoEVMeIglMGFZZQeshB3AxmAHiMesgYFhSAM0LbXd2P3OLBUllY+uf13HcYgx7qEN9g0BmSATZIJMMkEmyASZIJNMkAkyQSbIbIuDbd345TEkfZB6djFJ+wNPuqAyQSbIxDdCsj1Ab9Ohv8i62ejl6T1vhn6NVVYTJ53KBJlkYkf7zK8My5qR/UzsX2fI0Fg0Q1WmaRZkouU+s+hLK+tm4uj7UH0myCQTO9tn5qZAX6kyQSbIRJrMLNxX5s7YBP9/62u3KtM0CzKhzyyRoSoTZIJMjDUzu5u0fd5x/4PbvPfrM72dqEyQCTJlZhGmd8uXekNYvtQ5n437fioTZJIJmVmqj6v996hMkEkmZOaffdzAWmXptdJdyFCVSSbIBJkgk0yQiZb6zE33wHTXZZ8flr6fygSZZKJ6/n8O0JrvZ6Z+H7KGsf1+Mfhui3OAQCaZaKfPTHyGwfllWwP5/LB4/csZB0PjO5SpQWWaZkEmKsnMxMTXts4UGEMfrTJNsyATWVl9bbays/KaQ59pmgWZqCczN6S7Dk1n7vQuBpUJMkEmmSATZIJMlOszQ1jsM4eeZ4bT5c8HR/f9FdZOVSbIJBNVU2wPUHMZqTJBJsiUmaUa3J8ZFXoZFWvK2BhVJsgEmTIzW0Ym/f62+1CVCTJBZvOMZt/s0f1inzmf7VW1z9a+WZAJMvWZpZhfHfY++WBHZZIJMkEmyASZZIJMkAkyQSaZIBNkgszd5lOAAQAmV6mPVAXfcgAAAABJRU5ErkJggg=='
        //           alt='testnet noun'
        //           width={100}
        //           height={100}
        //         />
        //         TESTNET
        //       </div>
        //     </div>
        //     <button
        //       aria-controls='basic-navbar-nav'
        //       type='button'
        //       aria-label='Toggle navigation'
        //       className='NavBar_navBarToggle__iZ63d navbar-toggler collapsed'
        //     >
        //       <span className='navbar-toggler-icon'></span>
        //     </button>
        //     <div className='justify-content-end navbar-collapse collapse'>
        //       <div className='my-4 font-bold md:mx-4'>
        //         This is a test environment. Not real Lil Noun tokens.
        //       </div>
        //       <a
        //         className='no-underline'
        //         href='https://lumbar-drive-346.notion.site/lilsandbox-wtf-c660feaf344743359d084406cbcbb3cb'
        //       >
        //         <div className='NavBarButton_wrapper__WJ6fo NavBarButton_coolInfo__NCdXy '>
        //           <div className='NavBarButton_button__Ofhr3'>
        //             <div className='NavBarButton_icon__mrB92'>
        //               <svg
        //                 aria-hidden='true'
        //                 focusable='false'
        //                 data-prefix='fas'
        //                 data-icon='lightbulb'
        //                 className='svg-inline--fa fa-lightbulb fa-w-11 '
        //                 role='img'
        //                 xmlns='http://www.w3.org/2000/svg'
        //                 viewBox='0 0 352 512'
        //               >
        //                 <path
        //                   fill='currentColor'
        //                   d='M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z'
        //                 ></path>
        //               </svg>
        //             </div>
        //             <div>Spec</div>
        //           </div>
        //         </div>
        //       </a>
        //       <div className='NavWallet_nounsNavLink__UmF42 dropdown'>
        //         <div className='NavWallet_wrapper__4F+Tb NavWallet_coolInfo__AGgbm'>
        //           <div className='NavWallet_button__t0k-o'>
        //             <div className='NavWallet_icon__LR9HH'>
        //               <div className='overflow: hidden; width: 21px; height: 21px; background-color: rgb(252, 135, 0); border-radius: 10.5px;'>
        //                 <svg width='21px' height='21px'>
        //                   <rect
        //                     x='0'
        //                     y='0'
        //                     width='21'
        //                     height='21'
        //                     fill='#FC1950'
        //                     transform='translate(2.6180550038596833 4.3482288844887576) rotate(188.7 10.5 10.5)'
        //                   ></rect>
        //                   <rect
        //                     x='0'
        //                     y='0'
        //                     width='21'
        //                     height='21'
        //                     fill='#F1AF02'
        //                     transform='translate(-8.6574595925371 -2.328636034727539) rotate(310.0 10.5 10.5)'
        //                   ></rect>
        //                   <rect
        //                     x='0'
        //                     y='0'
        //                     width='21'
        //                     height='21'
        //                     fill='#03495D'
        //                     transform='translate(-4.376967220559871 -18.373285211704953) rotate(365.7 10.5 10.5)'
        //                   ></rect>
        //                 </svg>
        //               </div>
        //             </div>
        //             <div className='NavWallet_address__DFwIZ'>0x70...77b9</div>
        //             <div className='NavWallet_arrowDown__E4mu0'>
        //               <svg
        //                 aria-hidden='true'
        //                 focusable='false'
        //                 data-prefix='fas'
        //                 data-icon='sort-down'
        //                 className='svg-inline--fa fa-sort-down fa-w-10 '
        //                 role='img'
        //                 xmlns='http://www.w3.org/2000/svg'
        //                 viewBox='0 0 320 512'
        //               >
        //                 <path
        //                   fill='currentColor'
        //                   d='M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z'
        //                 ></path>
        //               </svg>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </>
    )
}
