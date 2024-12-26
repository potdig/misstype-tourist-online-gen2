<script>
  import { subjects } from '../store/subjects'

  function apply() {
    window.nodecg.sendMessage('updateSubjects', $subjects)
  }
</script>

<p>メイン：<input type="text" bind:value={$subjects[0]} /></p>
<p>サブ：<input type="text" bind:value={$subjects[1]} /></p>
<button onclick={apply}>適用</button>
