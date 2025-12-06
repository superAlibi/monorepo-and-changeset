import { createFileRoute } from '@tanstack/react-router'
import { MyButton } from 'lib2'
import { squared } from 'lib1'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <MyButton type="primary" />
      <p>squared(10): {squared(10)}</p>
    </div>
  )
}
