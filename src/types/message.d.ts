import { Score } from './score'

type UpdateScoreArgs = {
  name: string
  addedScore: number
}

type AddMemberArgs = {
  name: string
  isGuest: boolean
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
  addMember: {
    data: AddMemberArgs
    result: boolean
  }
}
