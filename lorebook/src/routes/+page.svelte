<script>
  let spells = ['Ignis', 'Umbra', 'Tempus']
</script>

<h1>Lorebook</h1>

<ul>
  {#each spells as spell}
  <li>{spell}</li>
  {/each}
</ul>