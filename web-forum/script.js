const data = [
  {
    id: 1,
    title: "Introduction to Programming",
    user: {
      avatar: "./avatars/image-amyrobson.png",
      name: "Hocket Apersil",
      follow: "Follow",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: "Technology",
    time: "2 hours ago",
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
    time: "3 hours ago",
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
    time: "4 hours ago",
  },
  {
    id: 4,
    title: "Understanding the Human Brain",
    user: {
      avatar: "./avatars/image-maxblagun.png",
      name: "Max Blagun",
      follow: "Follow",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: " Health",
    time: "5 hours ago",
  },
  {
    id: 5,
    title: "Messi to Leave Barcelona",
    user: {
      avatar: "./avatars/image-ramsesmiron.png",
      name: "Ramses Miron",
      follow: "Follow",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: "Sports",
    time: "6 hours ago",
  },
  {
    id: 6,
    title: "2024 General Elections",
    user: {
      avatar: "./avatars/image-amyrobson.png",
      name: "Sarah Lee",
      follow: "Follow",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: "Politics",
    time: "7 hours ago",
  },
  {
    id: 7,
    title: "Free Online Courses",
    user: {
      avatar: "./avatars/image-amyrobson.png",
      name: "Sarah Lee",
      follow: "Follow",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem, doloremque quas quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptates, quae, quibusdam dolorum quia quos exercitationem.",
    category: "Education",
    time: "7 hours ago",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card-forum");

  // Search function
  const input = document.querySelector(".form-input");
  const searchButton = document.querySelector(".btn");

  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const searchTerm = input.value.toLowerCase();
    const filteredData = data.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm)
    );
    renderPosts(filteredData);
  });

  const categoryButtons = document.querySelectorAll(".cate-btn");
  console.log(categoryButtons);

  categoryButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      const category = e.target.textContent;
      console.log(category);
      const filteredData = data.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
      );
      renderPosts(filteredData);
    });
  });



  // Function to render posts
  function renderPosts(posts) {
    card.innerHTML = "";
    posts.forEach((post) => {
      const postHTML = `
          <div class="card bg-white shadow-md p-3 rounded-md mt-5">
            <div class="card-header flex justify-between">
              <div class="user-info flex gap-3">
                <img src="${post.user.avatar}" alt="${post.user.name}" class="w-10 h-10 rounded-full" />
                <div class="user-name">
                  <h3 class="font-bold">${post.user.name}</h3>
                  <p>${post.time}</p>
                </div>
              </div>
              <div class="user-info mx-5">
                <button class="follow mx-6 bg-blue-500 p-3 rounded-md text-white">${
                  post.user.follow
                }</button>
              </div>
            </div>
            <div class="card-body">
              <h2 class="title my-5 font-extrabold">${post.title}</h2>
              <p class="content my-6">${post.content.substring(
                0,
                350
              )} <button class="text-blue-500 read-more" data-full-text="${post.content}">Read More</button></p>
            </div>
            <div class="card-footer">
              <p class="category rounded-md">${post.category}</p>
              <div class="icons flex">
              <div class="icons sm:mx-6">
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 save">
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
      card.innerHTML += postHTML;
    });

    // Attach event listeners after rendering
    attachEventListeners();
  }

  // Attach event listeners
  function attachEventListeners() {
    const followButtons = document.querySelectorAll(".follow");
    const readMoreButtons = document.querySelectorAll(".read-more");

    // Event listener for read more buttons
    readMoreButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const fullText = button.getAttribute("data-full-text");
        button.parentElement.innerHTML = `
            <p class="content my-6">${fullText}</p>
          `;
      });
    });

    // Event listener for follow buttons
    followButtons.forEach((button) => {
      button.addEventListener("click", () => {
        button.textContent =
          button.textContent === "Follow" ? "Following" : "Follow";
        if (button.textContent === "Following") {
          button.style.background = "green";
        } else {
          button.style.background = "blue";
        }
      });
    });
  }

  // Initial rendering of all posts
  renderPosts(data);
});


