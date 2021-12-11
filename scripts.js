const content = document.querySelector(".content");


window.addEventListener("load",async () => {
    await fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            const value = data.map(val => {    
            let temp = `
                      <div class="cards col mb-5">
                        <div class="card h-100">
                            <!-- image-->
                            <img class="card-img-top" src="${val.image}">
                            <!-- details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${val.title}</h5>
                                    <!-- Product price-->
                                    ${val.price}
                                </div>
                            </div>
                            <!-- actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                `
                content.innerHTML += temp;
            });
        })
        .catch(error => console.log(error))
});