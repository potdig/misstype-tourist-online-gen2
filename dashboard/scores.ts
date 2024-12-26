import { mount } from 'svelte'
import Scores from '~/browser/dashboard/Scores.svelte'

const app = mount(Scores, {
  target: document.getElementById('app')!,
})

export default app
