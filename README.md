# Let's Pick - Voting App

Let's Pick is a voting app which allows users to make posts about two things and have people vote on which is best. The website aims to be a fun, social place to for people to light-heartedly share their interests with other people. Users are able to be creative and share their interests with other users in numerous ways. For example, users can interact through posting content for other uses to see, voting on other users' posts and also commenting on posts. The home page displays the most recent posts by all users in a feed, where users can infintely scroll to load more posts. Users are able to tailor the posts that they see to match their interests by using the search bar or category dropdown to filter the post feed. Users can also revisit posts that they have previously voted on via the 'Your Votes' page, as well as revisit posts that they have favourited via the 'Favourites' page. Users are also able to see their own or other users' profile information, such as the total number of posts, votes made and votes received by the user. This aims to encourage users to actively participate in the community and create a sense of competition and commitment to the app. Full CRUD functionality is available to the user, as both posts and comments are able to created, read, updated and deleted if the user is the author. Users are also able to remove their votes on specific posts and then revote for an alternative option. Finally users are able to control the content of their profiles, namely their username, password, description and profile image, which aims to act as an additional source of creativity on the website.

The target audience for the website is vast due to the variety of content that can exist on the website. Coupled with the 'search' and 'category' filtering feature, the webiste is able to offer a personalised experience for users with totally contrasting intersts. This said, the target audience includes social and creative people as they would engage the most with the functionality of this website. Let's Pick aims to make this audience into recurrent users by providing them with a community and opportunity to interact, as well as giving them an oppotunity to be creative with their posts' content. The website aims to have people post and check for posts that interest them daily.

