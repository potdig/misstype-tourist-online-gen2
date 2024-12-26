import { mount } from 'svelte'
import '~/browser/graphics/graphics.css'
import Graphics from '~/browser/graphics/Graphics.svelte'

const app = mount(Graphics, {
  target: document.getElementById('app')!,
})

export default app
