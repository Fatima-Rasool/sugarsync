// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
// import { getCurrentSteps } from './api'; // Import your API function

// const motivationalQuotes = [
//   "Believe in yourself and all that you are.",
//   "Your limitation—it's only your imagination.",
//   "Push yourself, because no one else is going to do it for you.",
//   "Great things never come from comfort zones.",
//   "Dream it. Wish it. Do it.",
//   "Success doesn’t just find you. You have to go out and get it.",
//   "The harder you work for something, the greater you’ll feel when you achieve it.",
//   "Dream bigger. Do bigger.",
//   "Don’t stop when you’re tired. Stop when you’re done.",
//   "Wake up with determination. Go to bed with satisfaction.",
//   "Do something today that your future self will thank you for.",
//   "Little things make big days.",
//   "It’s going to be hard, but hard does not mean impossible.",
//   "Don’t wait for opportunity. Create it.",
//   "Sometimes you have to create your own sunshine.",
//   "Hustle for that muscle.",
//   "The key to success is to focus on goals, not obstacles.",
//   "Dream it. Believe it. Build it.",
//   "Motivation is what gets you started. Habit is what keeps you going.",
//   "You don’t have to be great to start, but you have to start to be great.",
//   "If you want it, work for it.",
//   "Success is not for the lazy.",
//   "Believe you can and you’re halfway there.",
//   "Act as if what you do makes a difference. It does.",
//   "Success usually comes to those who are too busy to be looking for it.",
//   "Opportunities don’t happen. You create them.",
//   "Your life does not get better by chance, it gets better by change.",
//   "The only way to do great work is to love what you do.",
//   "If you can dream it, you can do it.",
//   "The future depends on what you do today.",
//   "Success is not how high you have climbed, but how you make a positive difference to the world.",
//   "You are never too old to set another goal or to dream a new dream.",
// ];

// const HomeScreen = () => {
//   const [glucose, setGlucose] = useState('');
//   const [bloodPressure, setBloodPressure] = useState('');
//   const [insulin, setInsulin] = useState('');
//   const [steps, setSteps] = useState(0);
//   const [workoutStreak, setWorkoutStreak] = useState(Array(31).fill(false));
//   const [quoteIndex] = useState(new Date().getDate() - 1); // Get today's motivational quote
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [animation] = useState(new Animated.Value(0));

//   useEffect(() => {
//     // Fetch steps using your API
//     const fetchSteps = async () => {
//       const fetchedSteps = await getCurrentSteps();
//       setSteps(fetchedSteps);
//     };

//     fetchSteps();
//   }, []);

//   const toggleWorkout = (index) => {
//     const updatedStreak = [...workoutStreak];
//     updatedStreak[index] = !updatedStreak[index];
//     setWorkoutStreak(updatedStreak);
//   };

//   const handleSaveData = () => {
//     // Logic to save data to your database can be added here
//     // Show the popup
//     setPopupVisible(true);
//     // Animate the popup
//     Animated.spring(animation, {
//       toValue: 1,
//       friction: 2,
//       tension: 100,
//       useNativeDriver: true,
//     }).start(() => {
//       setTimeout(() => {
//         Animated.spring(animation, {
//           toValue: 0,
//           friction: 2,
//           tension: 100,
//           useNativeDriver: true,
//         }).start(() => setPopupVisible(false));
//       }, 1000);
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.date}>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Text>
//       <Text style={styles.day}>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</Text>
//       <Text style={styles.quote}>{motivationalQuotes[quoteIndex]}</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Glucose"
//         value={glucose}
//         onChangeText={setGlucose}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Blood Pressure"
//         value={bloodPressure}
//         onChangeText={setBloodPressure}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Insulin Intake"
//         value={insulin}
//         onChangeText={setInsulin}
//         keyboardType="numeric"
//       />

//       <Text style={styles.steps}>Steps: {steps}</Text>

