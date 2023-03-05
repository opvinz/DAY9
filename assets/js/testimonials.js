
const testimonialData = [
{
    author: "Elon Musk",
    quote: "I Like it",
    image: "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
    rating: 5
},
{
    author: "warren buffett",
    quote: "excellent",
    image: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-96962297_526783_jgxnqo.jpg",
    rating: 5
},
{
    author: "Bryan",
    quote: "Nothing Special",
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 3
},
{
    author: "Jeff bezos",
    quote: "5 star for you",
    image: "https://statik.tempo.co/data/2021/02/03/id_998068/998068_720.jpg",
    rating: 5
},
{
    author: "Pertamina",
    quote: "Pasti pass",
    image: "https://t-2.tstatic.net/jogja/foto/bank/images/gaji-karyawan-pertamina-terkini.jpg",
    rating: 5
},
{
    author: "KFC",
    quote: "Mantep banget",
    image: "https://cdn.kfc.com.my/dinein.kfc.com.my/images/join-us/by-people-for-people-01.png",
    rating: 5
},
{
    author: "Jeri Utama",
    quote: "tidak sesuai ekspektasi",
    image: "https://media.istockphoto.com/id/1400280368/photo/happy-businessman-working-on-his-laptop-at-home-handsome-businessman-reading-an-email-on-his.jpg?b=1&s=170667a&w=0&k=20&c=mc9FiePkCPzKWRyexNf2lMo9BkDej_OpNloSDMNsutM=",
    rating: 2
},
{
    author: "Rizki Ismail",
    quote: "Jelek",
    image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 1
},
{
    author: "Surya",
    quote: "Okelah",
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4
},
]


function allTestimonials() {
    let testimonialHTML = '';

    testimonialData.forEach((item) => {
        testimonialHTML += `<div class="testimonial">
                     <img src="${item.image}" class="profile-testimonial" />
                     <p class="quote">"${item.quote}"</p>
                     <p class="author">- ${item.author}</p>
                     <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                 </div>`
    })

    document.getElementById('testimonials').innerHTML = testimonialHTML;
}

allTestimonials()


function filterTestimonials(rating) {
    let testimonialHTML = '';

    const testimonialFiltered = testimonialData.filter((item) => {
        return item.rating === rating
    })


    if (testimonialFiltered.length === 0) {
        testimonialHTML = `<h1> Data not found! </h1>`
    } else {
        testimonialFiltered.forEach((item) => {
            testimonialHTML += `<div class="testimonial">
                <img src="${item.image}" class="profile-testimonial" />
                <p class="quote">"${item.quote}"</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
            </div>`
        })
    }

    document.getElementById('testimonials').innerHTML = testimonialHTML
}