import React from 'react';
import { Text,
         TouchableWithoutFeedback,
         ScrollView,
         View,
         Keyboard,
         TextInput,
         TouchableOpacity,
         Image,
         ActivityIndicator
       } from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome';
import { textStyle, iconStyle, captionStyle, subHeaderStyle, cardStyle } from '../../styles/styles';
import { buttonStyle, buttonTextStyle, inputStyle, formContainerStyle } from '../../styles/forms';
import axios from 'axios';

class ProfileIndex extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <FIcon name="user" color={tintColor} style={iconStyle} />
    ),
    headerTitle: 'QuickFit'
  }

  constructor(props) {
    super(props);
    this.state = {
      workoutHistory: [],
      loading: true
    };
  }

  componentWillMount() {
    if (this.state.workoutHistory.length === 0) {
      axios.get('https://afternoon-bastion-37946.herokuapp.com/api/users/1/movements/')
      .then((res) => {
        console.log(res.data);
        alert("Get success");
        this.setState({
          workoutHistory: res.data,
          loading: false
        });
      })
      .catch(function (error) {
         if (error.response) {
           // The request was made and the server responded with a status code
           // that falls out of the range of 2xx
           console.log(error.response.data);
           console.log(error.response.status);
           console.log(error.response.headers);
         } else if (error.request) {
           // The request was made but no response was received
           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
           // http.ClientRequest in node.js
           console.log(error.request);
         } else {
           // Something happened in setting up the request that triggered an Error
           console.log('Error', error.message);
         }
         console.log(error.config);
       });
    }
  }

  render() {
    console.log(this.state);
    if (this.state.loading) {
      return <ActivityIndicator
              animating={true}
              size={'large'}
            />
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={formContainerStyle}>
            <View className='ProfileDescription' style={Object.assign({}, buttonStyle, {flexDirection: 'row'})}>
              <View style={styles.profileImgContainer}>
                <Image
                  source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Usain_Bolt_portrait.jpg'}}
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderRadius: 60,
                    width: 120,
                    height: 120}}
                    />
              </View>
              <View>
                <View>
                  <Text style={subHeaderStyle}> Usain Bolt </Text>
                  <Text style={subHeaderStyle}> athlete@quickfit.com </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={Object.assign({}, buttonStyle, { marginBottom: 10 })}
              onPress={() => {
                this.props.navigation.navigate('edit');
              }}>
              <Text style={buttonTextStyle}> Edit Profile </Text>
            </TouchableOpacity>
            <View style={cardStyle}>
              <Text style={subHeaderStyle}> Workout on 8/11/2017</Text>
              <Text style={textStyle}> Moderate Tabata </Text>
              <Text style={textStyle}> Pushups </Text>
              <Text style={textStyle}> Burpees </Text>
            </View>
            <View style={cardStyle}>
              <Text style={subHeaderStyle}> Workout on 8/9/2017</Text>
              <Text style={textStyle}> Advanced Counter </Text>
              <Text style={textStyle}> Pullups </Text>
              <Text style={textStyle}> Squats </Text>
            </View>
            <View style={cardStyle}>
              <Text style={subHeaderStyle}> Workout on 8/7/2017</Text>
              <Text style={textStyle}> Novice Interval </Text>
              <Text style={textStyle}> Lunges </Text>
              <Text style={textStyle}> Burpees </Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  profileImgContainer: {
    height: 125,
    width: 125,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#dddddd'
  },

}

export default ProfileIndex;
