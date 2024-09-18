document.getElementById("form")?.addEventListener("submit", function (event) {
  event.preventDefault();

  let nameElement = document.getElementById("name") as HTMLInputElement;
  let emailElement = document.getElementById("email") as HTMLInputElement;
  let phoneElement = document.getElementById("phone") as HTMLInputElement;
  let educationElement = document.getElementById("edu") as HTMLInputElement;
  let experienceElement = document.getElementById(
    "experience"
  ) as HTMLInputElement;
  let skillElement = document.getElementById("skill") as HTMLInputElement;
  //
  let usernameElement = document.getElementById("username") as HTMLInputElement;

  if (
    nameElement &&
    emailElement &&
    phoneElement &&
    educationElement &&
    experienceElement &&
    skillElement &&
    usernameElement
  ) {
    let name = nameElement.value;
    let email = emailElement.value;
    let phone = phoneElement.value;
    let edu = educationElement.value;
    let experience = experienceElement.value;
    let skill = skillElement.value;
    let username = usernameElement.value;

    let uniquePath = `resumes/${username.replace(/\s+/g, "_")}_cv.html`;

    let resumeOutput = ` <h2>Resume</h2>
   <p> ${name}</p>   
    <p> ${email}</p>   
    <p>  ${phone}</p>

    <h3> Education </h3>
    <p>  ${edu}</p>

    <h3> Experience </h3>
    <p> ${experience}</p>

    <h3> Skill </h3>
    <p>  ${skill} </p>
    `;

    let downloadLink = document.createElement("a");
    downloadLink.href =
      `data:text/html;charset=utf-8,` + encodeURIComponent(resumeOutput);
    downloadLink.download = uniquePath;
    downloadLink.textContent = "Download Your Resume";

    let resumeOutputElement = document.getElementById("resumeOutput");

    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
      //1
      resumeOutputElement.classList.remove("hidden");

      resumeOutputElement.appendChild(downloadLink);
      //2
      let buttonContainer = document.createElement("div");
      buttonContainer.id = "buttonContainer";
      resumeOutputElement.appendChild(buttonContainer);
      //Add Pdf button
      let downloadButton = document.createElement("button");
      downloadButton.textContent = "Download as PDF";
      downloadButton.addEventListener("click", () => {
        window.print();
      });
      buttonContainer.appendChild(downloadButton);
      // Add shareable link button
      let shareableLinkButton = document.createElement("button");
      shareableLinkButton.textContent = "Copy Shareable Link";
      shareableLinkButton.addEventListener("click", async () => {
        try {
          let shareableLink = `https://example.com/resumes/${username.replace(
            /\s+/g,
            "_"
          )}_cv.html`;
          await navigator.clipboard.writeText(shareableLink);
          alert("Shareable link copied to clipboard");
        } catch (err) {
          console.error("Failed to copy link", err);
          alert("Failed to copy link to clipboard. Please try again.");
        }
      });
      buttonContainer.appendChild(shareableLinkButton);
    } else {
      console.error("Resume output container not found");
    }
  } else {
    console.error("Form elements are missing");
  }
});
