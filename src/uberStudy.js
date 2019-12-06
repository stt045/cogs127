const uberStudy = {
  overview: "I was able to participate in a project that focused on redesigning a feature in a ride sharing application to further improve upon in-vehicle communication. The goal of this case study is to design a feature to facilitate better in-vehicle communication between riders and drivers. Through our research, we chose to focus on alleviating the inconvenience Uber riders have when riding with a driver who doesn’t speak the same language. The language barrier between riders and drivers creates inefficiency, confusion, and discomfort. My personal goal was to create an intuitive method that did not require much cognitive load to facilitate better in-vehicle communication for the rider so that they may feel more inclined to use Uber more often.",
  background: {
    "objective": "Facilitate stronger in-vehicle communication between riders and drivers for ridesharing applications like Uber.",
    "targetUser": "Our target users are Uber riders who don’t speak the same native language as the Uber driver.",
    prevalence: "Based off of Uber and Lyft’s own reports, only 37% of drivers are white, 18% are African American, and 16% are Hispanic. That also implies that the remaining 31% are of some other ethnicity (Asian, Middle Eastern, etc.). If we assume that white and African American drivers are most likely fluent in english, that would mean 45% of drivers may not be. Although there isn’t as much data on riders, we can also assume that even if most speak English, there are still those who do not. And based on some initial surveys we sent out, over 40% of riders said they have had at least one ride with a stranger who was not fluent in English thus we can safely assume that approximately half of all Uber rides may have some sort of language barrier. Even if riders/drivers with physical handicaps are only a slim minority, that only worsens the already 50% case we have."
  },
  research: {
    goals: [
      "Build a deeper understanding of what specific pain points may be occurring through a user’s ridesharing journey.",
      "Understand how users currently deal with issues that create a communication barrier between rider and driver.",
      "Reinforce our belief that a language barrier creates unease and annoyance between both riders and drivers."
    ],
    methods: [
      "Surveying by dispersing a Google Form over Piazza and Facebook to get preliminary data on ridesharing.",
      "Interviewing by facilitating deeper conversations and learning more about a rider’s habits and pains. We were also careful to avoid leading questions and apply the 5 Why’s to truly get to the root of any apparent problem. This gave us a lot more data to work with, and diary studies gave us a better glimpse into the experiences of people who do run into language barriers, since our team didn’t have any of those experiences "
    ],
    findings: "images/findings.png",
  },
  competitiveAnalysis: "We looked at other ride sharing applications like Waze, Lyfy, Curb, and Juno to see if any of these competitors had a similar feature to mitigate a language barrier. To our surprise, none of them had language assistance features. We liked applications like Google Translate, which has a built in feature to live-translate spoken words from one language to another and felt this functionality would be crucial to alleviating a language barrier.",
  compChart: "images/compAnalysis.png",
  wazeComp: "images/wazeComp.png",
  UXFlows: {
    overview: "We went on to create a UX flows of our feature. The entry point of the feature begins as soon as the rider is picked up by the driver.",
    one: {
      driverImage: "images/Drivers.png",
      riderImage: "images/Riders.png",
      description: "Our focus for this flow was to emphasize the live-translation feature from Google Translate. Similar to iMessage’s ‘dictation’ function, text gets displayed on the user’s phone as they speak into the mic, confirming their phrase, translated, and sent to the driver to listen to. With this flow, riders speak their minds, without having to worry about typing anything."
    },
    two: {
      image: "images/findFriendsFlow.png",
      description: "This flow focuses on extending the feature of adding pickup notes to also include an “invite friends” section. From some of the interviews we did, we noticed that the best experiences that fostered the most communication amongst passengers were those where riders were not alone since it can feel more comfortable for riders to speak to strangers when they are with someone they confide in like a friend. We added flows for the case in which more friends than they planned for might join the ride thus prompting us to ask users to re-select their vehicles if they have more than expected."
    }
  },
  UISketches: {
    overview: "Next, we went on to create UI Sketches based on our UX flow. In doing so, we realized that there exist visual elements that our flows didn’t account for. We now had to think about how the rider has to interact with their phone before, during, and after speaking into the phone for live-translation. This processed helped us understand the value in creating lo-fi designs.",
    image: "images/uiSketches.png"
  },
  paperPrototypes: {
    overview: "Moving forward, we created our paper prototypes. This is the step in which we really took into consideration designing for better user interaction. Buttons, dialogs, modals, and such were all created with separate pieces of paper so that ourselves and our user testing participants could interact with the prototype much like how we would interact with a real mobile application.",
    one: {
      image: "images/PaperPrototype1.png",
      description: "The first one enables riders to freely chat with their driver through live translations that allow riders to send messages via voice or text. The application would then translate the message and read it aloud to the driver. In this prototype, there is also a feature to view the chat history, which allows the users to recall the conversation without having to think about it. It also promotes safety for both riders and drivers as it would record cases in which inappropriate conversations are had."
    },
    two: {
      image: "images/PaperPrototype2.png",
      description: "The second prototype branches off on the singular idea of translating a message via voice. There exists a modal with quick shortcut options for riders who are mute, shy, or have other disabilities/reasons for which they cannot speak. This version streamlines the way riders can change their desired drop-off location or notify the driver of any requests like changing the AC or music choice. All these options are alongside the option to speak into the microphone to translate the message."
    },
    userTesting: {
      participants: "UCSD international students who don’t speak English well",
      tasks: [
        "You’re in the middle of an Uber ride to Warren Lecture Hall, you’re halfway there and notice that your destination is actually Galbraith Hall. Try to change your destination to Warren.",
        "You were in the middle of something when your driver sends you a message, you ignored it for now to finish up and now want to reply. Locate your chat history with your driver and respond.",
        "It’s a super hot day in the Summer and you just finished a hike with your friends to Black’s Beach. You’re all on an Uber home and realize none of you guys have any water left. Ask your driver via the app if he has any water."
      ],
      results: "Users liked the simplicity of Prototype 1 and felt that it was extremely useful due to the diversity of Uber drivers and riders. They also liked the quick options of Prototype 2 and the message verification statuses. However, users had complications with understanding what the quick options were because they weren’t labeled with text. They also wanted to have the option to create custom quick option shortcuts. There were also issues with users pressing on the wrong buttons when trying to initiate the live-translation feature.",
      pov: {
        next: ""
      },
      image: "images/UserTestingPhotos.png"
    }
  },
  hifiPrototypes: "Our hi-fidelity prototype builds on top of our Paper Prototype 2. After having tested it with users, we learned that they like the simplicity of automatically speaking into the microphone, but also enjoy the quick options. The quick options exist to communicate more complex requests/conversation, allowing flexibility in how riders may communicate with their driver. \n We created two versions that displayed different designs and methods to access the quick options.One is a card view that always persists on top of the map.The other is a small circle in the bottom corner that expands when being interacted with.We thought this might be a better design because it doesn’t distract the user as much as the card view.",
  hifiOne: "images/HifiOne.png",
  hifiTwo: "images/HifiTwo.png",
  messageHifi: "images/MessageHiFi.png",
  chatHifi: "images/ChatHiFi.png",
  refiningPrototypes: "After our first iteration of hi-fi prototypes, we wanted to move forward with more testing. We invited previous participants as well as new people from class. \n Our overall feedback indicates that the quick options were limited to the pre-chosen options we laid out. We wanted to add the ability to create a custom command in replace of the preset ones in the case the user wants it. They said that they never encountered these scenarios where these options would be useful. They did however mention that they have had to ask the driver to stop to find a restroom, or ask for water. This feedback gave us the idea to implement the functionality to add and create your own custom shortcut message for the driver. \n  We also received much feedback on the visuals of our design. We learned in which cases text appeared too small or buttons didn’t appear in expected places. \n We found that the card view was disliked, but the quick options design was also confusing because the option icons were not labeled with corresponding text. \n We also got feedback that the chat history feature was not pertinent enough to the main goal of our feature and that it shouldn’t be displayed on the main screen. We decided to tuck away this feature in the settings view.",
  reflection: "I am primarily a developer, so I learned a lot while conducting this case study. Going through all the iterations of designing, I realized how much work and thought needs to go into even creating the simplest of features. For the future of this project I want to better understand real world constraints of designs and how complex design systems work.",
  bryant: "images/bryant.png",
  mona: "images/mona.png",
  jerry: "images/jerry.png",
  header: "images/Header.png"
};

export default uberStudy;