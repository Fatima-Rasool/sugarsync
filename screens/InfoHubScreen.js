// // // // import React from 'react';
// // // // import { View, Text, StyleSheet } from 'react-native';

// // // // const InfoHubScreen = () => {
// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text style={styles.text}>Info Hub Screen</Text>
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     backgroundColor: '#C6EBC9',
// // // //   },
// // // //   text: {
// // // //     fontSize: 24,
// // // //     fontWeight: 'bold',
// // // //     color: '#333',
// // // //   },
// // // // });

// // // // export default InfoHubScreen;
// // // import React, { useRef } from 'react';
// // // import { View, Text, FlatList, TouchableOpacity, Animated, StyleSheet } from 'react-native';
// // // import { useNavigation } from '@react-navigation/native';

// // // // Dummy data for articles
// // // const articles = [
// // //   { id: '1', title: 'How to Improve Your Productivity', content: 'Productivity tips and tricks...' },
// // //   { id: '2', title: 'The Benefits of a Balanced Diet', content: 'A balanced diet ensures a healthy life...' },
// // //   { id: '3', title: 'Understanding Mental Health', content: 'Mental health is equally important as physical health...' },
// // //   // Add more articles if necessary
// // // ];

// // // const InfoHubScreen = () => {
// // //   const navigation = useNavigation();
// // //   const scaleAnim = useRef(new Animated.Value(1)).current;

// // //   const handleCardPress = (article) => {
// // //     navigation.navigate('Article', { article }); // Navigate to the article screen
// // //   };

// // //   const renderItem = ({ item }) => {
// // //     return (
// // //       <TouchableOpacity
// // //         activeOpacity={0.7}
// // //         onPress={() => handleCardPress(item)}
// // //         onPressIn={() => Animated.spring(scaleAnim, { toValue: 0.95, useNativeDriver: true }).start()}
// // //         onPressOut={() => Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start()}
// // //       >
// // //         <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
// // //           <Text style={styles.cardTitle}>{item.title}</Text>
// // //         </Animated.View>
// // //       </TouchableOpacity>
// // //     );
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <FlatList
// // //         data={articles}
// // //         renderItem={renderItem}
// // //         keyExtractor={(item) => item.id}
// // //         contentContainerStyle={styles.list}
// // //       />
// // //     </View>
// // //   );
// // // };

// // // export default InfoHubScreen;

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 10,
// // //     backgroundColor: '#f0f0f0',
// // //   },
// // //   list: {
// // //     paddingBottom: 20,
// // //   },
// // //   card: {
// // //     backgroundColor: '#fff',
// // //     padding: 20,
// // //     borderRadius: 10,
// // //     marginVertical: 10,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 5,
// // //     elevation: 3,
// // //   },
// // //   cardTitle: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     color: '#333',
// // //   },
// // // // });
// // // import React from 'react';
// // // import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// // // const articles = [
// // //   {
// // //     id: '1',
// // //     title: 'Understanding Nutrition',
// // //     description: 'Learn about the different nutrients and their importance.',
// // //   },
// // //   {
// // //     id: '2',
// // //     title: 'Healthy Eating Habits',
// // //     description: 'Tips for maintaining a balanced diet.',
// // //   },
// // //   {
// // //     id: '3',
// // //     title: 'The Benefits of Regular Exercise',
// // //     description: 'How exercise improves your health.',
// // //   },
// // //   // Add more articles as needed
// // // ];

// // // const InfoHubScreen = ({ navigation }) => {
// // //   const renderItem = ({ item }) => (
// // //     <TouchableOpacity
// // //       style={styles.card}
// // //       onPress={() => navigation.navigate('Article', { articleId: item.id })}
// // //     >
// // //       <Text style={styles.title}>{item.title}</Text>
// // //       <Text style={styles.description}>{item.description}</Text>
// // //     </TouchableOpacity>
// // //   );

// // //   return (
// // //     <View style={styles.container}>
// // //       <FlatList
// // //         data={articles}
// // //         renderItem={renderItem}
// // //         keyExtractor={(item) => item.id}
// // //         contentContainerStyle={styles.list}
// // //       />
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 16,
// // //   },
// // //   list: {
// // //     paddingBottom: 16,
// // //   },
// // //   card: {
// // //     backgroundColor: '#f9f9f9',
// // //     borderRadius: 8,
// // //     padding: 16,
// // //     marginBottom: 16,
// // //     shadowColor: '#000',
// // //     shadowOffset: {
// // //       width: 0,
// // //       height: 2,
// // //     },
// // //     shadowOpacity: 0.2,
// // //     shadowRadius: 2,
// // //     elevation: 1,
// // //   },
// // //   title: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //   },
// // //   description: {
// // //     fontSize: 14,
// // //     marginTop: 4,
// // //   },
// // // });

