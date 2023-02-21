import { CreateNodecgInstance } from 'ts-nodecg/browser'
import type { BundleConfig } from '~/types/bundle-config'
import type { MessageMap } from '~/types/message'
import type { ReplicantMap } from '~/types/replicant'

export type NodeCG = CreateNodecgInstance<
  'misstype-tourist-online-gen2',
  BundleConfig,
  ReplicantMap,
  MessageMap
>
