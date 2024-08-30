function validateSyntax() {
  let input = document.getElementById("petInput").value;
  let result = document.getElementById("result");

  // Regular expression to get the correct syntax

  let syntax = /^pet_\d{4}[a-zA-Z]+$/;

  if (syntax.test(input)) {
    result.textContent = "Valid Syntax 🟢";
  } else {
    result.textContent = "Invalid Syntax 🔴";
  }
}
