import React from 'react'
import Hero from '../components/Hero.jsx';



export default function Header(){
  return (
    <header style={{background:'#eef2ff', padding:'14px 0'}}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div style={{fontWeight:700, fontSize:18}}>Logo</div>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <button className="btn-ghost">Login / Create Account</button>
          <select style={{padding:'8px 10px', borderRadius:10, border:'1px solid rgba(2,6,23,0.06)'}}>
            <option>INR</option>
          </select>
        </div>
      </div>
          
    </header>
        
  )
}
