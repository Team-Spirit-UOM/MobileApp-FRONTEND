import React, {useState } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const editProfile = ({navigation}) => {

    const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
	const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  async function updateUser() {
    var axios = require('axios');
    var config = {
        method: 'put',
        url: 'http://10.0.2.2:8000/user/update/62a6022f072e954feb3b4ec7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data: 
        JSON.stringify({
            firstName,
            lastName,
            email ,
            contact,
            password
          })
      
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

	}

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#33ddff' barStyle="light-content"/>
          <TouchableOpacity onPress={() => navigation.goBack()}
          style={{
            // width: '100%',
            // height: 100,
            // marginVertical: 6,
            paddingVertical:20,
            paddingHorizontal:10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 18,
                color: '#000000',
                padding: 12,
                backgroundColor:'#ffffff',
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
       
            {/* <Text style={styles.text_header}>Edit Details</Text> */}
        
        <View 
           
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>First Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={newText => setFirstName(newText)}
                   
                />
               
                <View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </View>
              
            </View>

            <Text style={styles.text_footer}>Last Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={newText => setLastName(newText)}
                   
                />
               
                <View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </View>
              
            </View>

            <Text style={styles.text_footer}>E mail</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={newText => setEmail(newText)}
                   
                />
               
                <View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </View>
              
            </View>

            <Text style={styles.text_footer}>Mobile</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={newText => setContact(newText)}
                   
                />
               
                <View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </View>
              
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                   
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={newText => setPassword(newText)}
                   
                />
               
            </View>

            
            
            <View style={styles.button}>
                

                <TouchableOpacity
                    onPress={ updateUser}
                    style={[styles.signIn, {
                        backgroundColor: '#a12adb',
                        //borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#ffffff'
                    }]}>Update</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
      </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#33ddff'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });

  export default editProfile;