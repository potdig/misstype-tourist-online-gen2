<script lang="ts">
  import { updateAddedScore, type DashboardScore } from '~/browser/store/score'

  export let score: DashboardScore
  let addedScore: number | ''

  function setAddedScoreToStore() {
    updateAddedScore(score.name, addedScore)
  }
</script>

<div class="member">
  <!-- <span class="remove-member" @click="remove(member)">×</span> -->
  {score.name}{score.isGuest ? '（ゲスト）' : ''}: {score.score} +
  <input
    bind:value={addedScore}
    on:change={setAddedScoreToStore}
    type="number"
    maxlength="3"
  />
</div>

<style>
  .member {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .member input {
    width: 3em;
    margin-left: 1em;
  }

  .remove-member {
    margin-right: 0.5em;
    opacity: 0.5;
    cursor: default;
  }

  .remove-member:hover {
    opacity: 0.9;
  }
</style>
