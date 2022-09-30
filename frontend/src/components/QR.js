import React from 'react'

export default function QR() {
    return (
        <div className="qr-container">
            <img src="http://api.qrserver.com/v1/create-qr-code/?data=http://172.20.10.6:3000&amp;size=300x300" alt="" title="" />    
        </div>
    )
}
