<script>
  import Form from "./Form.svelte";
  import Input from "./Input.svelte";

  let ruleset = { name: { isRequired: true } };
</script>

<Form let:errors {ruleset}>
  <Input
    id="name"
    text="Name"
    isValid={!('name' in errors)}
    errorMsg={errors['name']} />
  <Input
    id="phone"
    text="Phone"
    isValid={!('phone' in errors)}
    errorMsg={errors['name']} />
</Form>
