<script lang="ts">
  import Sidebar from './lib/Sidebar.svelte'
  import Subject from './lib/Subject.svelte'
  import Video from './lib/Video.svelte'
</script>

<div>
  <Video />
  <Sidebar />
  <Subject />
</div>

<style scoped>
  div {
    width: 1920px;
    height: 1080px;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: max-content 1fr;
  }
</style>
