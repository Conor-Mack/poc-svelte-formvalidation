<script>
  import formValidator from "./formValidator.js";

  export let ruleset = {};

  function buildErrors(e) {
    errors = e;
  }
  let errors = {};
</script>

<form use:formValidator={ruleset} on:invalid={e => buildErrors(e.detail)}>
  <!-- Slot props passes errors back to parent for use in inputs -->
  <slot {errors} />
</form>
