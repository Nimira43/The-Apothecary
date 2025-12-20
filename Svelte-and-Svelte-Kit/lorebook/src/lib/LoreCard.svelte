<script>
  export let name
</script>

<div class='card'>
  <h2>{name}</h2>
</div>

<style>
  .card {
    padding: 1rem;
    border: 1px solid #111;
    border-radius: 3px;
    background-color: #eee;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.02);
  }
</style>
