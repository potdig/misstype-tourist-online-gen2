import { mount } from 'svelte'
import Subjects from '~/browser/dashboard/Subjects.svelte'

const app = mount(Subjects, {
  target: document.getElementById('app')!,
})

export default app
