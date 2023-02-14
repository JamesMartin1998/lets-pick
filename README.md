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
<br />(Mobile device navbar - closed)

![Image showing open navbar on mobile device](/src/assets/mobile-nav-open.png)
<br />(Mobile device navbar - open)

### Home Page

- Displays the most recent posts to the user in a continuous feed.
- Controls section at the top of the page includes a search bar, category filter and post button. These are above the posts so that the user is instantly aware that they can manipulate the page content.
- Category dropdown and Post button are a dark grey colour and yellow when hovered on and clicked; to provide contrast with the background and stay consistent with the colour theme of the website.
- Search bar allows users to search for posts on the website by title and author name. A 1 second interval is set after typing to fetch the post results so that the user is overwhelmed by constantly changing results after each keystroke. The search bar improves the user experience on the website by allowing users to find specific posts that interest them.
- Category dropdown allows users to filter the posts in the feed by their category. This is improves the user experience by allowing users to customise the returned posts to a single category of their interest.
- Post button allows users to be redirected to the 'Create Post' page, where they can add their own post to the website. The button only appears if the current user is logged in.
- Each post is defined on a light blue background with margin between the post above or below. This allows each post to be distinguished easily.
- Each post clearly shows information such as the author, date created, title and description and image. Clicking on the post image will redirect users to the 'Post' page, where they can find more details. Clicking on the profile image will redirect users to the author's 'Profile' page.
- Buttons are present at the bottom of the post to allow the user to comment, vote for either option and favourite the post.
- By clicking the comment button, users are redirected to the 'Post' page, where a comment form is below the post.
- By clicking the a vote button, the count for the option will increment by 1 and the icon colour will become solid to show the user that their vote has been registered.
- By clicking the favourite button, users can add the post to their favourites feed. The favourite icon colour will become solid to inform the user that their vote has been registered.
- Validation is used on the buttons to ensure that users cannot perform actions outside of their permissions. These are notified to the user through overlay messages when hovering on each button. Examples include trying to comment, vote or favourite will logged out, as well as trying to vote or favourite on your own post.

![Image showing the home page on large screen](/src/assets/home-page.png)
(Home Page)

### Your Votes Page

- Functions identically to the home page but only displays a feed of posts that the logged in user has voted on.
- If the user is yet to vote on a post, the user receives a message explaining that they need to vote on a post first.
![Image showing the your votes page on large screen](/src/assets/your-votes-page.png)
(Your Votes Page)

### Favourites Page

- Functions identically to the home page but only displays a feed of posts that the logged in user has favourited.
- If the user is yet to favourite a post, the user receives a message explaining that they need to favourite a post first.

![Image showing the favourites page on large screen](/src/assets/favourites-page.png)
(Favourites Page)

### Post Page

- Shows a specific, single post, with more details such as by showing the 'Add Comment' form, comments and more options dropdown. 
- Allows users to interact and share their opinions in greater detail.
- Accessed by clicking on a post's image.
- The 'Add Comment' form is only visible for logged in users, however all users can view the comments on a post.
- Comments are ordered in a list, with the most recent comments appearing at the top.
- Comments show the content, date/time updated, author's name and author's profile image.
- Infinite scrolling is present for posts that have more than 10 comments.
- If ther current user is the author of the post, a more options dropdown button will appear as three dots. When clicked, the user can select the pencil button to be redirected to the 'Edit Post' page, or the bin to delete the post.
- If ther current user is the author of the comment, a more options dropdown button will appear as three dots. When clicked, the user can select the pencil button to load the 'Edit Comment' form, or the bin to delete the comment.

![Image showing the more dropdown on the post page](/src/assets/post-more-dropdown.png)
(Post Page - More Dropdown Button Open)

![Image showing the add comment form and comments on the post page](/src/assets/post-comments.png)
(Posts Page - Add Comments form, comments list, comments more dropdown button open)

![Image showing the edit comment form on the post page](/src/assets/edit-comment.png)
(Posts page - Edit Comment form)

### Add Post

- Allows logged in users to create their owns posts on the website for other users to vote on.
- Accessed via the 'Post' button on the 'Posts' page.
- A light blue background and yellow buttons are used to stay consistent with the site's theme.
- Users must input a title, category, image and description before submitting a post. Validation is used to check that fields are not left blank and users receive an alert message to explain the error if they try to submit the form with a blank field.
- Placeholder text is used to inform the user of the information required for each field.
- The category input is a dropdown, where users can select one option that represents their post.
- The image input will be displayed as a small preview to the user so can check their image before submitting the form.
- Users can create a post using the submit button, or be returned to the home page by clicking on the cancel button.
- Once the form is submitted, the user will be redirected to the 'Home' page, where they can see their new post in the feed.

