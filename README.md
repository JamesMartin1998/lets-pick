# Let's Vote - Voting App

Let's Vote is a voting app which allows users to make posts about two things and have people vote on which is best. The website aims to be a fun, social place to for people to light-heartedly share their interests with other people. Users are able to be creative and share their interests with other users in numerous ways. For example, users can interact through posting content for other uses to see, voting on other users' posts and also commenting on posts. The home page displays the most recent posts by all users in a feed, where users can infintely scroll to load more posts. Users are able to tailor the posts that they see to match their interests by using the search bar or category dropdown to filter the post feed. Users can also revisit posts that they have previously voted on via the 'Your Votes' page, as well as revisit posts that they have favourited via the 'Favourites' page. Users can are also able to see their own or other users' profile information, such as the total number of posts, votes made and votes received by the user. This aims to encourage users to actively participate in the community and create a sense of competition and commitment to the app. Full CRUD functionality is available to the user, as both posts and comments are able to created, read, updated and deleted if the user is the author. Users are also able to remove their votes on specific posts and then revote for alternative option. Finally users are able to control the content of their profiles, namely their username, password, description and profile image, which aims to act as an additional source of creativity on the website.

The target audience for the website is vast due to the variety of content that can exist on the website. Coupled with the search and category filtering feature, the webiste is able to offer a personalised experience for users with totally contrasting intersts. This said, the target audience includes social and creative people as they would engage the most with the functionality of this website. Let's Vote aims to make this audience recurrent users by providing them with a community and opportunity to interact, as well as giving them an oppotunity to be creative with their posts content. The website aims for people to post and check for posts that interest them daily.