//       <View style={styles.streakContainer}>
//         {workoutStreak.map((done, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[styles.streakBox, done ? styles.streakDone : styles.streakEmpty]}
//             onPress={() => toggleWorkout(index)}
//           />
//         ))}
//       </View>

//       {popupVisible && (
//         <Animated.View
//           style={[
//             styles.popup,
//             {
//               opacity: animation,
//               transform: [{ scale: animation }],
//             },
//           ]}
//         >
//           <Text style={styles.popupText}>Well Done!</Text>
//         </Animated.View>
//       )}

//       <TouchableOpacity style={styles.addButton} onPress={handleSaveData}>
//         <Text style={styles.addButtonText}>Add Data</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#E7F6F2', // Pastel background color
//   },
//   date: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FF6F61', // Pastel color
//   },
//   day: {
//     fontSize: 18,
//     marginVertical: 5,
//     color: '#FF6F61', // Pastel color
//   },
//   quote: {
//     fontSize: 16,
//     fontStyle: 'italic',
//     marginVertical: 20,
//     color: '#4B7BE5', // Pastel color
//   },
//   input: {
//     height: 40,
//     borderColor: '#FFB3BA', // Pastel color
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//   },
//   steps: {
//     fontSize: 18,
//     marginTop: 10,
//     color: '#4B7BE5', // Pastel color
//   },
//   streakContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginTop: 20,
//   },
//   streakBox: {
//     width: 30,
//     height: 30,
//     borderWidth: 1,
//     borderColor: '#FFB3BA', // Pastel color
//     margin: 2,
//   },
//   streakDone: {
//     backgroundColor: '#FFB3BA', // Pastel color
//   },
//   streakEmpty: {
//     backgroundColor: '#FFFFFF',
//   },
//   popup: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{ translateX: -50 }, { translateY: -50 }],
//     backgroundColor: '#FF6F61', // Pastel color
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   popupText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   addButton: {
//     backgroundColor: '#FFB3BA', // Pastel color
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default HomeScreen;


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
// import { getCurrentSteps } from './api'; // Import your API function

// const motivationalQuotes = [
//   "Believe in yourself and all that you are.",
//   "Your limitation—it's only your imagination.",
//   "Push yourself, because no one else is going to do it for you.",
//   "Great things never come from comfort zones.",
//   "Dream it. Wish it. Do it.",
//   "Success doesn’t just find you. You have to go out and get it.",
//   "The harder you work for something, the greater you’ll feel when you achieve it.",
//   "Dream bigger. Do bigger.",
//   "Don’t stop when you’re tired. Stop when you’re done.",
//   "Wake up with determination. Go to bed with satisfaction.",
//   "Do something today that your future self will thank you for.",
//   "Little things make big days.",
//   "It’s going to be hard, but hard does not mean impossible.",
//   "Don’t wait for opportunity. Create it.",
//   "Sometimes you have to create your own sunshine.",
//   "Hustle for that muscle.",
//   "The key to success is to focus on goals, not obstacles.",
//   "Dream it. Believe it. Build it.",
//   "Motivation is what gets you started. Habit is what keeps you going.",
//   "You don’t have to be great to start, but you have to start to be great.",
//   "If you want it, work for it.",
//   "Success is not for the lazy.",
//   "Believe you can and you’re halfway there.",
//   "Act as if what you do makes a difference. It does.",
//   "Success usually comes to those who are too busy to be looking for it.",
//   "Opportunities don’t happen. You create them.",
//   "Your life does not get better by chance, it gets better by change.",
//   "The only way to do great work is to love what you do.",
//   "If you can dream it, you can do it.",
//   "The future depends on what you do today.",
//   "Success is not how high you have climbed, but how you make a positive difference to the world.",
//   "You are never too old to set another goal or to dream a new dream.",
// ];

// const HomeScreen = () => {
//   const [glucose, setGlucose] = useState('');
//   const [bloodPressure, setBloodPressure] = useState('');
//   const [insulin, setInsulin] = useState('');
//   const [weight, setWeight] = useState(''); // New weight state
//   const [steps, setSteps] = useState(0);
//   const [workoutStreak, setWorkoutStreak] = useState(Array(31).fill(false));
//   const [quoteIndex] = useState(new Date().getDate() - 1); // Get today's motivational quote
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [animation] = useState(new Animated.Value(0));

//   useEffect(() => {
//     // Fetch steps using your API
//     const fetchSteps = async () => {
//       const fetchedSteps = await getCurrentSteps();
//       setSteps(fetchedSteps);
//     };

//     fetchSteps();
//   }, []);

//   const toggleWorkout = (index) => {
//     const updatedStreak = [...workoutStreak];
//     updatedStreak[index] = !updatedStreak[index];
//     setWorkoutStreak(updatedStreak);
//   };

//   const handleSaveData = () => {
//     // Logic to save data to your database can be added here
//     // Show the popup
//     setPopupVisible(true);
//     // Animate the popup
//     Animated.spring(animation, {
//       toValue: 1,
//       friction: 2,
//       tension: 100,
//       useNativeDriver: true,
//     }).start(() => {
//       setTimeout(() => {
//         Animated.spring(animation, {
//           toValue: 0,
//           friction: 2,
//           tension: 100,
//           useNativeDriver: true,
//         }).start(() => setPopupVisible(false));
//       }, 1000);
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.date}>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Text>
//       <Text style={styles.day}>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</Text>
//       <Text style={styles.quote}>{motivationalQuotes[quoteIndex]}</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Glucose"
//         value={glucose}
//         onChangeText={setGlucose}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Blood Pressure"
//         value={bloodPressure}
//         onChangeText={setBloodPressure}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Insulin Intake"
//         value={insulin}
//         onChangeText={setInsulin}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Weight (kg)" // New weight input
//         value={weight}
//         onChangeText={setWeight}
//         keyboardType="numeric"
//       />

