import { readable } from 'svelte/store'

const stub: Subjects = ['誤字ツーリストOnline', 'サブタイトル']

const subjects = readable<Subjects>(stub, set => {
  if (window.nodecg)
    window.nodecg.Replicant('subjects').on('change', newValue => {
      set(newValue)
    })
})

export { subjects }
