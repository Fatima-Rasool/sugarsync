// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const BMIScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>BMI Calculator Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#d2b4de',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

// export default BMIScreen;






























// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';

// export default function BMIScreen() {
//   const [weight, setWeight] = useState('');
//   const [weightUnit, setWeightUnit] = useState('kg'); // kg or pounds
//   const [height, setHeight] = useState('');
//   const [heightUnit, setHeightUnit] = useState('cm'); // cm or meters
//   const [bmi, setBMI] = useState(null);
//   const [category, setCategory] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);

//   const calculateBMI = () => {
//     if (!weight || !height) {
//       alert('Please enter both weight and height');
//       return;
//     }

//     // Convert weight to kg if necessary
//     const weightInKg = weightUnit === 'pounds' ? parseFloat(weight) * 0.453592 : parseFloat(weight);

//     // Convert height to meters if necessary
//     const heightInMeters =
//       heightUnit === 'cm' ? parseFloat(height) / 100 : parseFloat(height);

//     const bmiValue = weightInKg / (heightInMeters ** 2);
//     setBMI(bmiValue.toFixed(2));

//     // Determine BMI category and WHO comments
//     if (bmiValue < 18.5) {
//       setCategory('Underweight');
//     } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
//       setCategory('Normal weight');
//     } else if (bmiValue >= 25 && bmiValue < 29.9) {
//       setCategory('Overweight');
//     } else {
//       setCategory('Obesity');
//     }

//     setModalVisible(true); // Open result card
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>BMI Calculator</Text>

//       {/* Weight Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter weight"
//         keyboardType="numeric"
//         value={weight}
//         onChangeText={setWeight}
//       />
//       <View style={styles.unitSelector}>
//         <TouchableOpacity
//           style={[
//             styles.unitButton,
//             weightUnit === 'kg' && styles.unitButtonActive,
//           ]}
//           onPress={() => setWeightUnit('kg')}
//         >
//           <Text style={styles.unitButtonText}>kg</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.unitButton,
//             weightUnit === 'pounds' && styles.unitButtonActive,
//           ]}
//           onPress={() => setWeightUnit('pounds')}
//         >
//           <Text style={styles.unitButtonText}>lbs</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Height Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter height"
//         keyboardType="numeric"
//         value={height}
//         onChangeText={setHeight}
//       />
//       <View style={styles.unitSelector}>
//         <TouchableOpacity
//           style={[
//             styles.unitButton,
//             heightUnit === 'cm' && styles.unitButtonActive,
//           ]}
//           onPress={() => setHeightUnit('cm')}
//         >
//           <Text style={styles.unitButtonText}>cm</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.unitButton,
//             heightUnit === 'meters' && styles.unitButtonActive,
//           ]}
//           onPress={() => setHeightUnit('meters')}
//         >
//           <Text style={styles.unitButtonText}>m</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Calculate Button */}
//       <TouchableOpacity style={styles.button} onPress={calculateBMI}>
//         <Text style={styles.buttonText}>Calculate BMI</Text>
//       </TouchableOpacity>

//       {/* Modal for BMI Result */}
//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>BMI Results</Text>
//             <Text style={styles.modalText}>Your BMI: {bmi}</Text>
//             <Text style={styles.modalText}>Category: {category}</Text>
//             <Text style={styles.modalSubtitle}>WHO BMI Ranges:</Text>
//             <Text style={styles.modalText}>Underweight: Less than 18.5</Text>
//             <Text style={styles.modalText}>Normal weight: 18.5 - 24.9</Text>
//             <Text style={styles.modalText}>Overweight: 25 - 29.9</Text>
//             <Text style={styles.modalText}>Obesity: 30 or higher</Text>
//             <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#E7F6F2',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4B7BE5',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     borderWidth: 1,
//     borderColor: '#FFB3BA',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 16,
//     backgroundColor: '#FFFFFF',
//   },
//   unitSelector: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 16,
//   },
//   unitButton: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#FFB3BA',
//     borderRadius: 8,
//     marginHorizontal: 5,
//   },
//   unitButtonActive: {
//     backgroundColor: '#FFB3BA',
//   },
//   unitButtonText: {
//     color: '#4B7BE5',
//     fontWeight: 'bold',
//   },
//   button: {
//     backgroundColor: '#FF6F61',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     width: '80%',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     width: '90%',
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#4B7BE5',
//   },
//   modalSubtitle: {
//     fontSize: 18,
//     marginTop: 10,
//     fontWeight: 'bold',
//     color: '#FF6F61',
//   },
//   modalText: {
//     fontSize: 16,
//     marginVertical: 5,
//     color: '#4B7BE5',
//   },
//   closeButton: {
//     marginTop: 20,
//     backgroundColor: '#FF6F61',
//     padding: 10,
//     borderRadius: 8,
//   },
//   closeButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });





