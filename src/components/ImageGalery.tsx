
const ImageGallery = () => {
   return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <img
              alt=""
              
              width="3744"
              height="5616"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src='https://uploads.rocketcrm.io/blog/gallery/business1.png'
              style={{ color: "transparent" }}
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <img
              alt=""
             
              width="3936"
              height="2624"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src="https://uploads.rocketcrm.io/blog/gallery/rhs.png"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <img
              alt=""
              
              width="5760"
              height="3840"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src="https://uploads.rocketcrm.io/blog/gallery/business2.png"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <img
              alt=""
             
              width="2400"
              height="3000"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src="https://uploads.rocketcrm.io/blog/gallery/film.png"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <img
              alt=""
              width="4240"
              height="2384"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src="https://uploads.rocketcrm.io/blog/gallery/hike.png"
              style={{ color: "transparent" }}
            />
          </div>
       
      </div>
    </div>
  );
};

export default ImageGallery;
