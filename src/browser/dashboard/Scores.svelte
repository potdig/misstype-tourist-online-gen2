<script lang="ts">
  import { applyScores, scores } from '../store/score'
  import Score from './lib/Score.svelte'

  let name: string
  let isGuest: boolean

  function add() {
    window.nodecg.sendMessage('addMember', { name, isGuest })
  }
</script>

<p>
  競技ごとに点数を増減して、競技が終わったら「適用」ボタンで集計してください
</p>
<div id="scoreboard">
  {#each $scores as score}
    <Score {score} />
  {/each}
  <button on:click={applyScores}>適用</button>
  <div id="add-member">
    <p>新メンバー追加</p>
    <input bind:value={name} type="text" />
    <p>
      <input bind:checked={isGuest} type="checkbox" />
      <span>ゲスト</span>
    </p>
    <br />
    <button on:click={add}>追加</button>
  </div>
</div>

<style>
  p {
    margin: 0;
  }

  #scoreboard {
    display: flex;
    flex-direction: column;
  }

  #add-member {
    margin-top: 1em;
  }
</style>
