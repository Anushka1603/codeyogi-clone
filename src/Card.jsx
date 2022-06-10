import React from "react";

function Card(data) {
  return (
    <>
      <div class="flex mt-4 justify-around">
        <div class="text-xl font-semibold">
          <h1 class="text-purple-400">{data.title}</h1>
        </div>
        <div class="flex">
          <a href="www.twitter.com">
            <img
              class="h-7 mr-4"
              src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
            ></img>
          </a>
          <a href="www.linkedin.com">
            <img
              class="h-7"
              src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"
            ></img>
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;
