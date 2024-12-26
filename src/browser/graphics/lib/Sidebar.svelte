<script>
  import { scores } from '~/browser/store/score'
</script>

<div id="side">
  <h1>参加メンバー</h1>
  <div id="members">
    {#each $scores as score}
      <div class={`member ${score.isGuest ? 'guest' : ''}`}>
        {score.name}
      </div>
    {/each}
  </div>
</div>

<style scoped lang="scss">
  #side {
    font-size: 1.6em;
    margin-left: calc(1920px * 0.005);
  }

  h1 {
    font-size: 1em;
  }

  #members {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .member {
    display: flex;
    flex-direction: column;
    padding-left: 28px;
    font-size: 24px;
    line-height: 32px;

    &:nth-of-type(odd) {
      color: var(--color-1);
    }

    &:nth-of-type(even) {
      color: var(--color-2);
    }
  }

  .member.guest {
    color: orangered;
  }

  .score {
    align-self: flex-end;
  }
</style>
