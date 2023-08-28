import React from 'react'

export default function Footer(props) {
  return (
    <>
    <footer className="footer" style={{color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#212529':'white'}}>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Weather Forecast. All rights reserved.</p>
      </div>
    </footer>

    </>
  )
}
