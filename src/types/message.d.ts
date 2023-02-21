import { Score } from './score'

type UpdateScoreArgs = {
  name: string
  addedScore: number
}

export type MessageMap = {
  updateScores: {
    data: UpdateScoreArgs[]
    result: boolean
  }
  updateSubjects: {
    data: Subjects
    result: boolean
  }
}