![Image showing the website's responsiveness on different screens](/src/assets/responsive.png)

## UX Design and Planning

During the planning of this project, I considered which features and functionality should be available to the user, and how to provide these whilst maximising the user experience.

### Home Page, Your Votes Page and Favourites Page

![Image showing home page wireframe](/src/assets/home-page-wireframe.png)

For the home page, I aimed to create a simple layout, that wasn't overwhelming for the user to use initially. I did this by having a brand logo and clear nav links at the top of the page, some basic filter controls and a post feed below. The main feed content is centralised, with the search bar and category filter controls above so the user can easily see and access them. I later decided that it would be better to include the 'Post' button alongside the category filter, rather than in the nav bar. By having the feed on the home page, it immediately makes the identity of the website clear to the user. The 'Your Votes' and 'Favourites' pages follow the same layout and design but only include posts that have been voted on or favourited by the logged in user.

![Image showing home page for logged in users wireframe](/src/assets/home-page-wireframe-logged-in.png)

The navbar responds to whether the user is logged in or not, by displaying the appropriate links. 

![Image showing the home page on a mobile device](/src/assets/home-page-mobile-wireframe.png)

The home page has a fully responsive layout which is also used throughout the pages on the website. The navbar is hidden and can be accessed by clicking the hamburger dropdown icon.

### Add Post Page

![Image showing the add post page wireframe](/src/assets/create-post-wireframe.png)

The 'Add Post' page aims to provide a simple form for users to create posts. The image preview was particularly important as it allows users to check their image before submitting the post; nd thus provide a better user experience.

### Edit Post Page

![Image showing the edit post page wireframe](/src/assets/edit-post-wireframe.png)

The 'Edit Post' page layout copies the 'Add Post' page layout to provide familiarity to the user. The previous data about the post is automatically displayed in the form when the user loads the page so that they can see the existing data for the post. This makes it easier for the user to update their post data.

### Profile Page

![Image showing the profile page](/src/assets/profile-wireframe.png)

The 'Profile' page information about a specific user. The central profile image, along with the profile title, clearly informs users whose profile they are visiting. The statistics section below, clearly provides information about the profile's activity. The centralised feed remains consistent with the layout of the other pages.

### Sign Up Page

![Image showing the sign up page](/src/assets/sign-up-wireframe.png)

The 'Sign Up' page aims to provide a simple, attractive form for which users can register for an account.

### Sign In Page

![Image showing the sign in page](/src/assets/sign-in-wireframe.png)

The 'Sign In' page follows the same layout as the 'Sign Up' page and aims similarly aims to provide a simple, attractive form for which users can sign into their account.

### Profile Page

![Image showing the edit profile form](/src/assets/edit-profile-wireframe.png)

### Edit Profile Page

The 'Edit Profile' page allows users to change their profile image and description. Similarly to the 'Post Edit' page, the 'Edit Profile' form loads with the previous profile data filled. This provides a better user experience as users can easily update their data by changing the original. The profile image can also be previewed to allow users to check the image.

### Edit Username Page

![Image showing the edit username form](/src/assets/edit-username-wireframe.png)

The 'Edit Username' page aims to provide a simple, yet attractive form for users to update their usernames.

### Edit Password Page

![Image showing the edit password form](/src/assets/edit-password-wireframe.png)

The 'Edit Password' page aims to provide a simple, yet attractive form for users to update their passwords.

## User Stories

An agile development strategy was implemented in this project as user stories were created as 'Issues' on GitHub. Each user story prioritised b being assigned a level of necessity to be included in the project - 'Should-Have', 'Could-Have' or 'Must-Have' and seen can be seen as labels attached to the user stories. These user stories were then put onto a kanban board using 'GitHub Projects'. Here, user stories could be moved between 'To do', 'In progress (current sprint)' and 'Done' columns. 

### Epic 1: Navigation

1. As a **user** I can **view a navbar on each page** so that **I can use the links to change my current page**.
2. As a **user** I can **navigate between pages quickly** so that **I am not delayed by unnecessary page refreshes**.
3. As a **user**, I can **see the log in and sign up links when logged out, compared to the log out link when logged in**, so that **I can the appropriate actions accordingly**.

### Epic 2: Authentication

1. As a **user**, I can **sign up for an account** so that **I can have access to more functionality on the website**.
2. As a **user**, I can **sign in to my account** so that **I can access to additional functionality**.
3. As a **user**, I can **see my logged in status** so that **I know if am currently logged in or not**.
4. As a **user**, I can **see users’ avatars** so that **I can identify specify profiles easily**.

### Epic 3: Posts

1. As a **logged in user**, I can **create posts** so that **I can create content on the website**.
2. As a **user**, I can **click on a post to view it individually** so that **I can view more details such as its comments**.
3. : As a **post author**, I can **edit my post** so that **I can correct the post’s details**.
4. As a **post author** , I can **delete my own post** so that **it is removed from my profile**.
5. As a **user**, I can **view the most recent posts at the top of a continuous feed** so that **I see new content first**.
6. As a **user**, I can **search for specific posts by post title and author** so that **I can find posts that I am interested in**.
7. As a **user**, I can **filter posts by selecting a category** so that **I can see posts that I am interested in**.
8. As a **user**, I can **view a feed on posts by scrolling down continuously to load more posts** so that **I don’t have to reload new pages with more posts**.
9. As a **user**, I can **view a post’s page** so that **I can read comments about the post**.


### Epic 4: Votes

1. As a **logged in user**, I can **vote on a post** so that **I can share my preference**.
2. As a **logged in user**, I can **view posts that I have voted on previously** so that **I can revisit the results of the posts**.
3. As a **logged in user**, I can **remove my vote on a post** so that **I can vote again on the post to change my vote option**.


### Epic 5: Comments

1. As a **logged in user**, I can **create a comment on a post** so that **I can share my opinion**.
2. As a **user**, I can **see the date of a comment** so that **I know how old a comment is**.
3. As a **user**, I can **view comments on a post** so that **I can read other users’ opinions**.
4. As a **comment author**, I can **edit my comment** so that **I can correct its detail**.
5. As a **comment author**, I can **delete my comment** so that **I can remove it from the post**.

### Epic 6: Favourites

1. As a **logged in user**, I can **favourite a post** so that **I can save my favourite posts**.
2. As a **loggeed in user**, I can **view my favourite posts in a feed** so that **I can revisit my favourite posts**.
3. As a **logged in user**, I can **remove a favourite on a post** so that **it no longer appears in my favourites feed**.

### Epic 7: Profile

1. As a **user**, I can **view users’ profiles** so that **I can learn more about them**.
2. As a **user**, I can **view a user’s statistics** so that **I can see how many posts, votes received and votes made they have**.
3. As a **user**, I can **see all of a user’s posts on their profile page** so that **I can view more content by users I like**.
4. As a **profile owner**, **I can edit my profile** so that **I can change details such as my profile image and bio**.
5. As a **user**, I can **edit my username and password** so that **I can keep my account secure**.

## Features

### Navigation 

- Displays the brand logo and name of the website to the user.
- A clear 'Open Sans' font is used to make the links visible to the user.
- A dark grey background color and white font color provides sufficient contrast so the links are clearly visible.
- A yellow hover effect also provides sufficient contrast and improves the user experience by showing that the links are clickable. 
- On screens sizes with sufficient space, 'Font Awesome' icons are used for extra clarity of the links. If space is limited, these links are hidden but the text remains.
- The active page's nav link appears yellow to indicate to the user which page they are currently viewing.
- Allows the user to navigate between pages on the website.
- On smaller screens, a hamburger icon appears and opens a dropdown menu when clicked, displaying all of the navbar links. This provides a better user experience as the navbar doesn't have to take up unnecessary space and it maximises the space for other content.
- On smaller screens, the navbar automatically closes after clicking a nav link or clicking off of the nav bar to provide a better users experience.
- Conditional rendering is used to display different nav links to users that are logged in and logged out. This limits users to being able to only use site functionality relevant to their log in status.
- Users are able to see their log in state in the navbar.
- Created using Bootstrap for a simple, responsive design.

![Image showing navbar on large device for logged out user](/src/assets/large-nav-logged-out.png)
(Large device navbar - logged out)

![Image showing navbar on large device for logged in user](/src/assets/large-nav-logged-in.png)
(Large device navbar - logged in)

![Image showing closed navbar on mobile device](/src/assets/mobile-nav-closed.png)
(Mobile device navbar - closed)

![Image showing open navbar on mobile device](/src/assets/mobile-nav-open.png)
(Mobile device navbar - open)












