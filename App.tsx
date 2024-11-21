import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, Modal, ScrollView, TextInput } from 'react-native';

const HomePage = () => {
  // States for modals and selected courses
  const [modalVisible, setModalVisible] = useState(false);
  const [sixWeekCoursesModalVisible, setSixWeekCoursesModalVisible] = useState(false);
  const [feesModalVisible, setFeesModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState({
    'First Aid': false,
    'Sewing': false,
    'Life skills': false,
    'Landscaping': false,
    'Cooking': false,
    'Child Minding': false,
    'Garden Maintanance': false,
  });

  // State for user details
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [cellphone, setCellphone] = useState('');

  // Handle course selection
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleCourseSelection = (course) => {
    setSelectedCourses((prevSelectedCourses) => ({
      ...prevSelectedCourses,
      [course]: !prevSelectedCourses[course],
    }));
  };

  // General Course Descriptions
const renderCourseDescription = () => {
  if (selectedCourse === 'First Aid') {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.courseDescription}>
          Fees: R150
          {'\n'}
          Purpose:To provide First Aid Awareness and basic life support
          {'\n'}
          • Wounds and bleeding
          {'\n'}
          • Burns and fractures
          {'\n'}
          • Emergency scene management
          {'\n'}
          • Cardio-Pulmonary Resuscitation (CPR)
          {'\n'}
          •  Respiratory distress e.g., Choking, blocked airwayTo provide First Aid Awareness and basic life support
          {'\n'}
          • Wounds and bleeding
          {'\n'}
          • Respiratory distress e.g., Choking, blocked airway


        </Text>
      </View>
    );
  } else if (selectedCourse === 'Sewing') {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.courseDescription}>
          Fees: R1500
          {'\n'}
          Purpose: To provide alterations and new garment tailoring services
          {'\n'}
          • Types of stitches
          {'\n'}
          • Threading a sewing machine
          {'\n'}
          • Sewing buttons, zips, hems, and seams
          {'\n'}
          • Alterations
          {'\n'}
          • Designing and sewing new garments
        </Text>
      </View>
    );
  } else if (selectedCourse === 'Life skills') {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.courseDescription}>
          Fees: R1500
          {'\n'}
          Purpose: To provide skills to navigate basic life necessities
          {'\n'}
          • Opening a bank account
          {'\n'}
          • Basic labour law (know your rights)
          {'\n'}
          • Basic reading and writing literacy
          {'\n'}
          • Basic numeric literacy
        </Text>
      </View>
    );
  } else if (selectedCourse === 'Landscaping') {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.courseDescription}>
          Fees: R1500
          {'\n'}
          Purpose: To provide landscaping services for new and established gardens
          {'\n'}
          • Indigenous and exotic plants and trees
          {'\n'}
          • Fixed structures (fountains, statues, benches, tables, built-in braai)
          {'\n'}
          • Balancing of plants and trees in a garden
          {'\n'}
          • Aesthetics of plant shapes and colours
          {'\n'}
          • Garden layout
        </Text>
      </View>
    );
  }
  return null;
};

