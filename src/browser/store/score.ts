import { get, writable } from 'svelte/store'
import type { Score } from '~/types/score'

type DashboardScore = Score & {
  addedScore: number | ''
}

const scores = writable<DashboardScore[]>([], set => {
  window.nodecg.Replicant('scores').on('change', newValue => {
    set(
      newValue.map(score => ({
        ...score,
        addedScore: 0,
      }))
    )
  })
})

function applyScores() {
  window.nodecg.sendMessage(
    'updateScores',
    get(scores).map(score => ({
      name: score.name,
      addedScore: score.addedScore === '' ? 0 : score.addedScore,
    }))
  )
}

export { applyScores, scores, type DashboardScore }
