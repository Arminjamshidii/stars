const ratingStars = [...document.querySelectorAll(".rating__star")];


function rating() {
    const starActive = " fa-solid ";
    const ratingLengths = ratingStars.length;

    console.log(ratingLengths);
    return (
        ratingStars.forEach(star => {
            // console.log(star);
            star.addEventListener("click", () => {
                let compelete = ratingStars.indexOf(star)
                //  console.log(compelete);


                if (star.className.indexOf(starActive) == -1) {
                    for (let i = 0; i <= compelete; i++) { ratingStars[i].classList.replace("fa-regular", "fa-solid") }

                } else {
                    ratingStars.forEach(star => {
                        star.classList.replace("fa-solid", "fa-regular")

                    });
                    for (let i = 0; i <= compelete; i++) { ratingStars[i].classList.replace("fa-regular", "fa-solid") }
                }


            })

        }));
}
rating()