// Six Week Course Descriptions
const renderSixWeekCourseDescription = () => {
  if (selectedCourse === 'Cooking') {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.courseDescription}>
          Fees: R750
          {'\n'}
          Purpose: To prepare and cook nutritious family meals Content:
          {'\n'}
          • Nutritional requirements for a healthy body 
          {'\n'}
          • Types of protein, carbohydrates and vegetables 
          {'\n'}
          • Planning meals 
          {'\n'}
          • Preparation and cooking of meals
      
        </Text>
      </View>
    );
  } else if (selectedCourse === 'Garden Maintenance') {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.courseDescription}>
          Fees: R750
          {'\n'}
          Purpose: To provide basic knowledge of watering, pruning and planting in a domestic garden. Content: 
          {'\n'}
          • Water restrictions and the watering requirements of indigenous and exotic plants 
          {'\n'}
          • Pruning and propagation of plants 
          {'\n'}
          • Planting techniques for different plant types
      
        </Text>
      </View>
    );
  } else if (selectedCourse === 'Child Minding') {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.courseDescription}>
          Fees: R750
          {'\n'}
          Purpose: To provide basic child and baby care Content: 
          {'\n'}
          • birth to six-month old baby needs 
          {'\n'}
          • seven-month to one year old needs 
          {'\n'}
          • Bathing and hygiene
          {'\n'}
          • Toddler needs • Educational toys
          
        </Text>
      </View>
    );
  }
  return null;
};

  

  const renderSelectedCourseFees = () => {
    return Object.keys(selectedCourses).map((course) => {
      if (selectedCourses[course]) {
        let fee = '';
        if (course === 'First Aid') fee = 'R150';
        if (course === 'Sewing') fee = 'R1500';
        if (course === 'Life skills') fee = 'R1500';
        if (course === 'Landscaping') fee = 'R1500';
        if (course === 'Cooking') fee = 'R750';
        if (course === 'Child Minding') fee = 'R750';
        if (course === 'Garden Maintanance') fee = 'R750';
        
        return (
          <Text key={course} style={styles.feesText}>
            {course}: {fee}
          </Text>
        );
      }
      return null;
    });
  };

  // Calculate total fees based on selected courses
  const calculateTotal = () => {
    let total = 0;
    if (selectedCourses['First Aid']) total += 150;
    if (selectedCourses['Sewing']) total += 1500;
    if (selectedCourses['Life skills']) total += 1500;
    if (selectedCourses['Landscaping']) total += 1500;
    if (selectedCourses['Cooking']) total += 750;
    if (selectedCourses['Child Minding']) total += 750;
    if (selectedCourses['Garden Maintanance']) total += 750;
    return total;
  };

  return (
    <ImageBackground source={require('./assets/Background.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Empowering the Nation</Text>
        </View>
        <Image source={require('./assets/Logo.png')} style={styles.logo} />
        <View style={styles.textBackground}>
          <Text style={styles.descriptionText}>
          Empowering the Nation was established in 2018 and offers courses in Johannesburg.
Hundreds of domestic workers and gardeners have been trained on both the six-month long
Learnerships and six-week Short Skills Training Programmes to empower themselves and 
can provide more marketable skills.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        

        {/* Modal Section */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <ImageBackground source={require('./assets/Background2.png')} style={styles.modalOverlay}>
            <Text style={styles.modalHeading}>Six Month Courses</Text>
            <ScrollView contentContainerStyle={styles.imagesContainer}>
              <View style={styles.imageRow}>
                <View style={styles.imageWithText}>
                  <TouchableOpacity onPress={() => handleCourseClick('First Aid')}>
                    <Image source={require('./assets/Course.png')} style={styles.modalImage} />
                    <Text style={styles.imageText}>First Aid</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.imageWithText}>
                  <TouchableOpacity onPress={() => handleCourseClick('Sewing')}>
                    <Image source={require('./assets/sewing.png')} style={styles.modalImage} />
                    <Text style={styles.imageText}>Sewing</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.imageRow}>
                <View style={styles.imageWithText}>
                  <TouchableOpacity onPress={() => handleCourseClick('Life skills')}>
                    <Image source={require('./assets/Life skills.png')} style={styles.modalImage} />
                    <Text style={styles.imageText}>Life skills</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.imageWithText}>
                  <TouchableOpacity onPress={() => handleCourseClick('Landscaping')}>
                    <Image source={require('./assets/landscape.png')} style={styles.modalImage} />
                    <Text style={styles.imageText}>Landscaping</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Display Description for the Selected Course */}
              {renderCourseDescription()}
            </ScrollView>

            
          

            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </ImageBackground>
         {/* Buttons Container */}
<View style={styles.buttonsContainer}>
  <TouchableOpacity
    style={styles.mainButton}
    onPress={() => {
      setModalVisible(false);
      setFeesModalVisible(true);
    }}
  >
    <Text style={styles.buttonText}>Proceed to Fees</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.mainButton}
    onPress={() => setSixWeekCoursesModalVisible(true)}
  >
    <Text style={styles.buttonText}>Six Week Courses</Text>
  </TouchableOpacity>
