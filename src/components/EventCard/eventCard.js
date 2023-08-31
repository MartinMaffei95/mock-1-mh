export const createCardTemplate = ({ description, image, price, title, url, }) => {
    return `

            <div class="w-full relative  aspect-square flex overflow-hidden basis-2/4 flex-grow">
              <img
                class="object-cover h-full w-full"
                alt="${title} image"
                src="${image}"
              />
            </div>
            <div class="flex flex-col gap-4 p-4 basis-2/4  items-around ">
              <h2 class="font-bold text-xl items-center ">${title}</h2>
              <p class="leading-6 line-clamp-5 text-ellipsis">
                ${description}
              </p>
              <footer class="flex p-2 gap-8 justify-between  items-center mt-auto">
                <span class="font-semibold flex items-center justify-center w-full basis-2/3"> $ ${price}</span>
                <button class="p-1 border border-black rounded w-full basis-2/3">
                  Details
                </button>
              </footer>
            </div>
    `;
};
