const { describe, test, beforeEach, afterEach, before } = require('mocha')
const { createSandbox } = require('sinon')
const LastSeen = require('../src/LastSeen')
const { expect } = require('chai')

describe('Last seen suite test', function () {
  /**
   * @type {import('sinon').SinonSandbox}
   */
  let sandbox

  /**
   * @type {Date}
   */
  let now



  beforeEach(() => {
    sandbox = createSandbox({
      useFakeTimers: new Date('2023-09-27')
    })

  })

  afterEach(() => {
    sandbox.restore()
  })

  test('If the person was online less than a second ago, it should return Online', () => {
    const lastSeen = new Date(2023, 8, 26, 20, 59, 59)

    const instance = new LastSeen(lastSeen)
    const result = instance.getLastSeen()
    const expected = 'Online'

    expect(result).to.be.equal(expected)

  })
  test('If the person was last online 59 seconds ago, it should return “Last seen 59 seconds ago', () => {
    const lastSeen = new Date(2023, 8, 26, 20, 59, 35)

    const instance = new LastSeen(lastSeen)
    const result = instance.getLastSeen()
    const expected = 'Last seen 25 seconds ago'

    expect(result).to.be.equal(expected)
  })
  test('if the person was last online 60–119 seconds ago, it should return “Last seen 1 minute ago', () => {
    const lastSeen = new Date(2023, 8, 26, 20, 55)

    const instance = new LastSeen(lastSeen)
    const result = instance.getLastSeen()
    const expected = 'Last seen 5 minutes ago'

    expect(result).to.be.equal(expected)

  })
  test('If the person was last online 60 * 60 seconds ago, it should return “Last seen 1 hour ago', () => {
    const lastSeen = new Date(2023, 8, 26, 18, 55)

    const instance = new LastSeen(lastSeen)
    const result = instance.getLastSeen()
    const expected = 'Last seen 2 hour ago'

    expect(result).to.be.equal(expected)

  })
  test('if the person was last online 24 ago, it should return n days ago', () => {
    const lastSeen = new Date(2023, 8, 24, 18, 55)

    const instance = new LastSeen(lastSeen)
    const result = instance.getLastSeen()
    const expected = 'Last seen 2 days ago'

    expect(result).to.be.equal(expected)
  })
  test('if the person was last online 30 days ago, it should return n month,s ago', () => {
    const lastSeen = new Date(2023, 6, 24, 18, 55)

    const instance = new LastSeen(lastSeen)
    const result = instance.getLastSeen()
    const expected = 'Last seen 2 months ago'

    expect(result).to.be.equal(expected)
  })
  test('if the person was last onliner 12 months ago, it shold return n years ago', () => {
    const lastSeen = new Date(2020, 6, 24, 18, 55)

    const instance = new LastSeen(lastSeen)
    const result = instance.getLastSeen()
    const expected = 'Last seen 3 years ago'

    expect(result).to.be.equal(expected)
  })

})

