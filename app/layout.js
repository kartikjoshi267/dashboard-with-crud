import {Inter} from 'next/font/google'
import './globals.css'
import ModalProvider from "@/components/providers/modal-provider";
import {ScreenResizerProvider} from "@/components/providers/screen-resizer-provider";
import ToastProvider from "@/components/providers/toast-provider";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Dashboard',
    description: 'Dashboard',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <ScreenResizerProvider>
            <body className={inter.className + " bg-zinc-200 overflow-y-hidden"}>
                <ModalProvider/>
                <ToastProvider/>
                {children}
            </body>
        </ScreenResizerProvider>
        </html>
    )
}
