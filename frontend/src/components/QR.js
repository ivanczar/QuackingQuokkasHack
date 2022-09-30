import React from 'react'

export default function QR() {
    return (
        <div>
            <h3>Here is you QR Code</h3>
            <img src="http://api.qrserver.com/v1/create-qr-code/?data=http://172.20.10.6:3000&amp;size=250x250" alt="" title="" />    
        </div>
    )
}