//       <Text style={styles.steps}>Steps: {steps}</Text>

//       <View style={styles.streakContainer}>
//         {workoutStreak.map((done, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[styles.streakBox, done ? styles.streakDone : styles.streakEmpty]}
//             onPress={() => toggleWorkout(index)}
//           />
//         ))}
//       </View>

//       {popupVisible && (
//         <Animated.View
//           style={[
//             styles.popup,
//             {
//               opacity: animation,
//               transform: [{ scale: animation }],
//             },
//           ]}
//         >
//           <Text style={styles.popupText}>Well Done!</Text>
//         </Animated.View>
//       )}

//       <TouchableOpacity style={styles.addButton} onPress={handleSaveData}>
//         <Text style={styles.addButtonText}>Add Data</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#E7F6F2', // Pastel background color
//     justifyContent: 'space-evenly', // Spread layout evenly
//   },
//   date: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FF6F61', // Pastel color
//   },
//   day: {
//     fontSize: 18,
//     marginVertical: 5,
//     color: '#FF6F61', // Pastel color
//   },
//   quote: {
//     fontSize: 16,
//     fontStyle: 'italic',
//     marginVertical: 20,
//     color: '#4B7BE5', // Pastel color
//   },
//   input: {
//     height: 40,
//     borderColor: '#FFB3BA', // Pastel color
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//   },
//   steps: {
//     fontSize: 18,
//     marginTop: 10,
//     color: '#4B7BE5', // Pastel color
//   },
//   streakContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginTop: 20,
//     justifyContent: 'center', // Center workout streak boxes
//   },
//   streakBox: {
//     width: 30,
//     height: 30,
//     borderWidth: 1,
//     borderColor: '#FFB3BA', // Pastel color
//     margin: 2,
//   },
//   streakDone: {
//     backgroundColor: '#FFB3BA', // Pastel color
//   },
//   streakEmpty: {
//     backgroundColor: '#FFFFFF',
//   },
//   popup: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{ translateX: -50 }, { translateY: -50 }],
//     backgroundColor: '#FF6F61', // Pastel color
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   popupText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   addButton: {
//     backgroundColor: '#FFB3BA', // Pastel color
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default HomeScreen;




























// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
// import { getCurrentSteps } from './api'; // Import your API function

// const motivationalQuotes = [
//   "Believe in yourself and all that you are.",
//   "Your limitation—it's only your imagination.",
//   "Push yourself, because no one else is going to do it for you.",
//   "Great things never come from comfort zones.",
//   "Dream it. Wish it. Do it.",
//   "Success doesn’t just find you. You have to go out and get it.",
//   "The harder you work for something, the greater you’ll feel when you achieve it.",
//   "Dream bigger. Do bigger.",
//   "Don’t stop when you’re tired. Stop when you’re done.",
//   "Wake up with determination. Go to bed with satisfaction.",
//   "Do something today that your future self will thank you for.",
//   "Little things make big days.",
//   "It’s going to be hard, but hard does not mean impossible.",
//   "Don’t wait for opportunity. Create it.",
//   "Sometimes you have to create your own sunshine.",
//   "Hustle for that muscle.",
//   "The key to success is to focus on goals, not obstacles.",
//   "Dream it. Believe it. Build it.",
//   "Motivation is what gets you started. Habit is what keeps you going.",
//   "You don’t have to be great to start, but you have to start to be great.",
//   "If you want it, work for it.",
//   "Success is not for the lazy.",
//   "Believe you can and you’re halfway there.",
//   "Act as if what you do makes a difference. It does.",
//   "Success usually comes to those who are too busy to be looking for it.",
//   "Opportunities don’t happen. You create them.",
//   "Your life does not get better by chance, it gets better by change.",
//   "The only way to do great work is to love what you do.",
//   "If you can dream it, you can do it.",
//   "The future depends on what you do today.",
//   "Success is not how high you have climbed, but how you make a positive difference to the world.",
//   "You are never too old to set another goal or to dream a new dream.",
// ];

// const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const HomeScreen = () => {
//   const [glucose, setGlucose] = useState('');
//   const [bloodPressure, setBloodPressure] = useState('');
//   const [insulin, setInsulin] = useState('');
//   const [weight, setWeight] = useState('');
//   const [steps, setSteps] = useState(0);
//   const [workoutStreak, setWorkoutStreak] = useState(Array(28).fill(false)); // 4 weeks * 7 days
//   const [quoteIndex] = useState(new Date().getDate() - 1); // Get today's motivational quote
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [animation] = useState(new Animated.Value(0));

//   useEffect(() => {
//     // Fetch steps using your API
//     const fetchSteps = async () => {
//       const fetchedSteps = await getCurrentSteps();
//       setSteps(fetchedSteps);
//     };

//     fetchSteps();
//   }, []);

//   const toggleWorkout = (index) => {
//     const updatedStreak = [...workoutStreak];
//     updatedStreak[index] = !updatedStreak[index];
//     setWorkoutStreak(updatedStreak);
//   };

//   const handleSaveData = () => {
//     // Logic to save data to your database can be added here
//     setPopupVisible(true);
//     Animated.spring(animation, {
//       toValue: 1,
//       friction: 2,
//       tension: 100,
//       useNativeDriver: true,
//     }).start(() => {
//       setTimeout(() => {
//         Animated.spring(animation, {
//           toValue: 0,
//           friction: 2,
//           tension: 100,
//           useNativeDriver: true,
//         }).start(() => setPopupVisible(false));
//       }, 1000);
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.date}>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Text>
//       <Text style={styles.day}>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</Text>
//       <Text style={styles.quote}>{motivationalQuotes[quoteIndex]}</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Glucose"
//         value={glucose}
//         onChangeText={setGlucose}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Blood Pressure"
//         value={bloodPressure}
//         onChangeText={setBloodPressure}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Insulin Intake"
//         value={insulin}
//         onChangeText={setInsulin}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Weight (kg)"
//         value={weight}
//         onChangeText={setWeight}
//         keyboardType="numeric"
//       />

