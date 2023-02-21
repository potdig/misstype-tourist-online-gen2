import type { NodeCG } from '../nodecg'

export default function initScores(nodecg: NodeCG) {
  const scoresRep = nodecg.Replicant('scores', {
    defaultValue: [
      { name: 'ルゼ', score: 0, isGuest: false },
      { name: 'potdig', score: 0, isGuest: false },
      { name: 'かまたり', score: 0, isGuest: false },
      { name: 'まさお', score: 0, isGuest: false },
      { name: 'zrk', score: 0, isGuest: false },
      { name: 'daisan', score: 0, isGuest: false },
      { name: 'あおお', score: 0, isGuest: false },
      { name: 'Cosith', score: 0, isGuest: false },
      { name: 'Morph', score: 0, isGuest: false },
      { name: '緋藤レイル', score: 0, isGuest: false },
      { name: 'たばた', score: 0, isGuest: false },
      { name: 'BACO', score: 0, isGuest: false },
    ],
  })

  nodecg.listenFor('updateScores', (args, cb) => {
    if (!cb || cb.handled) {
      return
    }

    scoresRep.value = scoresRep.value.map(score => ({
      name: score.name,
      score:
        score.score +
        (args.find(({ name }) => name === score.name)?.addedScore || 0),
      isGuest: score.isGuest,
    }))

    cb && cb(null, true)
  })

  nodecg.listenFor('addMember', ({ name, isGuest }, cb) => {
    if (!cb || cb.handled) {
      return
    }

    scoresRep.value = [...scoresRep.value, { name, score: 0, isGuest }]

    cb && cb(null, true)
  })
}
