

import rhs from "../assets/gallery/rhs.png";
import business1 from "../assets/gallery/business1.png";
import business2 from "../assets/gallery/business2.png";
import hike from "../assets/gallery/hike.png";
import film from "../assets/gallery/film.png";

const ImageGallery = () => {
   return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <img
              alt=""
              loading="lazy"
              width="3744"
              height="5616"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src={business1.src}
              style={{ color: "transparent" }}
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <img
              alt=""
              loading="lazy"
              width="3936"
              height="2624"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src={rhs.src}
              style={{ color: "transparent" }}
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <img
              alt=""
              loading="lazy"
              width="5760"
              height="3840"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src={business2.src}
              style={{ color: "transparent" }}
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <img
              alt=""
              loading="lazy"
              width="2400"
              height="3000"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src={film.src}
              style={{ color: "transparent" }}
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <img
              alt=""
              loading="lazy"
              width="4240"
              height="2384"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src={hike.src}
              style={{ color: "transparent" }}
            />
          </div>
       
      </div>
    </div>
  );
};

export default ImageGallery;
