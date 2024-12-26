<script lang="ts">
  import type { DashboardScore } from '~/browser/store/score'

  interface Props {
    score: DashboardScore
  }

  let { score = $bindable() }: Props = $props()

  function remove() {
    window.nodecg.sendMessage('deleteMember', score.name)
  }
</script>

<div class="member">
  <button class="remove-member" onclick={remove}>×</button>
  {score.name}{score.isGuest ? '（ゲスト）' : ''}: {score.score} +
  <input bind:value={score.addedScore} type="number" maxlength="3" />
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
    width: fit-content;
    height: fit-content;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    margin-right: 0.5em;
    opacity: 0.5;
    cursor: default;
    color: white;
    font-size: 1.3em;
    padding: 0;
  }

  .remove-member:hover {
    opacity: 0.9;
  }
</style>