// // // export default InfoHubScreen;












// // // import React from 'react';
// // // import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// // // // Sample data for the articles
// // // const articles = [
// // //   {
// // //     id: '1',
// // //     title: 'Understanding Nutrition',
// // //     description: 'Learn about the different nutrients and their importance.',
// // //   },
// // //   {
// // //     id: '2',
// // //     title: 'Healthy Eating Habits',
// // //     description: 'Tips for maintaining a balanced diet.',
// // //   },
// // //   {
// // //     id: '3',
// // //     title: 'The Benefits of Regular Exercise',
// // //     description: 'How exercise improves your health.',
// // //   },
// // //   // Add more articles as needed
// // // ];

// // // const InfoHubScreen = ({ navigation }) => {
// // //   const renderItem = ({ item }) => (
// // //     <TouchableOpacity
// // //       style={styles.card}
// // //       onPress={() => navigation.navigate('Article', { articleId: item.id })} // Navigate to ArticleScreen
// // //     >
// // //       <Text style={styles.title}>{item.title}</Text>
// // //       <Text style={styles.description}>{item.description}</Text>
// // //     </TouchableOpacity>
// // //   );

// // //   return (
// // //     <View style={styles.container}>
// // //       <FlatList
// // //         data={articles}
// // //         renderItem={renderItem}
// // //         keyExtractor={(item) => item.id}
// // //         contentContainerStyle={styles.list}
// // //       />
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 16,
// // //   },
// // //   list: {
// // //     paddingBottom: 16,
// // //   },
// // //   card: {
// // //     backgroundColor: '#f9f9f9',
// // //     borderRadius: 8,
// // //     padding: 16,
// // //     marginBottom: 16,
// // //     shadowColor: '#000',
// // //     shadowOffset: {
// // //       width: 0,
// // //       height: 2,
// // //     },
// // //     shadowOpacity: 0.2,
// // //     shadowRadius: 2,
// // //     elevation: 1,
// // //   },
// // //   title: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //   },
// // //   description: {
// // //     fontSize: 14,
// // //     marginTop: 4,
// // //   },
// // // });

// // // export default InfoHubScreen;
// // import React from 'react';
// // import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// // // Sample data for the articles
// // const articles = [
// //   {
// //     id: '1',
// //     title: 'Understanding Nutrition',
// //     description: 'Learn about the different nutrients and their importance.',
// //   },
// //   {
// //     id: '2',
// //     title: 'Healthy Eating Habits',
// //     description: 'Tips for maintaining a balanced diet.',
// //   },
// //   {
// //     id: '3',
// //     title: 'The Benefits of Regular Exercise',
// //     description: 'How exercise improves your health.',
// //   },
// //   // Add more articles as needed
// // ];

// // // Function to determine card color based on article ID
// // const getCardColor = (id) => {
// //   switch (id) {
// //     case '1':
// //       return '#ffe0b2'; // Light amber for Article 1
// //     case '2':
// //       return '#e1bee7'; // Light purple for Article 2
// //     case '3':
// //       return '#bbdefb'; // Light blue for Article 3
// //     default:
// //       return '#ffffff'; // Default to white
// //   }
// // };

// // const InfoHubScreen = ({ navigation }) => {
// //   const renderItem = ({ item }) => (
// //     <TouchableOpacity
// //       style={[styles.card, { backgroundColor: getCardColor(item.id) }]} // Dynamic card color
// //       onPress={() => navigation.navigate('Article', { articleId: item.id })} // Navigate to ArticleScreen
// //     >
// //       <Text style={styles.title}>{item.title}</Text>
// //       <Text style={styles.description}>{item.description}</Text>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <FlatList
// //         data={articles}
// //         renderItem={renderItem}
// //         keyExtractor={(item) => item.id}
// //         contentContainerStyle={styles.list}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //     backgroundColor: '#e3f2fd', // Light blue background for the Info Hub screen
// //   },
// //   list: {
// //     paddingBottom: 16,
// //   },
// //   card: {
// //     borderRadius: 8,
// //     padding: 16,
// //     marginBottom: 16,
// //     shadowColor: '#000',
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 2,
// //     elevation: 1,
// //   },
// //   title: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#333', // Dark text color for the title
// //   },
// //   description: {
// //     fontSize: 14,
// //     marginTop: 4,
// //     color: '#666', // Gray text color for the description
// //   },
// // });

