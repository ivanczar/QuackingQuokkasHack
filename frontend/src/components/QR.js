import React from 'react';

export default function QR(id) {
  return (
    <div>
      <h3>Here is your QR Code</h3>
      <img
        src={`http://api.qrserver.com/v1/create-qr-code/?data=http://192.168.1.7:3000/scan/${id}&amp;size=250x250`}
        alt=''
        title=''
      />
    </div>
  );
}
