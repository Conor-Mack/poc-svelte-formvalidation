<script>
  export let id = "";
  export let text = "";
  export let isValid = true;
  export let errorMsg = "";
</script>

<style>
  span {
    color: red;
  }
</style>

<label for={id}>{text}</label>
<input {id} type="text" />
{#if !isValid}
  <span>{errorMsg}</span>
{/if}
