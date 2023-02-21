<script>
  import { subjects } from '~/browser/store/subjects'
</script>

<div id="bottom">
  <p id="main-caption" class="border-3">{$subjects[0]}</p>
  <p id="sub-caption" class="border-2">{$subjects[1]}</p>
</div>

<style>
  #bottom {
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
    margin-left: 1em;
  }

  #bottom p {
    margin: 0;
  }

  #main-caption {
    font-size: 2.8em;
    line-height: 1.2em;
  }

  #sub-caption {
    font-size: 1.6em;
  }
</style>
