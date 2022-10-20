import AppLoading from 'expo-app-loading';
import React from 'react' 
import { StyleSheet, Button,Text, View, StatusBar,Alert,SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';
import { Profiles } from './assets/Themes';
import { Fonts } from './assets/Themes';
import {Image,ImageBackground} from 'react-native'
import { Dimensions } from 'react-native';



    {/* <Button
        onPress={() => Alert.alert('Simple Button pressed')}
        title="Discover"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (


    // Navigation Bar (Top bar)
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}> 


        <Image source={require('./assets/Icons/menu_dark.png')}
          style={styles.image}
          > 
        </Image>
  
        <Text
          style={{
            fontFamily: "SydneyBold",
            fontSize:32,
            color:Themes.dark.text,
          }}>
          Ensom
        </Text>
        <Image  
        
        source={require('./assets/Icons/moon.png')}
        style={styles.image}
        > 
        </Image>
   
      </View>


      <View style={styles.flex2}>
        {/* <View style={styles.ProfilePic}> */}
       
        <ImageBackground  

         
          source={require('./assets/Profiles/mtl.jpg')}
          imageStyle={{ borderRadius: 20}}
          style={styles.profileimage}
          
          
          > 



           <Text style={styles.profileText}>MTL</Text>



           <Text style={styles.profileLocation}>2 miles away</Text>
        
       

          <View style={styles.soundBackground}>
           <Image
              source={require('./assets/Icons/audio_waveform_dark.png')}
              style={styles.soundimage}>
          </Image>
          
          <Text style={styles.audio_text}> My hottest take </Text>
          <Image
          source={require('./assets/Icons/player_dark.png')}
          style={styles.playButton}>
          </Image>
          </View>

        </ImageBackground>




        {/* </View> */}

        
       
        
        {/* <ImageBackground */}

        
          
          
          
        {/* </ImageBackground> */}
       
    
    
        

        
         

     
      
      </View>




     
      
      <View style={styles.flex3}>
        <View style={styles.navbarIcon}>
          <Image  
            
            source={require('./assets/Icons/discover_dark.png')}
            style={styles.textimage}
            > 
          </Image>
          <Text style={styles.image_text}>Discover</Text>
        </View>

        <View style={styles.navbarIcon}>
          
        
          <Image  
          
          source={require('./assets/Icons/heart_dark.png')}
          style={styles.textimage}
          > 
          </Image>
          <Text style={styles.image_text}>Matches</Text>
        </View>


        <View style={styles.navbarIcon}>

        
          <Image  
          
          source={require('./assets/Icons/messages_dark.png')}
          style={styles.textimage}
          > 
        
          </Image>
          <Text style={styles.image_text}>DMs</Text>
        </View>
        
      </View>
     


      
  </SafeAreaView>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.dark.bg,
    alignItems: 'center',
    //justifyContent: 'flex-end',
  },
  flex: {
    // backgroundColor: 'red',
    display: 'flex',
    flex: 1,
    alignItems:'center',
    height:'8%',
    width: '100%',
    padding:'1rem%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  flex2:{
    display: 'flex',
  
    height:'79%',
    width: '90%',
    padding:'1rem%',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  flex3:{
    backgroundColor: 'white',

    alignItems:'center',
    height:'8%',
    width: '100%',
    padding:'1rem%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  flex4:{
   
    alignItems:'center',
    height:'5%',
    width: '100%',
    padding:'1rem%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    height: '35%',
    width: '20%', /* ie8 */
  
    resizeMode: "contain",
    
     
    
  },

  ProfilePic:{
    backgroundColor: Themes.dark.bg,
    height: windowHeight/1.2,
    width: windowWidth/1.6,

  },

 
  profileText: {
    fontFamily: Themes.dark.textimage,
    fontSize: 36,
    position:'absolute',left:'5%',
    color: 'white',
    
    
  },

  profileimage: {
    backgroundColor: Themes.dark.bg,
    height: '80%',
    width: '100%',

    
    shadowColor: Themes.dark.shadows.shadowColor,
    shadowOffset: Themes.dark.shadows.shadowOffset,
    shadowOpacity: Themes.dark.shadows.shadowOpacity,
    shadowRadius: Themes.dark.shadows.shadowRadius,

  },


  profileLocation: {
    position: 'absolute' , bottom:'30%', left:'5%',
    fontFamily: Themes.dark.textSecondary,
    color: 'white',
  },
  navbarIcon: {
    // backgroundColor: 'brown',
    width: '30%',
    height:'100%',
  },
  image_text: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'SydneyBold',
    fontFamily: Themes.dark.textSecondary,
    color: 'black',
  },
  textimage: {
    height: '75%',
    width: '100%',
    resizeMode: "contain",
    borderRadius: 1000
  },
  soundimage: {
    height: '45%',
    width:'65%',
    resizeMode: 'contain',
    position: 'absolute',left:'27%', bottom:'20%',

  },
  playButton: {
    height: '45%',
    width:'20%',
    position: 'absolute',left:'5%', bottom: '20%',
    resizeMode: 'contain',
  },


  soundBackground: {
    backgroundColor: Themes.dark.bgSecondary,
    width: '100%',
    height: '25%',
    position: 'absolute', bottom: '-10%',
    shadowColor: Themes.dark.shadows.shadowColor,
    shadowOffset: Themes.dark.shadows.shadowOffset,
    shadowOpacity: Themes.dark.shadows.shadowOpacity,
    shadowRadius: Themes.dark.shadows.shadowRadius,
    borderRadius: 25,

  },
  audio_text: {
    position: 'absolute', bottom: '70%', left:'5%',
    fontFamily: 'SydneyRegular',
    fontSize:16,
    color: Themes.dark.text,
  }
});




