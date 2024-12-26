import { readable } from 'svelte/store'

const subjects = readable<Subjects>(['', ''], set => {
  window.nodecg.Replicant('subjects').on('change', newValue => {
    set(newValue)
  })
})

export { subjects }
