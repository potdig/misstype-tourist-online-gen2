import type { NodeCG } from '../nodecg'

export default function initSubjects(nodecg: NodeCG) {
  const subjectsRep = nodecg.Replicant('subjects', {
    defaultValue: ['誤字ツーリストOnline', 'サブタイトル'],
  })

  nodecg.listenFor('updateSubjects', (subjects, cb) => {
    if (!cb || cb.handled) {
      return
    }

    subjectsRep.value = subjects

    cb && cb(null, true)
  })
}
