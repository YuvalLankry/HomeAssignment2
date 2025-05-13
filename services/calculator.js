function calculatePrice() {
  const siteType = document.getElementById("siteType").value;
  const numPages = parseInt(document.getElementById("numPages").value);
  const customDesign = document.getElementById("customDesign").value;
  const resultDiv = document.getElementById("result");


  if (!siteType || isNaN(numPages) || !customDesign) {
    resultDiv.textContent = "Please fill out all the fields.";
    resultDiv.style.color = "red";
    return;
  }


  let basePrice = 0;

  switch (siteType) {
    case "business":
      basePrice = 1000;
      break;
    case "store":
      basePrice = 2000;
      break;
    case "blog":
      basePrice = 1500;
      break;
  }


  let extraPages = 0;
  if (numPages > 1) {
    extraPages = numPages - 1;
  }

  const extraPagesCost = extraPages * 200;

  
  let designCost = 0;
  if (customDesign === "yes") {
    designCost = 1000;
  } else {
    designCost = 0;
  }


  const totalPrice = basePrice + extraPagesCost + designCost;

 
  resultDiv.style.color = "#2e7d32";
  resultDiv.textContent = ` Estimated Quote: ₪${totalPrice}`;
}

function resetForm() {
  document.getElementById("siteType").selectedIndex = 0;
  document.getElementById("numPages").value = "";
  document.getElementById("customDesign").selectedIndex = 0;
  document.getElementById("result").textContent = "";
}

