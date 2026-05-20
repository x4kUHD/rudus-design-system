import { Button } from '../../src/Button/Button'

export default function App() {
  return (
    <div style={{ 
      background: 'var(--bg-base)', 
      gap: '12px'
    }}>
      <div style={{
        color: '#ffffff'
      }}>
        Buttons
      </div>

      <div style={{      display: 'flex',
      alignItems: 'flex-start'}

      }>
        <Button variant="primary">Primary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
    
  )
}