import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Animated,
} from 'react-native';

export default function BMIScreen() {
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg'); // kg or pounds
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('meters'); // meters or inches
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [scale] = useState(new Animated.Value(0)); // For animation

  const calculateBMI = () => {
    if (!weight || !height) {
      alert('Please enter both weight and height');
      return;
    }

    // Convert weight to kg if necessary
    const weightInKg = weightUnit === 'pounds' ? parseFloat(weight) * 0.453592 : parseFloat(weight);

    // Convert height to meters if necessary
    const heightInMeters =
      heightUnit === 'inches'
        ? parseFloat(height) * 0.0254
        : parseFloat(height);

    const bmiValue = weightInKg / (heightInMeters ** 2);
    setBMI(bmiValue.toFixed(2));

    // Determine BMI category and WHO comments
    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }

    // Open modal with animation
    setModalVisible(true);
    Animated.timing(scale, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(scale, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>

      {/* Weight Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter weight"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <View style={styles.unitSelector}>
        <TouchableOpacity
          style={[
            styles.unitButton,
            weightUnit === 'kg' && styles.unitButtonActive,
          ]}
          onPress={() => setWeightUnit('kg')}
        >
          <Text style={styles.unitButtonText}>kg</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.unitButton,
            weightUnit === 'pounds' && styles.unitButtonActive,
          ]}
          onPress={() => setWeightUnit('pounds')}
        >
          <Text style={styles.unitButtonText}>lbs</Text>
        </TouchableOpacity>
      </View>

      {/* Height Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter height"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <View style={styles.unitSelector}>
        <TouchableOpacity
          style={[
            styles.unitButton,
            heightUnit === 'meters' && styles.unitButtonActive,
          ]}
          onPress={() => setHeightUnit('meters')}
        >
          <Text style={styles.unitButtonText}>m</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.unitButton,
            heightUnit === 'inches' && styles.unitButtonActive,
          ]}
          onPress={() => setHeightUnit('inches')}
        >
          <Text style={styles.unitButtonText}>inches</Text>
        </TouchableOpacity>
      </View>

      {/* Calculate Button */}
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>

      {/* Modal for BMI Result */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <Animated.View
            style={[
              styles.modalContent,
              { transform: [{ scale }] }, // Apply scaling effect
            ]}
          >
            <Text style={styles.modalTitle}>BMI Results</Text>
            <Text style={styles.modalText}>Your BMI: {bmi}</Text>
            <Text style={styles.modalText}>
              Category: <Text style={[styles.categoryText, styles[category]]}>{category}</Text>
            </Text>
            <Text style={styles.modalSubtitle}>WHO BMI Ranges:</Text>
            <Text style={styles.modalText}>Underweight: Less than 18.5</Text>
            <Text style={styles.modalText}>Normal weight: 18.5 - 24.9</Text>
            <Text style={styles.modalText}>Overweight: 25 - 29.9</Text>
            <Text style={styles.modalText}>Obesity: 30 or higher</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeModal}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7F6F2',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B7BE5',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#FFB3BA',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  unitSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  unitButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFB3BA',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  unitButtonActive: {
    backgroundColor: '#FFB3BA',
  },
  unitButtonText: {
    color: '#4B7BE5',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FF6F61',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4B7BE5',
  },
  modalSubtitle: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#FF6F61',
  },
  modalText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#4B7BE5',
  },
  categoryText: {
    fontWeight: 'bold',
  },
  Underweight: {
    color: '#FFB3BA',
  },
  'Normal weight': {
    color: '#4B7BE5',
  },
  Overweight: {
    color: '#FF6F61',
  },
  Obesity: {
    color: '#FF0000',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#FF6F61',
    padding: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
