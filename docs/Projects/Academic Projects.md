## Feast Folio
Feast Folio was a group project focusing on building a [ReactJS](https://react.dev/) web app. The App allowed users to browse a list of locally owned restaurants in the Pensacola, FL  area and privately journal their experience for future reference.

The project leveraged [Google Firebase](https://firebase.google.com/) and [Google's Identity API](https://developers.google.com/identity/protocols/oauth2) to enable persistence of the user's journals between sessions and devices.

On the Feast Folio Team, I primarily served as a developer, and I was responsible for the journaling features and implementing their Persistence with Firebase.
![Screenshot of Feast Folio](./../img/FeastFolioExample.png)
## Linen Tracking Project

Linen Tracking Project was one of my lesser successful projects, but it was a great learning experience. The local tourism areas had high volumes of hotels, whose in-house laundry rooms would frequently become overwhelmed and inadequate to meet processing demand. To remedy this, hotels would form contracts with industrial washing plants to increase their throughput.

Many such plants were locally owned, and many of which were still operating on significantly outdated and unmaintained software. Our project was to develop a self-hosted tracking application for such commercial linen washing plans.

Unfortunately we had a team member who consistently ignored team policy, failed to follow good programming practices, and frequently replaced other's work with their own at the last minute with little to no warning.

It was during this project that I learned through first-hand experience how to resolve group conflicts. In accordance with the team contract, I approached upper management on how best to deal with the recuring conflict. With the consent of the rest of the team.
## Math Game Website
To take a break from coursework and practice [ExpressJS](https://expressjs.com/) and [Handlebars](https://handlebarsjs.com/), I wrote a simple webapp that served up math problems.

<a type="button" class="btn btn-primary" href="https://github.com/EhoNo1/MathGameWebsite">Check out the Code!</a>
## Nature-Dex
Inspired by Pokemon GO, our team developed a prototype app that enabled users to connect with nature, learning more about their local ecosystem, and provide meaningful data to researchers.
## Role Playing Game Framework
Our Roleplaying Game Framework is a project that I spearheaded in our Software Engineering II class. Inspired by Roleplaying Games of Fallout and Elder Scrolls fame, our team decided to attempt to recreate game mechanics in [UnityEngine](https://unity.com/) with the focus of making it an independent module game developers could later use.

I lead the Team, planning sprint goals, developing and maintaining internal documentation, and preparing documents for our regular client meetings.

We leveraged UnityEngine's [Physics](https://docs.unity3d.com/Packages/com.unity.physics@1.0/manual/index.html), [AI](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/UnityEngine.AIModule.html), and [Unit Testing](https://docs.unity3d.com/Packages/com.unity.test-framework@1.4/manual/index.html) modules, writing flexible code in compliance with Unity's design philosophies. 

Between my duties as leader, I also developed a from scratch persistence API that enabled the positions and statistics of the player and other entities to persist and be maintained between completely independent executions of the game. 

Special considerations had to be made to ensure the persistence API would respond appropriately to the Unity Editor. Entities created in the editor were given procedurally generated UUIDs that must itself be persistent between executions and be replicated or replaced depending on how the Level Designer chooses to handle the entity in the Editor.

<a type="button" class="btn btn-primary" href="https://github.com/Group-5-Spring-CEN3032/Software-Engineering-Group-5">Check out the Code!</a> <a type="button" class="btn btn-primary" href="https://group-5-spring-cen3032.github.io/Project-Documentation/Manual/NPCs/">Read the documentation!</a>

