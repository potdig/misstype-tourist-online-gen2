import { readable, type Readable } from 'svelte/store'

const subjects: Readable<Subjects> = readable(['', ''], set => {
  window.nodecg.Replicant('subjects').on('change', newValue => {
    set(newValue)
  })
})

export { subjects }
