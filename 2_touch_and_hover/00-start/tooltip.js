var anchors = document.querySelectorAll(".anchor-tooltip");
anchors.forEach((anchor)=> {
    var tooltiptext = anchor.getAttribute("title"),
        tooltip = document.createElement("span");
    tooltip.className = "title-tooltip";
    tooltip.innerHTML = tooltiptext;
    anchor.appendChild(tooltip);
})