![Image showing the add post form](/src/assets/add-post-form.png)
(Add Post Page)

### Edit Post

- Allows logged in users to change the content of an existing post.
- Accessed by clicking on the 'MoreDropdown' link on the 'Post' page. Can only be accessed if the current user is the author of the post to ensure that users cannot edit the content of other users' posts.
- Loads an almost identical form to the 'Add Post' page to keep consistent with the site's theme.
- The form loads pre-filled with the existing post data, making it easy for the user to edit the information accordingly.
- The same input validation as in the 'Add Post' form is present, preventing the user from submitting a form with an empty field and returning an alert message to inform the user of the error.
- Clicking the 'Cancel' button will return the user to 'Post' page and the original post data will remain.
- Clicking the 'Save' button will result in updated fields to be saved to the post's data. The user will be returned to 'Post' page.

![Image showing the edit post form](/src/assets/edit-post.png)
(Edit Post Page)

### Profile

- Allows users to see details about a specific user.
- Accessed by clicking on the profile image of a user on a post.
- Large, centralised profile image and name title clearly inform the user whose profile they are currently viewing.
- A dropdown is represented by three dots and sits adjacently to the profile image if the current user is the owner of the profile. Clicking this will open the dropdown and provide the user with links to the 'Edit Profile', 'Change Username' and 'Change Password' pages. Clicking these links will redirect the user to the respective pages.
- Statistics section shows the number of posts, votes made and votes received by a user. This lets users see how active another user is on the website, as well as motivate users to participate in the community regularly.
- A profile description is below the statistics section and allows users to creatively add content to their profile page.
- A feed of all of the posts that belong to the profile is below the description. This allows other users to explore the content of a specific user; perhaps as they have enjoyed voting on their content before.
- Most recent posts appear at the top of post feed and follow the same layout as in the 'Home' page, to provide a consistent theme and layout.
- Posts can be interacted with in the same way as other pages, such as the 'Home' page. Allowing posts to be commented on, voted on and favourited.
- Infinite scrolling is used when a profile has more than 10 posts, so that the information can easily be accessed by the users by scrolling continuously.

![Image showing the profile page](/src/assets/profile-page.png)
(Profile Page - Dropdown Open)

### Edit Profile

- Allows users to change the profile image and description of their profile.
- Accessed by clicking the 'Edit Profile' link in the dropdown on the 'Profile' page. Can only be accessed if the user is the owner of the profile to ensure that users cannot edit the content of other users' profiles.
- The form is centralised, has a light blue background and yellow buttons to stay consistent with the website's theme.
- The form will render pre-filled to show the current profile data. This allows users to easily manipulate and change their profile content.
- Initially, users will have a default profile image set.
- The profile image will render a preview so that users can check the image before updating their profile.
- The description field is optional, allowing users to submit the form without a description.
- By clicking the 'Cancel' button, the user is returned to the 'Profile' page and the content of their profile is not updated.
- By clicking the 'Save' button, the form is submitted, user is redirected to the 'Profile' page and they can view their updated content.

![Image showing the edit profile page](/src/assets/edit-profile.png)
(Edit Profile Page)

### Change Username

- Allows users to change their username.
- Accessed by clicking the 'Change Username' link in the dropdown on the 'Profile' page. Can only be accessed if the user is the owner of profile to ensure that users cannot edit the username of other users' profiles.
- The form is centralised, has a light blue background and yellow buttons to stay consistent with the website's theme. On larger devices, an image that represents voting is visible for a more appealing design. On smaller devices, this is intentionally absent due to space.
- The form will render pre-filled to show the current username. This allows users to easily manipulate and change their username.
- By clicking the 'Cancel' button, the user is returned to the 'Profile' page and the username of their profile is not updated.
- By clicking the 'Save' button, the form is submitted, user is redirected to the 'Profile' page and their updated username can be seen at the top of their profile.

![Image showing the change username page](/src/assets/username-page.png)
(Change Username Page)

### Change Password