//       <Text style={styles.steps}>Steps: {steps}</Text>

//       <View style={styles.streakContainer}>
//         <View style={styles.weekDays}>
//           {daysOfWeek.map((day, index) => (
//             <Text key={index} style={styles.dayLabel}>{day}</Text>
//           ))}
//         </View>
//         {[0, 1, 2, 3].map((weekIndex) => (
//           <View key={weekIndex} style={styles.streakRow}>
//             {workoutStreak.slice(weekIndex * 7, weekIndex * 7 + 7).map((done, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[styles.streakBox, done ? styles.streakDone : styles.streakEmpty]}
//                 onPress={() => toggleWorkout(weekIndex * 7 + index)}
//               />
//             ))}
//           </View>
//         ))}
//       </View>

//       {popupVisible && (
//         <Animated.View
//           style={[
//             styles.popup,
//             {
//               opacity: animation,
//               transform: [{ scale: animation }],
//             },
//           ]}
//         >
//           <Text style={styles.popupText}>Well Done!</Text>
//         </Animated.View>
//       )}

//       <TouchableOpacity style={styles.addButton} onPress={handleSaveData}>
//         <Text style={styles.addButtonText}>Add Data</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#E7F6F2', // Pastel background color
//     justifyContent: 'space-evenly', // Spread layout evenly
//   },
//   date: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FF6F61', // Pastel color
//   },
//   day: {
//     fontSize: 18,
//     marginVertical: 5,
//     color: '#FF6F61', // Pastel color
//   },
//   quote: {
//     fontSize: 16,
//     fontStyle: 'italic',
//     marginVertical: 20,
//     color: '#4B7BE5', // Pastel color
//   },
//   input: {
//     height: 40,
//     borderColor: '#FFB3BA', // Pastel color
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//   },
//   steps: {
//     fontSize: 18,
//     marginTop: 10,
//     color: '#4B7BE5', // Pastel color
//   },
//   streakContainer: {
//     marginTop: 20,
//   },
//   weekDays: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 5,
//   },
//   streakRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   streakBox: {
//     width: 30,
//     height: 30,
//     borderWidth: 1,
//     borderColor: '#FFB3BA', // Pastel color
//     margin: 2,
//   },
//   streakDone: {
//     backgroundColor: '#FFB3BA', // Pastel color
//   },
//   streakEmpty: {
//     backgroundColor: '#FFFFFF',
//   },
//   dayLabel: {
//     width: 30,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: '#FF6F61', // Pastel color
//   },
//   popup: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{ translateX: -50 }, { translateY: -50 }],
//     backgroundColor: '#FF6F61', // Pastel color
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   popupText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   addButton: {
//     backgroundColor: '#4B7BE5', // Pastel color
//     padding: 10,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   addButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default HomeScreen;


































import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { getCurrentSteps } from './api'; // Import your API function

const motivationalQuotes = [
  "Believe in yourself and all that you are.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes you have to create your own sunshine.",
  "Hustle for that muscle.",
  "The key to success is to focus on goals, not obstacles.",
  "Dream it. Believe it. Build it.",
  "Motivation is what gets you started. Habit is what keeps you going.",
  "You don’t have to be great to start, but you have to start to be great.",
  "If you want it, work for it.",
  "Success is not for the lazy.",
  "Believe you can and you’re halfway there.",
  "Act as if what you do makes a difference. It does.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Opportunities don’t happen. You create them.",
  "Your life does not get better by chance, it gets better by change.",
  "The only way to do great work is to love what you do.",
  "If you can dream it, you can do it.",
  "The future depends on what you do today.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "You are never too old to set another goal or to dream a new dream.",
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const HomeScreen = () => {
  const [glucose, setGlucose] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [insulin, setInsulin] = useState('');
  const [weight, setWeight] = useState('');
  const [steps, setSteps] = useState(0);
  const [workoutStreak, setWorkoutStreak] = useState(Array(28).fill(false)); // 4 weeks * 7 days
  const [quoteIndex] = useState(new Date().getDate() - 1); // Get today's motivational quote
  const [popupVisible, setPopupVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    // Fetch steps using your API
    const fetchSteps = async () => {
      const fetchedSteps = await getCurrentSteps();
      setSteps(fetchedSteps);
    };

    fetchSteps();
  }, []);

  const toggleWorkout = (index) => {
    const updatedStreak = [...workoutStreak];
    updatedStreak[index] = !updatedStreak[index];
    setWorkoutStreak(updatedStreak);
  };

  const handleSaveData = () => {
    // Logic to save data to your database can be added here
    setPopupVisible(true);
    Animated.spring(animation, {
      toValue: 1,
      friction: 2,
      tension: 100,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.spring(animation, {
          toValue: 0,
          friction: 2,
          tension: 100,
          useNativeDriver: true,
        }).start(() => setPopupVisible(false));
      }, 1000);
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.date}>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Text>
        <Text style={styles.day}>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</Text>
        <Text style={styles.quote}>{motivationalQuotes[quoteIndex]}</Text>

        <TextInput
          style={styles.input}
          placeholder="Glucose"
          value={glucose}
          onChangeText={setGlucose}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Blood Pressure"
          value={bloodPressure}
          onChangeText={setBloodPressure}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Insulin Intake"
          value={insulin}
          onChangeText={setInsulin}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />

        <Text style={styles.steps}>Steps: {steps}</Text>

        <View style={styles.streakContainer}>
          <View style={styles.weekDays}>
            {daysOfWeek.map((day, index) => (
              <Text key={index} style={styles.dayLabel}>{day}</Text>
            ))}
          </View>
          {[0, 1, 2, 3].map((weekIndex) => (
            <View key={weekIndex} style={styles.streakRow}>
              {workoutStreak.slice(weekIndex * 7, weekIndex * 7 + 7).map((done, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.streakBox, done ? styles.streakDone : styles.streakEmpty]}
                  onPress={() => toggleWorkout(weekIndex * 7 + index)}
                />
              ))}
            </View>
          ))}
        </View>

        {popupVisible && (
          <Animated.View
            style={[
              styles.popup,
              {
                opacity: animation,
                transform: [{ scale: animation }],
              },
            ]}
          >
            <Text style={styles.popupText}>Well Done!</Text>
          </Animated.View>
        )}

        <TouchableOpacity style={styles.addButton} onPress={handleSaveData}>
          <Text style={styles.addButtonText}>Add Data</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F6F2', // Pastel background color
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'space-evenly', // Spread layout evenly
  },
  date: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6F61', // Pastel color
  },
  day: {
    fontSize: 18,
    marginVertical: 5,
    color: '#FF6F61', // Pastel color
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    marginVertical: 20,
    color: '#4B7BE5', // Pastel color
  },
  input: {
    height: 40,
    borderColor: '#FFB3BA', // Pastel color
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  steps: {
    fontSize: 18,
    marginTop: 10,
    color: '#4B7BE5', // Pastel color
  },
  streakContainer: {
    marginTop: 20,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  streakRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  streakBox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#FFB3BA', // Pastel color
    margin: 2,
  },
  streakDone: {
    backgroundColor: '#FFB3BA', // Pastel color
  },
  streakEmpty: {
    backgroundColor: '#FFFFFF',
  },
  dayLabel: {
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF6F61', // Pastel color
  },
  popup: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -75 }, { translateY: -50 }],
    backgroundColor: '#4B7BE5', // Pastel color
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  popupText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#FF6F61', // Pastel color
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
