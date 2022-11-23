const user = {
  username: "jorge.maloing@gmail.com",
  visits: 10
};
fetch('http://localhost:8080/templates/profile.ejs')
  .then(response => response.text())
  .then(template => {
    const html = ejs.render(template, user);
    const profileContainer = document.getElementById("profile");
    if (profileContainer) {
      profileContainer.innerHTML = html;
    }
  })
