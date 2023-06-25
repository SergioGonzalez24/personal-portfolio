import { HolaComponent, HolaTools } from '../components/home'
export default function Home() {
  return (
    <div>
      <section className="hero is-primary">
        <HolaComponent />
      </section>
      <section className="section">
        <HolaTools />
      </section>
      
    </div>
  )
}