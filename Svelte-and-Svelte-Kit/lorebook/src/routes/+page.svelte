<script>
  import LoreCard from '$lib/LoreCard.svelte'
  let spells = ['Ignis', 'Umbra', 'Tempus']
</script>

<h1>Lorebook</h1>

<div class='grid'>
  {#each spells as spell}
    <LoreCard name={spell} />
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
  }
</style>