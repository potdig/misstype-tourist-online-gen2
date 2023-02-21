import type { NodeCG } from '../nodecg'
import initScores from './score'
import initSubjects from './subject'

export default function message(nodecg: NodeCG) {
  initScores(nodecg)
  initSubjects(nodecg)
}