![Image showing the website's responsiveness on different screens](/src/assets/responsive.png)

## Project Links

- [Deployed Front End Site](https://lets-pick-app.herokuapp.com/)
- [Repository for Front End Site](https://github.com/JamesMartin1998/lets-pick)
- [Deployed API Site](https://lets-pick.herokuapp.com/)
- [Repository for API Site](https://github.com/JamesMartin1998/Project-5-Backend)

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

The 'Add Post' page aims to provide a simple form for users to create posts. The image preview was particularly important as it allows users to check their image before submitting the post; and thus provide a better user experience.

### Edit Post Page

![Image showing the edit post page wireframe](/src/assets/edit-post-wireframe.png)

The 'Edit Post' page layout copies the 'Add Post' page layout to provide familiarity to the user. The previous data about the post is automatically displayed in the form when the user loads the page so that they can see the existing data for the post. This makes it easier for the user to update their post data.

### Profile Page

![Image showing the profile page](/src/assets/profile-wireframe.png)

The 'Profile' page shows information about a specific user. The central profile image, along with the profile title, clearly informs users whose profile they are visiting. The statistics section below, clearly provides information about the profile's activity. The centralised feed remains consistent with the layout of the other pages.

### Sign Up Page

![Image showing the sign up page](/src/assets/sign-up-wireframe.png)

The 'Sign Up' page aims to provide a simple, attractive form for which users can register for an account.

### Sign In Page

![Image showing the sign in page](/src/assets/sign-in-wireframe.png)

The 'Sign In' page follows the same layout as the 'Sign Up' page and similarly aims to provide a simple, attractive form for which users can sign into their account.

### Profile Page

![Image showing the edit profile form](/src/assets/edit-profile-wireframe.png)

### Edit Profile Page

The 'Edit Profile' page allows users to change their profile image and a description. Similarly to the 'Post Edit' page, the 'Edit Profile' form loads with the previous profile data filled. This provides a better user experience as users can easily update their data by changing the original data. The profile image can also be previewed to allow users to check the image.

### Edit Username Page

![Image showing the edit username form](/src/assets/edit-username-wireframe.png)

The 'Edit Username' page aims to provide a simple, yet attractive form for users to update their usernames.

### Edit Password Page

![Image showing the edit password form](/src/assets/edit-password-wireframe.png)

The 'Edit Password' page aims to provide a simple, yet attractive form for users to update their passwords.

## User Stories

An agile development strategy was implemented in this project as user stories were created as 'Issues' on GitHub. Each user story was prioritised by being assigned a level of necessity to be included in the project - 'Should-Have', 'Could-Have' or 'Must-Have' and seen can be seen as labels attached to the user stories. These user stories were then put onto a kanban board using 'GitHub Projects'. Here, user stories could be moved between 'To do', 'In progress (current sprint)' and 'Done' columns.

- Issues can be found [here](https://github.com/JamesMartin1998/lets-pick/issues).
- Kanban board can be found [here](https://github.com/users/JamesMartin1998/projects/4)

### Epic 1: Navigation

1. As a **user**, I can **view a navbar on each page** so that **I can use the links to change my current page**.
2. As a **user**, I can **navigate between pages quickly** so that **I am not delayed by unnecessary page refreshes**.
3. As a **user**, I can **see the log in and sign up links when logged out, compared to the log out link when logged in**, so that **I can access the appropriate actions accordingly**.

### Epic 2: Authentication

1. As a **user**, I can **sign up for an account** so that **I can have access to more functionality on the website**.
2. As a **user**, I can **sign in to my account** so that **I can access to additional functionality**.
3. As a **user**, I can **see my logged in status** so that **I know if am currently logged in or not**.
4. As a **user**, I can **see users’ avatars** so that **I can identify specific profiles easily**.

### Epic 3: Posts

1. As a **logged in user**, I can **create posts** so that **I can create content on the website**.
2. As a **user**, I can **click on a post to view it individually** so that **I can view more details such as its comments**.
3. As a **post author**, I can **edit my post** so that **I can correct the post’s details**.
4. As a **post author** , I can **delete my own post** so that **it is removed from my profile**.
5. As a **user**, I can **view the most recent posts at the top of a continuous feed** so that **I see new content first**.
6. As a **user**, I can **search for specific posts by post title and author** so that **I can find posts that I am interested in**.
7. As a **user**, I can **filter posts by selecting a category** so that **I can see posts that I am interested in**.
8. As a **user**, I can **view a feed of posts by scrolling down continuously to load more posts** so that **I don’t have to reload new pages with more posts**.
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
- On smaller screens, the navbar automatically closes after clicking a nav link or clicking off of the nav bar to provide a better user experience.
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
- Controls section at the top of the page includes a search bar, category filter and post button. These are above the posts so that the user is instantly aware that they can manipulate the page's content.
- Category dropdown and Post button are a dark grey colour and yellow when hovered on and clicked; to provide contrast with the background and stay consistent with the colour theme of the website.
- Search bar allows users to search for posts on the website by title and author name. A 1 second interval is set after typing to fetch the post results so that the user is overwhelmed by constantly changing results after each keystroke. The search bar improves the user experience on the website by allowing users to find specific posts that interest them.
- Category dropdown allows users to filter the posts in the feed by their category. This improves the user experience by allowing users to customise the returned posts to a single category of their interest.
- Post button allows users to be redirected to the 'Create Post' page, where they can add their own post to the website. The button only appears if the current user is logged in.
- Each post is defined on a light blue background with margin between the post above and below. This allows each post to be distinguished easily.
- Each post clearly shows information such as the author, date created, title and description and image. Clicking on the post image will redirect users to the 'Post' page, where they can find more details. Clicking on the profile image will redirect users to the author's 'Profile' page.
- Bold text under each side of the image informs users clearly which option is which.
- Buttons are present at the bottom of the post to allow the user to comment, vote for either option and favourite the post.
- By clicking the comment button, users are redirected to the 'Post' page, where a comment form is below the post.
- By clicking the a vote button, the count for the option will increment by 1 to show the user that their vote has been registered.
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
- If the current user is the author of the comment, a more options dropdown button will appear as three dots. When clicked, the user can select the pencil button to load the 'Edit Comment' form, or the bin to delete the comment.

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

React components are blocks of code that are reusable throughout an application. Rather than categorising each page as a whole, each page can be broken down into parts, known as components. They are advantageous as they reduce the need for writing the same code multiple times for different pages. Large pages can often be quite complex, so working on a particular part (component) of a page independently can reduce complexity and the opportunity for making errors. Additionally, an error caused in a particular component will be isolated to itself so won't impact the whole site's functionality. Finally, components were used to easily provide a consistent and familiar theme and user experience across the website.

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
- Also improves the user experience by allowing supplementary content to be hidden from the main content. Thus, not keeping the layout simple and not overwhelming for the user.

### NavBar

- Used on every page to allow users to access different pages on the website.
- Forms a consistent part of the layout on every page to contribute to the website's identity.
- Improves the user experience as users are able to reach any page from any page and creating a sense of familiarity.

### PageNotFound

- Used to notify the user that the current URL path returns no content.
- Improves the user experience by providing feedback after an error, rather than leaving them to become confused.
- Navbar is displayed so that users can easily go to another page.

## Future Features

- Vote Percentage Bar
  - Currently users can see which option is more popular on each post by comparing the number for each option. In the future, a bar could be added to each post and two colours could be used to show the percentage of each vote option. The bar could move using a transition effect when a user adds a vote on a post. This would provide a more attractive graphic to users.
- Followers
  - At the beginning of this project I thought that having followers is unnecessary for this website. I still believe that the site funcitons sufficiently without the need of followers. However I can see how following profiles could make the site superior as users could also have a page to see the posts from users that they follow. This would provide an extra level to the custom experience on the site.
- Multiple Post Images
  - Currently users can post an individual image showing two options that can be voted for. In the future it may be easier for users to have the option to upload 2 individual images, rather than combining 2 images into 1.

## Manual Testing

- The website has been tested and works on different browsers: Chrome, Samsung Internet, Microsoft Edge.
- All text can be seen clearly and isn't disrupted by another element.
- All links and buttons can be clicked and provide their expected results.
- All pages are responsive on all standard screen sizes and functions correctly.

### Navigation

| Test Case | Test Description                                                                        | Test Outcome                                                                                                                                                                                                        | Test Result |
| --------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 001       | Navbar can be seen on every page of the website.                                        | Navbar is present at the top of every page.                                                                                                                                                                         | Pass        |
| 002       | Navbar links are accurate and load the correct pages.                                   | Navlinks accurately redirect users to the correct page. No broken links.                                                                                                                                            | Pass        |
| 003       | Clicking a navbar link should redirect users quickly, without unnecessary page reloads. | Navigation between pages is quick. No unnecessary page reloads, only changing components are re-rendered.                                                                                                           | Pass        |
| 004       | Users can see their login status in the navbar.                                         | Users are able to see their login status by seeing either the profile image and sign out navlinks when logged in, and the sign up and sign in navlinks when logged out.                                             | Pass        |
| 005       | User has access to different links in the navbar depending on log in status.            | Conditional rendering successfully makes the 'Your Votes', 'Favourites', 'Profile', and 'Sign Out' links visible for logged in users, whereas only logged out users have the 'Sign Up' and 'Sign In' links visible. | Pass        |

### Authentication

| Test Case | Test Description                                                                                                                                                              | Test Outcome                                                                                                                                              | Test Result |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 006       | 'Sign Up' form prevents users from registering for an account when invalid input data is provided.                                                                            | Validation prevents users registering for an account, for example when the username already exists, passwords don't match and when fields are left blank. | Pass        |
| 007       | Users receive alerts to explain validation errors in the 'Sign Up' form.                                                                                                      | Users receive error alert messages underneath the field the error occurs in.                                                                              | Pass        |
| 008       | Users are able to sign up for an account.                                                                                                                                     | When users input valid data into the 'Sign Up' form they can successfully register for an account.                                                        | Pass        |
| 009       | The 'sign in' link redirects users to the 'Sign In' page.                                                                                                                     | Clicking the 'sign in' link successfully redirects users to the 'Sign In' page.                                                                           | Pass        |
| 010       | 'Sign In' form prevents users from signing into their account when invalid input data is provided.                                                                            | Validation prevents users signing into their account, for example when the username or password are incorrect and when fields are left blank.             | Pass        |
| 011       | Users receive alerts to explain validation errors in the 'Sign In' form.                                                                                                      | Users receive error alert messages underneath the field the error occurs in.                                                                              | Pass        |
| 012       | Users are able to sign in to their already created account.                                                                                                                   | When users input valid data into the 'Sign In' form they can successfully log into their account.                                                         | Pass        |
| 013       | The 'sign up' link redirects users to the 'Sign Up' page.                                                                                                                     | Clicking the 'sign up' link successfully redirects users to the 'Sign Up' page.                                                                           | Pass        |
| 014       | Users can see their logged in status.                                                                                                                                         | Users can check the navbar to see their log in status                                                                                                     | Pass        |
| 015       | When users are accessing pages exclusive to logged in users (e.g. 'Your Votes' page), they are redirected to the 'Home' page after signing out.                               | Users are successfully redirected to the 'Home' page after signing out.                                                                                   | Pass        |
| 016       | Logged out users are unable to access pages exclusive to logged in users (e.g. 'Add Post' page) and are either reidrected to the 'Home' page or see a page not found message. | Logged out users are unable to use logged in user functionality are redirected to the 'Home' page or see a page not found message.                        | Pass        |
| 017       | Logged in users are unable to access the pages exclusive to logged out users (e.g. 'Sign Up' and 'Sign In' pages)                                                             | When a logged in users tries to access a URL to a page exclusive to logged out users, they are redirected to the 'Home' page.                             | Pass        |
| 018       | Users can log out of their account using the 'Sign Out' link in the navbar.                                                                                                   | Users can log out and are redirected to the 'Home' page.                                                                                                  | Pass        |
| 019       | When users successfully register for an account, the profile instance is created in the API and has the correct data.                                                         | User instance is created and the data is correct.                                                                                                         | Pass        |

### Posts

| Test Case | Test Description                                                                                                                                 | Test Outcome                                                                                                                                                                    | Test Result |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 020       | The 'Home' page renders a feed of posts if they exist. Most recent posts are seen first.                                                         | A feed of posts can be seen if post instances are created. Most recent posts are seen at the top of the feed.                                                                   | Pass        |
| 021       | The 'Your Votes' page renders a feed of posts that the current user has already voted on.                                                        | A feed of posts is shown; only including posts that the user has voted on.                                                                                                      | Pass        |
| 022       | The 'Favourites' page renders a feed of posts that the current user has already favourited.                                                      | A feed of posts is shown; only including posts that the user has favourited.                                                                                                    | Pass        |
| 023       | A loading spinner is shown on the 'Home', 'Your Votes', 'Favourites' pages whilst the post data is being retrieved.                              | A loading spinner appears initially and is then replaced by a feed of posts.                                                                                                    | Pass        |
| 024       | When no posts exist on the 'Home', 'Your Votes', 'Favourites' pages. A message is displayed to inform the user that there are no results.        | No results image and message seen on each page when no posts exist.                                                                                                             | Pass        |
| 025       | When more than 10 posts exist, infinite scrolling is used to render more posts as the user scrolls down the page.                                | User can render more than 10 posts by scrolling down the page.                                                                                                                  | Pass        |
| 026       | The search bar can be used to filter the posts feed by a post's title or author's name.                                                          | The search bar returns a feed of posts where the input matches either the post's title or author's name.                                                                    | Pass        |
| 027       | The category dropdown can be used to filter the posts feed to a single category.                                                                 | When a category is selected, the posts feed ony includes posts of that category.                                                                                                | Pass        |
| 028       | The 'Post' button (allowing users to add a post) only renders for logged in users.                                                               | Only logged in users can see the 'Post' button.                                                                                                                                 | Pass        |
| 029       | Each post in the feed displays all the correct information about the post.                                                                   | Each post includes a title, author name, profile image, date, description, image, comment button, vote option1 button, vote option2 button and favourite button.                | Pass        |
| 030       | 'Post' page (showing detail about a particular post) can be accessed by clicking on a particular post's image.                                   | Clicking on a post's image loads a page containing only the specific post.                                                                                                     | Pass        |
| 031       | The 'Post' page shows comments for a post if they exist, or a message if they don't.                                                             | Comments can be seen in a feed below the post when they exist. If there are no comments, the user is informed.                                                                  | Pass        |
| 032       | If a post has more than 10 comments, these can be loaded by scrolling down the page.                                                             | Infinite scrolling is present, as scrolling down the page loads more comments if they exist.                                                                                    | Pass        |
| 033       | If the user is logged in, the 'Post' page shows the 'Add Comment' form.                                                                          | 'Add Comment' visible under the post, only if the user is logged in.                                                                                                            | Pass        |
| 034       | If the user is the author of a post, the 'MoreDropdown' (links to edit and delete the post) is rendered.                                         | The 'MoreDropdown is only rendered on the 'Post' page if the user is the author of the particular post.                                                                         | Pass        |
| 035       | Only the author of a post, can access its 'Edit Post' page.                                                                                      | The post author can access the 'Edit Post' form, whereas other users are redirected to the 'Home' page.                                                                         | Pass        |
| 036       | Only logged in users can access the 'Create Post' page.                                                                                          | Logged in users can access the 'Create Post' page, whereas logged out users are redirected to the 'Home' page.                                                                  | Pass        |
| 037       | Logged in users can use the 'Create Post' form to add a new post to the website.                                                                 | Submitting valid data in the 'Create Post' form will create a post which can be seen in the posts feed.                                                                         | Pass        |
| 038       | Users cannot create a post if data is invalid in the 'Post Create' form.                                                                         | 'Create Post' form handles invalid data when a user tries to submit the form (e.g. empty fields) and informs the user of the error as an alert message under the invalid field. | Pass        |
| 039       | Clicking the 'Cancel' button in the 'Create Post' form results in no post being created and the user being returned to the 'Home' page.          | No post is created and the user is redirected to the 'Home' page.                                                                                                               | Pass        |
| 040       | When the user successfully creates a post, the post instance is created in the API and has the correct data.                                     | Post instance is created and the data is correct.                                                                                                                               | Pass        |
| 041       | 'Edit Post' form renders pre-filled with existing post data.                                                                                     | Each input has the existing post data when the form is loaded.                                                                                                                  | Pass        |
| 042       | Users cannot edit a post if data is invalid in the 'Post Edit' form.                                                                             | 'Edit Post' form handles invalid data when a user tries to submit the form (e.g. empty fields) and informs the user of the error as an alert message under the invalid field.   | Pass        |
| 043       | Clicking the 'Cancel' button in the 'Edit Post' form results in no post changes being saved and the user being returned to the 'Home' page.      | No post data is changed and the user is redirected to the 'Home' page.                                                                                                          | Pass        |
| 044       | When the user successfully edits a post, the post instance is updated in the API and has the correct data.                                       | Post instance is updated and the data is correct.                                                                                                                               | Pass        |
| 045       | Clicking the delete button in the 'MoreDropdown' on the 'Post' page results in post being deleted and the user is redirected to the 'Home' page. | The post is deleted and is no longer seen in the post feed. The user is redirected to the 'Home' page.                                                                          | Pass        |
| 046       | When the user successfully deletes a post, the post instance is deleted in the API.                                                              | Post instance is deleted.                                                                                                                                                       | Pass        |

### Votes

| Test Case | Test Description                                                                                                                                                            | Test Outcome                                                                                                                                   | Test Result |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 047       | Logged in users can vote on posts made by other users by clicking on either vote option button on a post.                                                                   | Logged in users can vote on posts made by other users.                                                                                         | Pass        |
| 048       | Logged out users are unable to vote on posts and are informed by an overlay message.                                                                                        | Logged out users are unable to vote on posts and can notice an overlay message when hovering over a vote option button.                        | Pass        |
| 049       | Logged in users cannot vote on their own post and are informed by an overlay message.                                                                                       | Logged in users are unable to vote on their own posts and can notice an overlay message when hovering over a vote option button.               | Pass        |
| 050       | When a user votes on a post, the count for the specific vote option is increased by 1.                                                                                      | Voting for an option causes the number beside the button (count) to increase by one.                                                           | Pass        |
| 051       | Users are unable to vote for both options and are informed by an overlay message.                                                                                           | Users cannot vote for both options. An overlay message is seen when hovering over the vote option and the count doesn't increase when clicked. | Pass        |
| 052       | When a user successfully votes, the vote instance is created in the API. The post instance has its votes_count and specific option count field updated in the API.          | A vote instance is created and the post instance is updated correctly in the API.                                                              | Pass        |
| 053       | Users are able to delete their votes by clicking on the vote option button again.                                                                                           | Vote is deleted. The option count next to the button decreases by 1.
| 054       | When a user successfully deletes a vote, the count for the specific vote option is decreased by 1.                                                                                       | Deleting a vote for an option causes the number beside the button (count) to decrease by one.                                                                                             | Pass        |                                                                           | Pass        |
| 055       | When a user successfully deletes a vote, the vote instance is deleted in the API. The post instance has its votes_count and specific option count field updated in the API. | A vote instance is created and the post instance is updated correctly in the API.                                                              | Pass        |
| 056       | A user can vote for the other option (effectively edit their vote choice) on a post if they have deleted their previous vote on the post.                                   | Users are able to change their vote choice if they have deleted their previous vote on the post.                                               | Pass        |

### Comments

| Test Case | Test Description                                                                                                                                     | Test Outcome                                                                                                                                                                            | Test Result |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 057       | Logged in users can comment on posts.                                                                                                                | Comment form is rendered on the 'Post' page for logged in users and they can successfully create comments. Comment can be seen under the comment form.                                  | Pass        |
| 058       | Logged out users cannot comment on posts.                                                                                                            | No comment form is rendered on the 'Post' page so they cannot make a comment.                                                                                                           | Pass        |
| 059       | Users cannot add a comment of empty content.                                                                                                         | Submitting an empty comment form doesn't result in a comment being made.                                                                                                                | Pass        |
| 060       | When a user comments on a post, the count for comments is increased by 1.                                                                            | Commenting on a post causes the number beside the button (count) to increase by one.                                                                                                    | Pass        |
| 061       | When a user successfully creates a comment, a comment instance is created in the API. The post instance has its comments_count updated in the API.   | A comment instance is created and the post instance is updated correctly in the API.                                                                                                    | Pass        |
| 062       | Authors of a comment can edit their comment.                                                                                                        | Comment authors can see a 'MoreDropdown' icon and click the edit button to render a 'Edit Comment' form. Updating the content and saving the form results in the comment being updated. | Pass        |
| 063       | Users cannot edit a comment they are not the author of.                                                                                              | No 'MoreDropdown' icon is rendered on the comment so they cannot edit its content.                                                                                                      | Pass        |
| 064       | When a user successfully edits a comment, the comment instance is updated in the API.                                                                | A comment instance is created in the API.                                                                                                                                               | Pass        |
| 065       | Authors of a comment, can delete their comment.                                                                                                      | Comment authors can see a 'MoreDropdown' icon and click the delete button to delete the comment.                                                                                        | Pass        |
| 066       | Users cannot delete a comment they are not the author of.                                                                                            | No 'MoreDropdown' icon is rendered on the comment so they cannot delete the comment.                                                                                                    | Pass        |
| 067       | When a user deletes a comment on a post, the count for comments is decreased by 1.                                                                   | Deleting a comment on a post causes the number beside the button (count) to decrease by one.                                                                                            | Pass        |
| 068       | When a user successfully deletes a comment, the comment instance is deleted in the API. The post instance has its comments_count updated in the API. | The comment instance is deleted and the post instance is updated correctly in the API.                                                                                                  | Pass        |

### Favourites

| Test Case | Test Description                                                                                    | Test Outcome                                                                                                                            | Test Result |
| --------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 069       | Logged in users can favourite posts.                                                                | Logged in users can click the star icon to favourite a post.                                                                            | Pass        |
| 070       | Logged out users cannot favourite posts and are informed by an overlay message.                     | Logged out users cannot favourite posts and can notice an overlay message to explain the error when hovering over the favourite button. | Pass        |
| 071       | Users cannot favourite their own posts and are informed by an overlay.                              | Users cannot favourite their own posts and can notice an overlay message to explain the error when hovering over the favourite button.  | Pass        |
| 072       | When a user successfully favourites a post, the favourite button colour becomes solid.              | A solid button colour is shown when the post is set as a favourite.                                                                     | Pass        |
| 073       | When a user successfully favourites a post, a favourite instance is created in the API.             | Instance is created in the API.                                                                                                         | Pass        |
| 074       | Users can delete the favourite by clicking the favourite button again.                              | Clicking the favourite button again removes the favourite.                                                                              | Pass        |
| 075       | When a user successfully favourites a post, the favourite button colour becomes no longer solid.    | Solid button colour disappears when the post is set to no longer be a favourite.                                                        | Pass        |
| 075       | When a user successfully removes a favourite on a post, a favourite instance is deleted in the API. | Instance is deleted in the API.                                                                                                         | Pass        |

### Profiles

| Test Case | Test Description                                                                                                                                              | Test Outcome                                                                                             | Test Result |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------- |
| 076       | Users can view profiles by clicking on the profile image image or name link on a post.                                                                        | Clicking on either link redirects the user to the to the profile page.                                   | Pass        |
| 077       | Logged in users can also access their own profile via the 'Profile' navlink.                                                                                  | Navlink is present and redirects the user correctly.                                                     | Pass        |
| 078       | Profile page renders an information section (e.g. profile image, title, description), statistics (posts, votes made, votes received) section and posts feed.  | Profile page renders information, statistics and feed sections.                                          | Pass        |
| 079       | The statistics section shows the correct information.                                                                                                         | Statistics accurately show the number of posts, votes made and votes received by a user.                 | Pass        |
| 080       | When a user visits another user's profile and votes on one of their posts, the votes received count increases correctly.                                   | Voting on a post in the feed on the profile page causes the votes received to increase by 1.             | Pass        |
| 081       | When a user visits another user's profile and removes a vote on one of their posts they had previous voted on, the votes received count decreases correctly.  | Removing a vote on a post in the feed on the profile page causes the votes received to decrease by 1.    | Pass        |
| 082       | If a user votes or removes a vote on a post and then returns to their profile, the votes made count updates correctly.                                        | Voting on post increases the vote count, and removing a vote decreases the vote made count.              | Pass        |
| 083       | If a user creates a post or deletes a post and then returns to their profile, the post count updates correctly.                                               | Creating a post increases the post count, and deleting a post decreases the post count.                  | Pass        |
| 084       | When a profile's posts, votes made or votes received count is updated, the fields are also updated in the API.                                                | API updates to show correct profile data.                                                                | Pass        |
| 085       | The 'ProfileDropdown' icon (providing links to 'Edit Profile', 'Change Username' and 'Change Password') is only present for users visiting their own profile. | 'ProfileDropdown' icon visible on a user's own profile but not when visiting a different user's profile. | Pass        |
| 086       | 'Edit Profile' form loads pre-filled with existing profile data.                                                                                              | The current profile data can be seen when loading the 'Edit Profile' form.                               | Pass        |
| 087       | Users can update their profile image and description by submitting valid data in the 'EditProfile' form.                                                      | Users are able to update their profile by submitting valid data.                                         | Pass        |
| 088       | Users cannot submit the 'EditProfile' form with invalid data and are alerted with a message.                                                                  | Invalid data cannot be submitted in the form and a message is present under the invalid data.            | Pass        |
| 089       | Clicking 'Cancel' in the 'EditProfile' form results in no data updates on the profile.                                                                        | Clicking 'Cancel' does not update the profile and the user is redirected back to their profile.          | Pass        |
| 090       | When the profile is successfully updated, the 'Profile' instance is updated correctly in the API.                                                             | Instance is updated correctly in the API.                                                                | Pass        |
| 091       | 'Change Username' form loads pre-filled with existing profile username.                                                                                       | The current username data can be seen when loading the 'Change Username' form.                           | Pass        |
| 092       | Users can update their username by submitting valid data in the 'ChangeUsername' form.                                                                        | Users are able to update their username by submitting valid data.                                        | Pass        |
| 093       | Users cannot submit the 'Change Username' form with invalid data and are alerted with a message.                                                              | Invalid data cannot be submitted in the form and a message is present under the invalid data.            | Pass        |
| 094       | Clicking 'Cancel' in the 'Change Username' form results in no data updates on the profile.                                                                    | Clicking 'Cancel' does not update the username and the user is redirected back to their profile.         | Pass        |
| 095       | When the username is successfully updated, the 'Profile' instance is updated correctly in the API.                                                            | Instance is updated correctly in the API.                                                                | Pass        |
| 096       | Users can update their password by submitting valid data in the 'Change Password' form.                                                                       | Users are able to update their password by submitting valid data.                                        | Pass        |
| 097       | Users cannot submit the 'Change Password' form with invalid data and are alerted with a message.                                                              | Invalid data cannot be submitted in the form and a message is present under the invalid data.            | Pass        |
| 098       | Clicking 'Cancel' in the 'Change Password' form results in no data updates on the profile.                                                                    | Clicking 'Cancel' does not update the password and the user is redirected back to their profile.         | Pass        |
| 099       | When the password is successfully updated, the 'Profile' instance is updated correctly in the API.                                                            | Instance is updated correctly in the API.                                                                | Pass        |

### JSX Validation
- Prettier was installed to format the code consistently.
- ESLint was installed to validate the code. No significant errors were detected that affect performance.

### CSS Validation
- CSS files were validated using the Jigsaw W3C CSS Validator and returned no errors. (https://jigsaw.w3.org/css-validator/)

### Lighthouse 

![Image of lighthouse test results for home page](/src/assets/lighthouse.png)
(Lighthouse test results on home page)

## Technologies Used

### Main Languages Used

- HTML
- CS
- JavaScript

### Dependencies and Programs Used

- ReactJS - Used to build the components making up the front end website.
- React Bootstrap - Used to create layouts and styles on the front end website.
- Axios - Used to make HTTP requests from the front end website to the API.
- JWT-Decode - Used to extract information from JWTs.
- React-Infinte-Scroll - Used to automatically load more data from API when a user scrolls down a page.
- Google Fonts - Used to provide a custom font on the website.
- Font Awesome - Used to add custom icons on the website.
- Gitpod - Used as an IDE to build the project.
- GitHub - Used to store the project in a repository. Used as an agile tool.
- Prettier - Used to format code.
- ESLint - Used to validate JSX code.
- Balsamiq - Used to create wireframes.
- Diagrams.net - Used to create database model diagrams.
- Heroku - Used to deploy and host the project.
- W3C CSS Validation Service - Used to validate CSS code.

## Deployment

### Run Locally

Note that the API will also have to configured to allow access to local hosts.

- Manually Downloading the Repository:

  - Opening the project repository at: https://github.com/JamesMartin1998/lets-pick
  - Opening the dropdown on the 'code' button.
  - Downloading the zip file.
  - Extracting the files from the zip file into a new folder on your computer.
  - Opening the folder in an IDE of your choice.
  - Updating the the "start" script value to "react-scripts --openssl-legacy-provider start".
  - running "npm install" in the terminal.
  - running "npm start" in the terminal.

- Cloning the Repository:
  - Opening the project repository at: https://github.com/JamesMartin1998/lets-pick
  - Opening the dropdown on the 'code' button.
  - Copying the link under the HTTPS heading (https://github.com/JamesMartin1998/lets-pick.git).
  - Opening an IDE of your choice (must have Git support or relevant git extension).
  - Open the terminal and create a directory to store the repository.
  - Type "git clone https://github.com/JamesMartin1998/lets-pick.git" and press enter in the terminal.
  - Updating the the "start" script value to "react-scripts --openssl-legacy-provider start".
  - running "npm install" in the terminal.
  - running "npm start" in the terminal.

### Deploying to Heroku

During the development of the project, version control was used by committing and pushing the code to GitHub. The GitHub repository can be found here: https://github.com/JamesMartin1998/lets-pick

This project was deployed to Heroku by:

- Committing and pushing the code to GitHub.
- Logging in to your Heroku account at Heroku.com.
- On the Heroku website, clicking 'New' and then 'Create New App'.
- Setting the name and region and pressing 'Create App'.
- Clicking the 'Deploy' tab.
- Clicking 'Connect to GitHub', search for repository, click 'Connect'.
- Enabling Manual Deploy. Check for successful message.
- Enabling Automatic Deploys.
- The live site can be found here: https://lets-pick-app.herokuapp.com/

### Connecting to the API

In axiosDefaults.js, the "axios.defaults.baseURL" variable needs to be set to the string 'https://lets-pick.herokuapp.com/' (deployed API URL). This sets the front end website to make requests to the specifc API built in this project. Additionally, the backend API project on Heroku needs a config var of "CLIENT_ORIGIN" and the value of "https://lets-pick-app.herokuapp.com" (deployed site URL). This allows the front end website to make requests to the API.

## Credits

- Code Institute's Moments project was used to lay the foundations of this project and was adapted on to create a unique project. (https://github.com/Code-Institute-Solutions/moments/tree/bb6657e265fb18360b841e10d9d633dad06f4e5c)
- Article by Marco Antonio Bet on DevGenius used to install ESLint and Prettier. (https://blog.devgenius.io/eslint-prettier-typescript-and-react-in-2022-e5021ebca2b1)
- Sign Up / Sign In Background image - https://images.pexels.com/photos/8850709/pexels-photo-8850709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
- Football Image - https://i2-prod.manchestereveningnews.co.uk/sport/football/article24985459.ece/ALTERNATES/s615/0_GettyImages-1413133364.jpg
- Basketball Image - https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80
- No Results Image - https://codeinstitute.s3.amazonaws.com/AdvancedReact/no-results.png
- Lionel Messi Image - https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg
- Cristiano Ronaldo Image - https://imageio.forbes.com/specials-images/imageserve/627bd291633f3fbbcda36428/0x0.jpg?format=jpg&crop=2057,2059,x918,y85,safe&height=416&width=416&fit=bounds
- Pizza Image - https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
- Pasta Image - https://images.pexels.com/photos/1373915/pexels-photo-1373915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
- London Image - https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
- Paris Image - https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
- Harry Potter Image - https://www.trustedreviews.com/wp-content/uploads/sites/54/2018/11/harrypotter.jpg
- Yoda Image - https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Yoda_Attack_of_the_Clones.png/170px-Yoda_Attack_of_the_Clones.png
- Gucci Image - https://blunt.one/images/gucci-gg.jpg
- Louis Vuitton Image - https://blunt.one/images/louis_vuitton_LV.jpg
- Rabbit Image - https://cdn.britannica.com/20/194520-050-DCAE62F1/New-World-Sylvilagus-cottontail-rabbits.jpg- hamster - https://cdn.mos.cms.futurecdn.net/2Nr5Z7BJSx3bLvaAZTfwbW.jpg
- Tennis - https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTennis_ball_theorem&psig=AOvVaw1hnQI4IJiWULVqHOGBXa1j&ust=1677451753832000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjD9fDgsf0CFQAAAAAdAAAAABAE
- Badminton Image - https://upload.wikimedia.org/wikipedia/commons/d/d0/Shuttlecocks_Yonex_Aerosensa_20.jpg
- BBQ Image - https://www.google.com/url?sa=i&url=https%3A%2F%2Fnomsmagazine.com%2Fbest-korean-bbq-vancouver%2F&psig=AOvVaw1qprvK-dCqjIg7xrUsW9gG&ust=1677452163532000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNCDoLTisf0CFQAAAAAdAAAAABAF
- Chicken Image - https://tiffycooks.com/wp-content/uploads/2021/03/Korean-Fried-Chicken.png
- Summer Image - https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fsun-clipart&psig=AOvVaw3ugKAuq5Z4UUwYQdc4F1VY&ust=1677452579121000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMjlqtPksf0CFQAAAAAdAAAAABAD
- Winter Image - https://i0.wp.com/pearlyarts.com/wp-content/uploads/2022/02/Snow-Cloud-Clipart-with-outline-WM-1.png
- Cat Image - https://www.purina.co.uk/sites/default/files/2022-06/Bengal-Cat.jpg?itok=-n4U6Hsa
- Dog Image - https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn
- Chocolate Image - https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg
- Sweets Image - 	[here](data:image/jpeg;base64,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)
- Profile Image - https://codeinstitute.s3.amazonaws.com/ReactEssentials/DRF/Images/default_profile.jpg
- Upload Image - https://codeinstitute.s3.amazonaws.com/AdvancedReact/upload.png
- Logo Image - https://www.vecteezy.com/vector-art/7743118-click-here-button-with-hand-pointer-clicking-vector-icon
- Thanks to my mentor, Spencer, for his support throughout this project.
