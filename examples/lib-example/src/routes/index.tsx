import { createFileRoute } from '@tanstack/react-router'
import { CustomButton } from 'lib2'
import { squared } from 'lib1'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <CustomButton className='bg-red-500' type="button" onClick={() => alert('clicked')}>Click me</CustomButton>
      <p>squared(10): {squared(10)}</p>
    </div>
  )
}
