import { onDestroy } from "svelte";

export default function formValidator(node, ruleSet) {
  let childInputs = node.querySelectorAll("input[type=text]");
  let rules = Object.keys(ruleSet);
  let errors = {};

  childInputs.forEach(input => {
    if (rules.includes(input.id)) {
      //because addEventListener didn't seem to work
      input.onblur = checkValidity;
    }
  });

  function checkValidity(event) {
    let elementId = event.target.id;
    processRules(elementId, ruleSet);
  }

  function processRules(control, rules) {
    //check if control meets standards set by rules
    errors[control] = `${control} is invalid`;
    node.dispatchEvent(new CustomEvent("invalid", { detail: errors }));
  }

  onDestroy(() => childInputs.forEach(input => (input.onblur = null)));
}
