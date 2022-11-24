import QRCode from 'qrcode'
import {useEffect, useRef} from "react";
export const QrCode = () => {

    const QrCodeElement = useRef()

    useEffect(() => {
        QRCode.toCanvas(QrCodeElement.current, 'https://console.firebase.google.com/project/login-test-20634/authentication/users')
    }, []);


    return (
        <canvas ref={QrCodeElement}/>
    )
}