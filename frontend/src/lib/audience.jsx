import { createContext, useContext, useState } from 'react'

const AudienceContext = createContext(['women', () => {}])

export function AudienceProvider({ children }) {
  const [audience, setAudience] = useState('men')
  return <AudienceContext.Provider value={[audience, setAudience]}>{children}</AudienceContext.Provider>
}

export function useAudience() {
  return useContext(AudienceContext)
}

export function AudienceSwitch() {
  const [audience, setAudience] = useAudience()
  return (
    <div className="audience" role="group" aria-label="Whose portrait to show">
      <button type="button" className={audience === 'women' ? 'is-on' : ''} aria-pressed={audience === 'women'} onClick={() => setAudience('women')}>
        Women
      </button>
      <button type="button" className={audience === 'men' ? 'is-on' : ''} aria-pressed={audience === 'men'} onClick={() => setAudience('men')}>
        Men
      </button>
    </div>
  )
}
