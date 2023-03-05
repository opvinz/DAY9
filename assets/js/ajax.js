
const testimonyData = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/65c405e67e152cf858cd", true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("error loading Data!");
    }
  };
  xhr.onerror = () => {
    reject("Network Error!!");
  };
  xhr.send();
});

async function allTestimonials() {
  try {
    const response = await testimonyData;
    console.log(response);

    let testimonialHTML = "";
    response.forEach((item) => {
      testimonialHTML += `<div class="testimonial">
      <img src="${item.image}" class="profile-testimonial" />
      <p class="quote">"${item.quote}"</p>
      <p class="author">- ${item.author}</p>
      <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
      </div>`
    });
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (err) {
    console.log(err);
  }
}
allTestimonials();

async function filterTestimonials(rating) {
  const responseFiltered = await testimonyData;
  let testimonialHTML = "";
  const testimonialFiltered = responseFiltered.filter((item) => {
    return item.rating === rating;
  });
  if (testimonialFiltered.length === 0) {
    console.log(testimonialFiltered);
    testimonialHTML += `<h1> Data not Found </h1>`;
  } else {
    testimonialFiltered.forEach((item) => {
      testimonialHTML += `<div class="testimonial">
      <img src="${item.image}" class="profile-testimonial" />
      <p class="quote">"${item.quote}"</p>
      <p class="author">- ${item.author}</p>
      <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
      </div>`
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}
