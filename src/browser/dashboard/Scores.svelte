<script lang="ts">
  import { applyScores, scores } from '../store/score'
  import Score from './lib/Score.svelte'
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
    <!-- <label for="new-name">新メンバー追加</label>
    <br />
    <input id="new-name" v-model="newName" type="text" />
    <br />
    <input id="is-guest" v-model="isGuest" type="checkbox" />
    <label for="new-name">ゲスト</label>
    <br />
    <button @click="add">追加</button> -->
  </div>
</div>

<style>
  #scoreboard {
    display: flex;
    flex-direction: column;
  }

  #add-member {
    margin-top: 1em;
  }
</style>
