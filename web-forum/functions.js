const data = [
  {
    id: 1,
    title: "Introduction to Programming",
    user: {
      avatar: "./avatars/image-amyrobson.png",
      name: "Hocket Apersil",
      follow: "Following",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: "Technology",
  },
  {
    id: 2,
    title: "Advance React Concepts",
    user: {
      avatar: "./avatars/image-ramsesmiron.png",
      name: "John Smith",
      follow: "Follow",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: "Technology",
  },
  {
    id: 3,
    title: "The History of Physics",
    user: {
      avatar: "./avatars/image-amyrobson.png",
      name: "Juliette Gray",
      follow: "Follow",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: "Science",
  },
  {
    id: 4,
    title: "Understanding the Human Brain",
    user: {
      avatar: "./avatars/image-maxblagun.png",
      name: "Max Blagun",
      follow: "Following",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: " Health",
  },
  {
    id: 5,
    title: "The Future of Physics",
    user: {
      avatar: "./avatars/image-ramsesmiron.png",
      name: "Ramses Miron",
      follow: "Follow",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: "Science",
  },
  {
    id: 6,
    title: "Chemical Reactions of the Future",
    user: {
      avatar: "./avatars/image-amyrobson.png",
      name: "Sarah Lee",
      follow: "Follow",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: "Health",
  },
  {
    id: 7,
    title: "The Role of Mathematics in Physics",
    user: {
      avatar: "./avatars/image-maxblagun.png",
      name: "William Jones",
      follow: "Following",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: "Science",
  },
  {
    id: 8,
    title: "The Importance of written good code",
    user: {
      avatar: "./avatars/image-ramsesmiron.png",
      name: "Elizabeth King",
      follow: "Follow",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: "Technology",
  },
  {
    id: 9,
    title: "Exploring Physics: A Beginner's Guide",
    user: {
      avatar: "./avatars/image-amyrobson.png",
      name: "Oliver Martin",
      follow: "Follow",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: "Science",
  },
  {
    id: 10,
    title: "How to start a career in Technology",
    user: {
      avatar: "./avatars/image-maxblagun.png",
      name: "Jessica Wilson",
      follow: "Following",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: "Technology",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const follow = document.querySelector(".follow");
  follow.style.cursor = "pointer";

 const readMore = document.querySelector(".read-more");
  readMore.style.cursor = "pointer";

  // Event listeners for the follow and read more buttons
  readMore.addEventListener("click", () => {
    console.log(readMore.textContent);
    if (readMore.textContent === "Read More") {
      readMore.textContent = "Read Less";
      readMore.style.backgroundColor = "green";
    } else {
      readMore.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis";
      readMore.style.color = "grey"
    }
  });

  follow.addEventListener("click", () => {
    console.log(follow.textContent);
    if (follow.textContent === "Follow") {
      follow.textContent = "Following";
      follow.style.backgroundColor = "green";
    }
  });

  // Search functionality

  const forum = document.querySelector(".card-forum");
  const formInput = document.querySelector(".form-input");
  const btn = document.querySelector(".btn");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const search = formInput.value.toLowerCase();
    const filteredData = data.filter((post) =>
      post.title.toLowerCase().includes(search) ||
      post.category.toLowerCase().includes(search) ||
      post.user.name.toLowerCase().includes(search) 
    );
    renderPosts(filteredData);
  });


  function truncateString(str) {
    return str.length > 100 ? str.substring(0, 350) + ' <span class="read-more text-blue-500 cursor-pointer">Read more</span>' : str;
  }

  function renderPosts(posts) {
    forum.innerHTML = posts
      .map((post) => {
        return `
        <div class="card-forum mt-5 my-5 p-4 rounded-md shadow-lg">
            <div class="card-header flex justify-between">
                <div class="card-header-content flex">
                    <img src="${
                      post.user.avatar
                    }" class="w-10 h-10" alt="avatar" />
                    <p class="my-2 mx-3">${post.user.name}</p>
                </div>
                <button class="follow bg-blue-500 text-white w-20 text-center p-1 rounded-md shadow-sm">${
                  post.user.follow
                }</button>
            </div>
            <div class="card-body">
                <h3 class="font-extrabold my-4 text-2xl">${post.title}</h3>
                <p class="text-wrap my-4 text-gray-400">${truncateString(post.content)}</p>
            </div>
            <div class="card-footer my-3 flex justify-between">
                <p class="bg-yellow-500 w-24 text-center text-white rounded-md">${
                  post.category
                }</p>
                <div class="icons flex">
                <div class="icons flex">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 mx-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                </svg>
              </div>
                </div>
            </div>
        </div>
    `;
      })
      .join("");

      document.querySelectorAll('.read-more').forEach( elem => {
        elem.addEventListener('click', (e) => {
          e.preventDefault();
          let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis";
          const fullText = elem.getAttribute('data-full-text');
          elem.parentNode.innerHTML = text + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis"; // Replace the truncated text with the full text
        });
      });
  }

  // Initial styling
  forum.style.width = "800px";
  forum.style.height = "100%";
  forum.style.marginTop = "10px";

  // Initial rendering of posts
  renderPosts(data);
});
