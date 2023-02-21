<script>
  import { scores } from '~/browser/store/score'
</script>

<div id="side">
  {#each $scores as score}
    <div class={`member ${score.isGuest ? 'guest' : ''}`}>
      <span class="border-2">{score.name}</span>
      <span class="score border-2">{score.score}点</span>
    </div>
  {/each}
</div>

<style scoped>
  #side {
    font-size: 1.6em;
    padding-top: 1em;
    margin-left: calc(1920px * 0.01);
  }

  .member {
    display: flex;
    flex-direction: column;
  }

  .member.guest {
    color: lightskyblue;
  }

  .score {
    align-self: flex-end;
  }
</style>