// // export default InfoHubScreen;
// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// // Sample data for the articles
// const articles = [
//   {
//     id: '1',
//     title: 'Understanding Nutrition',
//     description: 'Learn about the different nutrients and their importance.',
//   },
//   {
//     id: '2',
//     title: 'Healthy Eating Habits',
//     description: 'Tips for maintaining a balanced diet.',
//   },
//   {
//     id: '3',
//     title: 'The Benefits of Regular Exercise',
//     description: 'How exercise improves your health.',
//   },
//   // Add more articles as needed
// ];

// // Previous color choices
// const colors = ['#FFDDC1', '#CFFFE5', '#D3E4F7', '#FFEAB6'];

// const InfoHubScreen = ({ navigation }) => {
//   const renderItem = ({ item }) => {
//     const cardColor = colors[parseInt(item.id) - 1] || '#FFFFFF'; // Default color
//     return (
//       <TouchableOpacity
//         style={[styles.card, { backgroundColor: cardColor }]} // Set card color
//         onPress={() => navigation.navigate('Article', { articleId: item.id, cardColor: cardColor })}
//       >
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.description}>{item.description}</Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={articles}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   list: {
//     paddingBottom: 16,
//   },
//   card: {
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 1,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 14,
//     marginTop: 4,
//   },
// });

// export default InfoHubScreen;
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Sample data for the articles
const articles = [
  {
    id: '1',
    title: 'Understanding Nutrition',
    description: 'Learn about the different nutrients and their importance.',
  },
  {
    id: '2',
    title: 'Healthy Eating Habits',
    description: 'Tips for maintaining a balanced diet.',
  },
  {
    id: '3',
    title: 'The Benefits of Regular Exercise',
    description: 'How exercise improves your health.',
  },
  {
    id: '4',
    title: 'Healthy Meal Prep',
    description: 'How to prepare meals for the week.',
  },
  {
    id: '5',
    title: 'Understanding Food Labels',
    description: 'How to read and understand food labels.',
  },
  {
    id: '6',
    title: 'The Importance of Hydration',
    description: 'Why staying hydrated is essential for health.',
  },
  {
    id: '7',
    title: 'Balanced Diet Essentials',
    description: 'Components of a balanced diet.',
  },
  {
    id: '8',
    title: 'Mindful Eating Practices',
    description: 'Techniques to improve your eating habits.',
  },
  {
    id: '9',
    title: 'Healthy Snacking Options',
    description: 'Ideas for nutritious snacks.',
  },
  {
    id: '10',
    title: 'Cooking with Whole Foods',
    description: 'Benefits of using whole foods in your meals.',
  },
  {
    id: '11',
    title: 'Exercise for Mental Health',
    description: 'How exercise can improve your mood.',
  },
  {
    id: '12',
    title: 'The Role of Vitamins',
    description: 'Understanding essential vitamins for health.',
  },
  {
    id: '13',
    title: 'The Benefits of Meditation',
    description: 'How meditation can enhance well-being.',
  },
  {
    id: '14',
    title: 'Setting Fitness Goals',
    description: 'How to set and achieve fitness goals.',
  },
  {
    id: '15',
    title: 'Eating for Energy',
    description: 'Foods that can boost your energy levels.',
  },
];

// Previous color choices
const colors = ['#FFDDC1', '#CFFFE5', '#D3E4F7', '#FFEAB6', '#FFD6C1', '#D5E1DF', '#FFABAB', '#FFC3A0', '#D9BF77', '#FF677D', '#D9BF77', '#A8DADC', '#F1FAEE', '#F6D55C', '#4C3A6D', '#F1C0A8'];

const InfoHubScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    const cardColor = colors[parseInt(item.id) - 1] || '#FFFFFF'; // Default color
    return (
      <TouchableOpacity
        style={[styles.card, { backgroundColor: cardColor }]} // Set card color
        onPress={() => navigation.navigate('Article', { articleId: item.id, cardColor: cardColor })}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0', // Change background color for Info Hub Screen
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default InfoHubScreen;