</View>


        </Modal>
        
        {/* Modal for Six Week Courses */}
        <Modal
  animationType="slide"
  transparent={false}
  visible={sixWeekCoursesModalVisible}
  onRequestClose={() => setSixWeekCoursesModalVisible(false)}
>
  <ImageBackground source={require('./assets/Background2.png')} style={styles.modalOverlay}>
    <Text style={styles.modalHeading}>Six Week Courses</Text>
    <ScrollView contentContainerStyle={styles.imagesContainer}>
      {/* Course Images and Titles */}
      <View style={styles.imageWithText}>
        <Image source={require('./assets/Cooking.png')} style={styles.modalImage} />
        <TouchableOpacity onPress={() => handleCourseClick('Cooking')}>
          <Text style={styles.imageText}>Cooking</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageWithText}>
        <Image source={require('./assets/Garden.png')} style={styles.modalImage} />
        <TouchableOpacity onPress={() => handleCourseClick('Garden Maintenance')}>
          <Text style={styles.imageText}>Garden Maintenance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageWithText}>
        <Image source={require('./assets/Child Minding.png')} style={styles.modalImage} />
        <TouchableOpacity onPress={() => handleCourseClick('Child Minding')}>
          <Text style={styles.imageText}>Child Minding</Text>
        </TouchableOpacity>
      </View>

      {/* Render the Description below the selected course image */}
      {renderSixWeekCourseDescription()}
    </ScrollView>

    {/* Next Button and Close Button */}
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          setSixWeekCoursesModalVisible(false);
          setFeesModalVisible(true);
        }}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.closeButton} onPress={() => setSixWeekCoursesModalVisible(false)}>
      <Text style={styles.closeButtonText}>Close</Text>
    </TouchableOpacity>
  </ImageBackground>
