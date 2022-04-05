const useLanguageReviews = () => {
  const reviews = [
    {
      id: 1,
      image: "https://tonmoyac.github.io/e-school/images/Photos/teacher.png",
      name: "Jhankar Mahbub",
      description:
        "Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it requires less coding and offers more functionality, as opposed to JavaScript, where coding often gets complex very quickly.",
      ratings: 5,
    },
    {
      id: 2,
      image: "http://surl.li/brpyy",
      name: "Mezbaul Abedin Persian",
      description:
        "Improved performance: React uses Virtual DOM, thereby creating web applications faster. Virtual DOM compares the components’ previous states and updates only the items in the Real DOM that were changed.",
      ratings: 5,
    },
    {
      id: 3,
      image: "http://surl.li/brpzt",
      name: "Rasel Ahmed",
      description:
        "Dedicated tools for easy debugging: Facebook has released a Chrome extension that can be used to debug React applications. This makes the process of debugging React web applications faster and easier.",
      ratings: 5,
    },
    {
      id: 4,
      image: "http://surl.li/brqcm",
      name: "Najmus Sakib",
      description:
        "Unidirectional data flow: React follows a unidirectional data flow. This means that when designing a React app, developers often nest child components within parent components. Since the data flows in a single direction, it becomes easier to debug errors.",
      ratings: 5,
    },
    {
      id: 5,
      image: "http://surl.li/brqda",
      name: "Emdadul Hoque Tareque",
      description:
        "Small learning curve: React is easy to learn, as it mostly combines basic HTML and JavaScript concepts with some beneficial additions. Still, as is the case with other tools and frameworks, you have to spend some time to get a proper understanding.",
      ratings: 5,
    },
    {
      id: 6,
      image: "http://surl.li/brqdi",
      name: "Rezaul Karim Hassan",
      description:
        "Reusable components: Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their logic and controls, and they can be reused throughout the application.",
      ratings: 5,
      
      
    },
  ];

  return [reviews];
};

export default useLanguageReviews;
