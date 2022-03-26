import { describe, expect, it } from 'vitest'
import { api, isSuccess, setApiConfig } from '../../src'
import { config } from '../config'

describe('user relation should work', () => {
  setApiConfig(config)

  const username = '82D23B32-CF36-4C59-AD6F-D05E3552CBF3'
  const limit = 10

  it('getFollowerList should work', async () => {
    const result = await api.userRelation.getFollowerList(username, { limit })
    expect(isSuccess(result)).toBe(true)
    expect(result.data.data.length).toBe(limit)
  })

  it('getFollowingList should work', async () => {
    const result = await api.userRelation.getFollowingList(username, { limit })
    expect(isSuccess(result)).toBe(true)
    expect(result.data.data.length).toBe(limit)
  })
})