- Allows users to change their password.
- Accessed by clicking the 'Change Password' link in the dropdown on the 'Profile' page. Can only be accessed if the user is the owner of profile to ensure that users cannot edit the password of other users' profiles.
- The form is centralised, has a light blue background and yellow buttons to stay consistent with the website's theme. On larger devices, an image that represents voting is visible for a more appealing design. On smaller devices, this is intentionally absent due to space.
- Users should input the same password into the 'New Password' and 'Confirm Password' fields. Validation is present to detect errors such as when the passwords don't match. Alerts explain the errors if the users try to submit an invalid form.
- By clicking the 'Cancel' button, the user is returned to the 'Profile' page and the password of their profile is not updated.
- By clicking the 'Save' button, the form is submitted and the user is redirected to the 'Profile' page.

![Image showing the change password page](/src/assets/password-page.png)
(Change Password Page)

### Sign Up

- Allows users to sign up for an account on the website.
- The 'Sign Up' title makes it obvious to the user that they are on the sign up page and avoids confusion with the 'Sign In' page.
- The form is centralised, has a light blue background and yellow buttons to stay consistent with the website's theme. On larger devices, an image that represents voting is visible for a more appealing design. On smaller devices, this is intentionally absent due to space.
- Users should input a username and the same password into the 'New Password' and 'Confirm Password' fields. Validation is present to detect errors, such as when the passwords don't match or when a field is blank. Alerts explain the errors if the users try to submit an invalid form.
- A link is available for users to be redirected to the 'Sign In' page if they already have an account.
- By clicking the 'Sign Up' button, the form is submitted and the user is redirected to the 'Home' page.

![Image showing the sign up page](/src/assets/sign-up.png)
(Sign Up Page)

### Sign In

- Allows users to sign into their account on the website.
- The 'Sign In' title makes it obvious to the user that they are on the sign in page and avoids confusion with the 'Sign Up' page.
- The form is centralised, has a light blue background and yellow buttons to stay consistent with the website's theme. On larger devices, an image that represents voting is visible for a more appealing design. On smaller devices, this is intentionally absent due to space.
- Users should input a username and password. Validation is present to detect errors, such as when the username or password is incorrect and when a field is blank. Alerts explain the errors if the users try to submit an invalid form.
- A link is available for users to be redirected to the 'Sign Up' page if they don't already have an account.
- By clicking the 'Sign In' button, the form is submitted and the user is redirected to the 'Home' page.

![Image showing the sign in page](/src/assets/sign-in.png)
(Sign In Page)

## React Components

React components are blocks of code that are reusable throughout an application. Rather than categorising each page as a whole, each page can be broken down into parts, known as components. They are advantageous as they reduce the need for writing the same code multiple times for different pages. Large pages can often be quite complex, so working on a particular part (component) of a page independently can reduce complexity and the opportunity for making errors. Additionally, an error caused in a particular component will be isolated to itself so won't impact the whole site's functionality. Finally, components were used to easily provide a consistent and familiar theme and user experience across the website

### Asset

- Used to display a loading spinner that appears when users are waiting for content to load on the website, as well as a display a message for when no post results are found.
- The loading spinner improves the user experience as users are aware the content is loading and avoid becoming momentarily confused due to white space being present until content loads.
- The message improves the user experience as users are aware that the no results exist and don't waste time waiting for results that won't appear.

### Avatar

- Used to display user profile images, such as on posts, comments, profiles and the navbar.
- User experience improved as it allows consistent and familiar styling to be used throughout the application. It also allows users to be creative and feel unique with their profile.

### MoreDropdown

- Used to create a 3 dots icon that when clicked, would provide button links.
- MoreDropdown used on posts and comments, to allow the author to edit or delete their content.
- ProfileDropdown variation allows the profile owner to edit their profile or change their username and password.
- Improves the user experience as users become familiar with the 3 dot icon and assoicate it with allowing them to access more functionality on the site.
- Also improves the user experience by allowing supplementary content to be hidden from the main content. Thus, not keeping the laout simple and not overwhelming for the user.

### NavBar

- Used on every page to allow users to access different pages on the website.
- Forms a consistent part of the layout on every page to contribute to the website's identity.
- Improves the user experience as users are able to reach any page from any page and creating a sense of familiarity.

### PageNotFound

- Used to notify the user that the current URL path returns no content.
- Improves the user experience by providing feedback after an error, rather than leaving them to become confused.
- Navbar is displayed so that users can easily go to another page.










