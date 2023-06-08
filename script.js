const submitButton = document.getElementById("submitButton");
const locationSelect = document.getElementById("location");
const myForm = document.getElementById("myForm");

submitButton.addEventListener("mouseover", moveButton);
submitButton.addEventListener("mouseenter", updateButtonColor);
submitButton.addEventListener("click", function() {
  submitButton.style.backgroundColor = "";
});

function moveButton() {
  const formRect = myForm.getBoundingClientRect();
  const formLeft = formRect.left;
  const formBottom = formRect.bottom;

  const buttonWidth = submitButton.offsetWidth;
  const buttonHeight = submitButton.offsetHeight;

  const buttonLeft = formLeft;
  const buttonTop = formBottom + 20; // Adjust the spacing as desired

  submitButton.style.left = `${buttonLeft}px`;
  submitButton.style.top = `${buttonTop}px`;

  if (!submitButton.classList.contains("moved")) {
    submitButton.style.transform = `translateX(0)`;
    submitButton.classList.add("moved");
  }
}
function populateCountries() {
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
    "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
    "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
    "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
    "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  for (let i = 0; i < countries.length; i++) {
    const option = document.createElement("option");
    option.text = countries[i];
    locationSelect.appendChild(option);
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateButtonColor() {
  const randomColor = getRandomColor();
  submitButton.style.backgroundColor = randomColor;
}

populateCountries();

// Function to get the maximum top and left positions for the button
function getMaxPositions() {
  const buttonRect = submitButton.getBoundingClientRect();
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
  const maxLeft = viewportWidth - buttonRect.width;
  const maxTop = viewportHeight - buttonRect.height;
  
  return { maxLeft, maxTop };
}

// Function to move the button randomly within the visible area of the page
function moveButton() {
  const { maxLeft, maxTop } = getMaxPositions();
  
  const randomLeft = Math.floor(Math.random() * maxLeft);
  const randomTop = Math.floor(Math.random() * maxTop);
  
  submitButton.style.left = `${randomLeft}px`;
  submitButton.style.top = `${randomTop}px`;
}

// Move the button initially
moveButton();

// Re-calculate and adjust the button position when the window is resized
window.addEventListener("resize", moveButton);
