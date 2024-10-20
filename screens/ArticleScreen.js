// // // // // // // import React from 'react';
// // // // // // // import { View, Text, StyleSheet } from 'react-native';

// // // // // // // const ArticleScreen = ({ route }) => {
// // // // // // //   const { articleId } = route.params;

// // // // // // //   // In a real app, you would fetch the article data using the articleId
// // // // // // //   // For now, we'll just display the articleId as a placeholder
// // // // // // //   return (
// // // // // // //     <View style={styles.container}>
// // // // // // //       <Text style={styles.title}>Article {articleId}</Text>
// // // // // // //       <Text style={styles.content}>This is where the full article will be displayed.</Text>
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: {
// // // // // // //     flex: 1,
// // // // // // //     padding: 16,
// // // // // // //   },
// // // // // // //   title: {
// // // // // // //     fontSize: 24,
// // // // // // //     fontWeight: 'bold',
// // // // // // //   },
// // // // // // //   content: {
// // // // // // //     fontSize: 16,
// // // // // // //     marginTop: 16,
// // // // // // //   },
// // // // // // // });

// // // // // // // export default ArticleScreen;

// // // // // // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // // // // // import React from 'react';
// // // // // // // import { View, Text } from 'react-native';

// // // // // // // const ArticleScreen = ({ route }) => {
// // // // // // //   const { articleId } = route.params;

// // // // // // //   // You would normally fetch the article content based on the articleId
// // // // // // //   // Here, we are just simulating it
// // // // // // //   const articleContent = {
// // // // // // //     '1': 'This is the full content of Article 1',
// // // // // // //     '2': 'This is the full content of Article 2',
// // // // // // //   }[articleId];

// // // // // // //   return (
// // // // // // //     <View style={{ padding: 20 }}>
// // // // // // //       <Text style={{ fontSize: 24, marginBottom: 20 }}>Article {articleId}</Text>
// // // // // // //       <Text>{articleContent}</Text>
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ArticleScreen;

// // // // // // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // // // // // import React from 'react';
// // // // // // // import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// // // // // // // const InfoHubScreen = ({ navigation }) => {
// // // // // // //   // Sample data for the articles
// // // // // // //   const articles = [
// // // // // // //     { id: '1', title: 'Article 1', content: 'Content of Article 1' },
// // // // // // //     { id: '2', title: 'Article 2', content: 'Content of Article 2' },
// // // // // // //     // Add more articles as needed
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <View style={{ flex: 1 }}>
// // // // // // //       <FlatList
// // // // // // //         data={articles}
// // // // // // //         keyExtractor={item => item.id}
// // // // // // //         renderItem={({ item }) => (
// // // // // // //           <TouchableOpacity
// // // // // // //             onPress={() => navigation.navigate('Article', { articleId: item.id })}
// // // // // // //             style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
// // // // // // //           >
// // // // // // //             <Text style={{ fontSize: 18 }}>{item.title}</Text>
// // // // // // //           </TouchableOpacity>
// // // // // // //         )}
// // // // // // //       />
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default InfoHubScreen;




// // // // // // // import React from 'react';
// // // // // // // import { View, Text, StyleSheet } from 'react-native';

// // // // // // // const ArticleScreen = ({ route }) => {
// // // // // // //   const { articleId } = route.params; // Extract the articleId from route params
// // // // // // //   const articleContent = `Content of Article ${articleId}`; // Placeholder content

// // // // // // //   return (
// // // // // // //     <View style={styles.container}>
// // // // // // //       <Text style={styles.title}>Article {articleId}</Text>
// // // // // // //       <Text style={styles.content}>{articleContent}</Text>
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: {
// // // // // // //     flex: 1,
// // // // // // //     padding: 16,
// // // // // // //   },
// // // // // // //   title: {
// // // // // // //     fontSize: 24,
// // // // // // //     fontWeight: 'bold',
// // // // // // //   },
// // // // // // //   content: {
// // // // // // //     fontSize: 16,
// // // // // // //     marginTop: 10,
// // // // // // //   },
// // // // // // // });

// // // // // // // export default ArticleScreen;



// // // // // // import React from 'react';
// // // // // // import { View, Text, StyleSheet } from 'react-native';

// // // // // // const ArticleScreen = ({ route }) => {
// // // // // //   const { articleId } = route.params;

// // // // // //   // For demonstration purposes, let's assume you have a function to get the article content based on the ID
// // // // // //   const getArticleContent = (id) => {
// // // // // //     const articles = {
// // // // // //       '1': 'Content for Understanding Nutrition',
// // // // // //       '2': 'Content for Healthy Eating Habits',
// // // // // //       '3': 'Content for The Benefits of Regular Exercise',
// // // // // //     };
// // // // // //     return articles[id] || 'Article not found';
// // // // // //   };

// // // // // //   return (
// // // // // //     <View style={styles.container}>
// // // // // //       <Text style={styles.title}>Article {articleId}</Text>
// // // // // //       <Text style={styles.content}>{getArticleContent(articleId)}</Text>
// // // // // //     </View>
// // // // // //   );
// // // // // // };

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: {
// // // // // //     flex: 1,
// // // // // //     padding: 16,
// // // // // //   },
// // // // // //   title: {
// // // // // //     fontSize: 24,
// // // // // //     fontWeight: 'bold',
// // // // // //   },
// // // // // //   content: {
// // // // // //     fontSize: 16,
// // // // // //     marginTop: 10,
// // // // // //   },
// // // // // // });

// // // // // // export default ArticleScreen;











// // // // // import React from 'react';
// // // // // import { View, Text, StyleSheet } from 'react-native';

// // // // // const ArticleScreen = ({ route }) => {
// // // // //   const { articleId } = route.params; // Get the articleId from params

// // // // //   const getArticleContent = (id) => {
// // // // //     const articles = {
// // // // //       '1': 'Content for Understanding Nutrition',
// // // // //       '2': 'Content for Healthy Eating Habits',
// // // // //       '3': 'Content for The Benefits of Regular Exercise',
// // // // //     };
// // // // //     return articles[id] || 'Article not found';
// // // // //   };

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <Text style={styles.title}>Article {articleId}</Text>
// // // // //       <Text style={styles.content}>{getArticleContent(articleId)}</Text>
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     padding: 16,
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: 24,
// // // // //     fontWeight: 'bold',
// // // // //   },
// // // // //   content: {
// // // // //     fontSize: 16,
// // // // //     marginTop: 10,
// // // // //   },
// // // // // });

// // // // // export default ArticleScreen;
// // // // import React from 'react';
// // // // import { View, Text, StyleSheet } from 'react-native';

// // // // const ArticleScreen = ({ route }) => {
// // // //   const { articleId, cardColor } = route.params;

// // // //   // You can fetch article content based on the articleId if needed
// // // //   const getArticleContent = (id) => {
// // // //     switch (id) {
// // // //       case '1':
// // // //         return { title: 'Understanding Nutrition', content: 'Detailed content about nutrition.' };
// // // //       case '2':
// // // //         return { title: 'Healthy Eating Habits', content: 'Tips for healthy eating.' };
// // // //       case '3':
// // // //         return { title: 'The Benefits of Regular Exercise', content: 'Exercise benefits overview.' };
// // // //       default:
// // // //         return { title: 'Article Not Found', content: 'This article does not exist.' };
// // // //     }
// // // //   };

// // // //   const article = getArticleContent(articleId);

// // // //   return (
// // // //     <View style={[styles.container, { backgroundColor: cardColor }]}>
// // // //       <Text style={styles.title}>{article.title}</Text>
// // // //       <Text style={styles.content}>{article.content}</Text>
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     padding: 16,
// // // //   },
// // // //   title: {
// // // //     fontSize: 24,
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 16,
// // // //   },
// // // //   content: {
// // // //     fontSize: 16,
// // // //   },
// // // // });

// // // // export default ArticleScreen;
// // // import React from 'react';
// // // import { View, Text, StyleSheet } from 'react-native';

// // // const ArticleScreen = ({ route }) => {
// // //   const { articleId, cardColor } = route.params;

// // //   // Function to get article content based on articleId
// // //   const getArticleContent = (id) => {
// // //     switch (id) {
// // //       case '1':
// // //         return { title: 'Understanding Nutrition', content: 'Detailed content about nutrition.' };
// // //       case '2':
// // //         return { title: 'Healthy Eating Habits', content: 'Tips for healthy eating.' };
// // //       case '3':
// // //         return { title: 'The Benefits of Regular Exercise', content: 'Exercise benefits overview.' };
// // //       default:
// // //         return { title: 'Article Not Found', content: 'This article does not exist.' };
// // //     }
// // //   };

// // //   const article = getArticleContent(articleId);

// // //   return (
// // //     <View style={[styles.container, { backgroundColor: cardColor }]}>
// // //       <Text style={styles.title}>{article.title}</Text>
// // //       <Text style={styles.content}>{article.content}</Text>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 16,
// // //   },
// // //   title: {
// // //     fontSize: 24,
// // //     fontWeight: 'bold',
// // //     marginBottom: 16,
// // //   },
// // //   content: {
// // //     fontSize: 16,
// // //   },
// // // });

// // // export default ArticleScreen;
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // const ArticleScreen = ({ route }) => {
// //   const { articleId, cardColor } = route.params;

// //   // Function to get article content based on articleId
// //   const getArticleContent = (id) => {
// //     switch (id) {
// //       case '1':
// //         return { title: 'Understanding Nutrition', content: 'Detailed content about nutrition, including macronutrients and micronutrients.' };
// //       case '2':
// //         return { title: 'Healthy Eating Habits', content: 'Tips for healthy eating, such as portion control and meal planning.' };
// //       case '3':
// //         return { title: 'The Benefits of Regular Exercise', content: 'How exercise improves your health, mood, and energy levels.' };
// //       case '4':
// //         return { title: 'Healthy Meal Prep', content: 'Strategies for preparing meals ahead of time to save effort and eat healthily.' };
// //       case '5':
// //         return { title: 'Understanding Food Labels', content: 'Learn how to read food labels to make informed choices.' };
// //       case '6':
// //         return { title: 'The Importance of Hydration', content: 'Why staying hydrated is essential for overall health and well-being.' };
// //       case '7':
// //         return { title: 'Balanced Diet Essentials', content: 'Components of a balanced diet and their significance for health.' };
// //       case '8':
// //         return { title: 'Mindful Eating Practices', content: 'Techniques to enhance your eating experience and relationship with food.' };
// //       case '9':
// //         return { title: 'Healthy Snacking Options', content: 'Ideas for nutritious snacks to keep you energized throughout the day.' };
// //       case '10':
// //         return { title: 'Cooking with Whole Foods', content: 'Benefits of using whole foods in your meals for better nutrition.' };
// //       case '11':
// //         return { title: 'Exercise for Mental Health', content: 'How exercise can positively affect your mental health.' };
// //       case '12':
// //         return { title: 'The Role of Vitamins', content: 'Understanding essential vitamins and their role in maintaining health.' };
// //       case '13':
// //         return { title: 'The Benefits of Meditation', content: 'How meditation can improve your mental well-being and stress management.' };
// //       case '14':
// //         return { title: 'Setting Fitness Goals', content: 'How to effectively set and achieve fitness goals.' };
// //       case '15':
// //         return { title: 'Eating for Energy', content: 'Foods that can help boost your energy levels throughout the day.' };
// //       default:
// //         return { title: 'Article Not Found', content: 'This article does not exist.' };
// //     }
// //   };

// //   const article = getArticleContent(articleId);

// //   return (
// //     <View style={[styles.container, { backgroundColor: cardColor }]}>
// //       <Text style={styles.title}>{article.title}</Text>
// //       <Text style={styles.content}>{article.content}</Text>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 16,
// //   },
// //   content: {
// //     fontSize: 16,
// //   },
// // });

// // export default ArticleScreen;
// import React, { useEffect, useRef } from 'react';
// import { View, Text, StyleSheet, Animated } from 'react-native';

// const ArticleScreen = ({ route }) => {
//   const { articleId, cardColor } = route.params;
//   const slideAnim = useRef(new Animated.Value(-100)).current; // Initial value for slide position

//   // Function to get article content based on articleId
//   const getArticleContent = (id) => {
//     switch (id) {
//       case '1':
//         return { title: 'Understanding Nutrition', content: 'Detailed content about nutrition, including macronutrients and micronutrients.' };
//       case '2':
//         return { title: 'Healthy Eating Habits', content: 'Tips for healthy eating, such as portion control and meal planning.' };
//       case '3':
//         return { title: 'The Benefits of Regular Exercise', content: 'How exercise improves your health, mood, and energy levels.' };
//       // Add more articles as needed...
//       default:
//         return { title: 'Article Not Found', content: 'This article does not exist.' };
//     }
//   };

//   const article = getArticleContent(articleId);

//   // Use effect to start slide in animation when the component mounts
//   useEffect(() => {
//     Animated.timing(slideAnim, {
//       toValue: 0, // Slide to its final position
//       duration: 500, // Duration of the animation
//       useNativeDriver: true, // Use native driver for better performance
//     }).start();
//   }, [slideAnim]);

//   return (
//     <View style={[styles.container, { backgroundColor: cardColor }]}>
//       <Animated.View style={{ transform: [{ translateY: slideAnim }] }}>
//         <Text style={styles.title}>{article.title}</Text>
//         <Text style={styles.content}>{article.content}</Text>
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   content: {
//     fontSize: 16,
//   },
// });

// export default ArticleScreen;
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const ArticleScreen = ({ route }) => {
  const { articleId, cardColor } = route.params;
  const slideAnim = useRef(new Animated.Value(-100)).current; // Initial value for slide position

  // Function to get article content based on articleId
  const getArticleContent = (id) => {
    switch (id) {
      case '1':
        return { title: 'Understanding Nutrition', content: 'Detailed content about nutrition, including macronutrients and micronutrients.' };
      case '2':
        return { title: 'Healthy Eating Habits', content: 'Tips for healthy eating, such as portion control and meal planning.' };
      case '3':
        return { title: 'The Benefits of Regular Exercise', content: 'How exercise improves your health, mood, and energy levels.' };
      case '4':
        return { title: 'Mental Health Awareness', content: 'Understanding the importance of mental health and self-care.' };
      case '5':
        return { title: 'Hydration and Health', content: 'The role of water in maintaining good health.' };
      case '6':
        return { title: 'Nutrition Labels Decoded', content: 'How to read and understand nutrition labels on food products.' };
      case '7':
        return { title: 'The Impact of Sugar on Health', content: 'Understanding how sugar affects the body and tips to reduce intake.' };
      case '8':
        return { title: 'Plant-Based Diet Benefits', content: 'Exploring the advantages of adopting a plant-based diet.' };
      case '9':
        return { title: 'Meal Prepping for Success', content: 'Tips for effective meal prepping to save time and eat healthy.' };
      case '10':
        return { title: 'The Role of Fiber in Diet', content: 'Why fiber is essential for a healthy digestive system.' };
      case '11':
        return { title: 'Healthy Snack Ideas', content: 'Quick and nutritious snack ideas to keep you energized.' };
      case '12':
        return { title: 'Understanding Food Portions', content: 'How to manage portion sizes for better health.' };
      case '13':
        return { title: 'Benefits of Mindful Eating', content: 'How being mindful during meals can improve your health.' };
      case '14':
        return { title: 'Exercise Routines for Beginners', content: 'Simple exercise routines for those just starting out.' };
      case '15':
        return { title: 'Yoga for Stress Relief', content: 'How yoga can help reduce stress and promote relaxation.' };
      default:
        return { title: 'Article Not Found', content: 'This article does not exist.' };
    }
  };

  const article = getArticleContent(articleId);

  // Use effect to start slide in animation when the component mounts
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // Slide to its final position
      duration: 500, // Duration of the animation
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [slideAnim]);

  return (
    <View style={[styles.container, { backgroundColor: cardColor }]}>
      <Animated.View style={{ transform: [{ translateY: slideAnim }] }}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.content}>{article.content}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
  },
});

export default ArticleScreen;
