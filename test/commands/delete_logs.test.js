const {expect, test} = require('@oclif/test')

describe('delete_logs', () => {
  test
  .stdout()
  .command(['delete_logs'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['delete_logs', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
