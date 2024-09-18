"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    let nameElement = document.getElementById("name");
    let emailElement = document.getElementById("email");
    let phoneElement = document.getElementById("phone");
    let educationElement = document.getElementById("edu");
    let experienceElement = document.getElementById("experience");
    let skillElement = document.getElementById("skill");
    //
    let usernameElement = document.getElementById("username");
    if (nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillElement &&
        usernameElement) {
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
            shareableLinkButton.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                try {
                    let shareableLink = `https://example.com/resumes/${username.replace(/\s+/g, "_")}_cv.html`;
                    yield navigator.clipboard.writeText(shareableLink);
                    alert("Shareable link copied to clipboard");
                }
                catch (err) {
                    console.error("Failed to copy link", err);
                    alert("Failed to copy link to clipboard. Please try again.");
                }
            }));
            buttonContainer.appendChild(shareableLinkButton);
        }
        else {
            console.error("Resume output container not found");
        }
    }
    else {
        console.error("Form elements are missing");
    }
});
