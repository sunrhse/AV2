import { Outlet } from 'react-router-dom'
import Topbar from '../components/layout/Topbar'
import Sidebar from '../components/layout/Sidebar'

export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div className="orb" style={{ width: 520, height: 520, background: '#c7d9f5', top: -120, left: -80 }} />
      <div className="orb" style={{ width: 400, height: 400, background: '#d4c7f5', bottom: 0, right: -100 }} />
      <div className="orb" style={{ width: 280, height: 280, background: '#c7e8f5', top: '40%', left: '40%' }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Topbar />
        <div style={{ display: 'flex', flex: 1 }}>
          <Sidebar />
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
