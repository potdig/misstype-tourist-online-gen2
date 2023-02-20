import { Score } from './score'

export type MessageMap = {
  updateScores: {
    data: Score[]
    result: boolean
  }
  updateSubjects: {
    data: Subjects
    result: boolean
  }
}
