import { get, writable, type Writable } from 'svelte/store'
import type { Score } from '~/types/score'

type DashboardScore = Score & {
  addedScore: number | ''
}

const scores: Writable<DashboardScore[]> = writable([], set => {
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

export { scores, applyScores, type DashboardScore }