</Modal>


        {/* Fees Modal */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={feesModalVisible}
          onRequestClose={() => setFeesModalVisible(false)}
        >
          <View style={styles.feesModalContainer}>
            <Text style={styles.feesModalHeading}>Select Your Course(s) and Confirm Payment</Text>

            {/* Name, Surname, Address, and Cellphone Number Inputs */}
            <View style={styles.formContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Name"
                placeholderTextColor="#888"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Surname"
                placeholderTextColor="#888"
                value={surname}
                onChangeText={setSurname}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Address"
                placeholderTextColor="#888"
                value={address}
                onChangeText={setAddress}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Cellphone Number"
                placeholderTextColor="#888"
                keyboardType="phone-pad"
                value={cellphone}
                onChangeText={setCellphone}
              />
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <View style={styles.checkboxContainer}>
                {/* Course Selection with TouchableOpacity */}
                <View style={styles.checkboxItem}>
                  <TouchableOpacity
                    style={[styles.circleButton, selectedCourses['First Aid'] && styles.selectedButton]}
                    onPress={() => handleCourseSelection('First Aid')}
                  >
                    <Image
                      source={
                        selectedCourses['First Aid'] ? require('./assets/Logo.png') : require('./assets/icon.png')
                      }
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.checkboxText}>First Aid (R150)</Text>
                </View>
                
                <View style={styles.checkboxItem}>
                  <TouchableOpacity
                    style={[styles.circleButton, selectedCourses['Sewing'] && styles.selectedButton]}
                    onPress={() => handleCourseSelection('Sewing')}
                  >
                    <Image
                      source={
                        selectedCourses['Sewing'] ? require('./assets/Logo.png') : require('./assets/icon.png')
                      }
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.checkboxText}>Sewing (R1500)</Text>
                </View>
                <View style={styles.checkboxItem}>
                  <TouchableOpacity
                    style={[styles.circleButton, selectedCourses['Life skills'] && styles.selectedButton]}
                    onPress={() => handleCourseSelection('Life skills')}
                  >
                    <Image
                      source={
                        selectedCourses['Life skills'] ? require('./assets/Logo.png') : require('./assets/icon.png')
                      }
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.checkboxText}>Life Skills (R1500)</Text>
                </View>
                <View style={styles.checkboxItem}>
                  <TouchableOpacity
                    style={[styles.circleButton, selectedCourses['Landscaping'] && styles.selectedButton]}
                    onPress={() => handleCourseSelection('Landscaping')}
                  >
                    <Image
                      source={
                        selectedCourses['Landscaping'] ? require('./assets/Logo.png') : require('./assets/icon.png')
                      }
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.checkboxText}>Landscaping (R1500)</Text>
                </View>
                <View style={styles.checkboxItem}>
                  <TouchableOpacity
                    style={[styles.circleButton, selectedCourses['Cooking'] && styles.selectedButton]}
                    onPress={() => handleCourseSelection('Cooking')}
                  >
                    <Image
                      source={
                        selectedCourses['Cooking'] ? require('./assets/Logo.png') : require('./assets/icon.png')
                      }
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.checkboxText}>Cooking (R750)</Text>
                </View>
                
                <View style={styles.checkboxItem}>
                  <TouchableOpacity
                    style={[styles.circleButton, selectedCourses['Child Minding'] && styles.selectedButton]}
                    onPress={() => handleCourseSelection('Child Minding')}
                  >
                    <Image
                      source={
                        selectedCourses['Child Minding'] ? require('./assets/Logo.png') : require('./assets/icon.png')
                      }
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.checkboxText}>Child Minding (R750)</Text>
                </View>
                <View style={styles.checkboxItem}>
                  <TouchableOpacity
                    style={[styles.circleButton, selectedCourses['Garden Maintanance'] && styles.selectedButton]}
                    onPress={() => handleCourseSelection('Garden Maintanance')}
                  >
                    <Image
                      source={
                        selectedCourses['Garden Maintanance'] ? require('./assets/Logo.png') : require('./assets/icon.png')
                      }
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.checkboxText}>Garden Maintanance (R750)</Text>
                </View>
              </View>

              {/* Display Selected Course Fees */}
              {renderSelectedCourseFees()}

              {/* Display Total Fees */}
              <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: R{calculateTotal()}</Text>
              </View>
            </ScrollView>

            <View style={styles.paymentButtonsContainer}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => console.log('Payment confirmed!')}
              >
                <Text style={styles.confirmButtonText}>Confirm Payment</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setFeesModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  textBackground: {
    backgroundColor: '#00000070',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 10,
    width: 200,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    padding: 20,
  },
  modalHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  imagesContainer: {
    flexDirection: 'column',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageWithText: {
    alignItems: 'center',
    flex: 1,
    marginBottom: 10,
  },
  modalImage: {
    width: 150,
    height: 150,
  },
  imageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descriptionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  courseDescription: {
    fontSize: 20,
    textAlign: 'left',
    color: 'white',
  },
  
  nextButton: {
    backgroundColor: '#a9a9a9',
    padding: 15,
    borderRadius: 10,
    width: 150,
    marginTop: 20,
  },
  closeButton: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    width: 150,
    marginTop: 20,
    alignSelf: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  feesModalContainer: {
    flex: 1,
    padding: 20,
  },
  feesModalHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 20,
  },
  inputField: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  scrollViewContainer: {
    flex: 1,
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  circleButton: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#3b82f6',
  },
  icon: {
    width: 18,
    height: 18,
  },
  checkboxText: {
    fontSize: 16,
    color: '#000',
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  paymentButtonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmButton: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 10,
    width: 150,
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    width: 150,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  feesButton: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 10,
    width: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  feesButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap', // Allows wrapping for responsiveness
    gap: 10, // Ensures spacing between buttons
  },
  
  
  mainButton: {
    backgroundColor: '#708090',
    padding: 15,
    borderRadius: 10,
    minWidth: 180, // Ensures consistent button width
    alignItems: 'center',
    marginHorizontal: 5, // Equal spacing on both sides
  },
  
  
  
});

export default HomePage;
