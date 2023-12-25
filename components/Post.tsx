import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function Post() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.postContainer}>
          <View style={styles.top}>
            <View style={styles.left}>
              <View style={styles.profile}>
                <Image source={require('../images/profile.png')} />
              </View>
              <View>
                <Text style={[styles.userName, styles.bold]}>joshua_l</Text>
                <Text style={styles.location}>Tokyo, Japan</Text>
              </View>
            </View>
            <View style={styles.right}>
              <Image source={require('../images/Shape.jpg')} />
            </View>
          </View>
          <View>
            <Image
              source={require('../images/post.png')}
              style={styles.mainImage}
            />
          </View>

          <View style={styles.bottom}>
            <View style={styles.iconContainer}>
              <View style={styles.icons}>
                <Image
                  source={require('../images/Shape-2.png')}
                  style={styles.icon}
                />
                <Image
                  source={require('../images/Shape-1.png')}
                  style={[styles.icon, styles.jugad]}
                />
                <Image
                  source={require('../images/Sent.png')}
                  style={[styles.icon, styles.jugad]}
                />
              </View>
              <Image
                source={require('../images/Shape-3.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.captionContainer}>
              <View style={styles.lineOne}>
                <Image
                  source={require('../images/profile.png')}
                  style={styles.captionIcon}
                />
                <Text style={styles.likesText}>Liked by </Text>
                <Text style={[styles.userName, styles.bold]}>craig_love</Text>
                <Text style={styles.likesText}> and </Text>
                <Text style={[styles.userName, styles.bold]}>
                  44,565 others
                </Text>
              </View>
              <View style={styles.lineTwo}>
                <Text style={styles.captionText}>
                  {' '}
                  <Text style={[styles.userName, styles.bold]}>joshua_l </Text>
                  The game in Japan was amazing, and I want to share some
                  photos.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.postContainer}>
          <View style={styles.top}>
            <View style={styles.left}>
              <View style={styles.profile}>
                <Image source={require('../images/profile.png')} />
              </View>
              <View>
                <Text style={[styles.userName, styles.bold]}>joshua_l</Text>
                <Text style={styles.location}>Tokyo, Japan</Text>
              </View>
            </View>
            <View style={styles.right}>
              <Image source={require('../images/Shape.jpg')} />
            </View>
          </View>
          <View>
            <Image
              source={require('../images/post2.png')}
              style={styles.mainImage}
            />
          </View>

          <View style={styles.bottom}>
            <View style={styles.iconContainer}>
              <View style={styles.icons}>
                <Image
                  source={require('../images/Shape-2.png')}
                  style={styles.icon}
                />
                <Image
                  source={require('../images/Shape-1.png')}
                  style={[styles.icon, styles.jugad]}
                />
                <Image
                  source={require('../images/Sent.png')}
                  style={[styles.icon, styles.jugad]}
                />
              </View>
              <Image
                source={require('../images/Shape-3.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.captionContainer}>
              <View style={styles.lineOne}>
                <Image
                  source={require('../images/profile.png')}
                  style={styles.captionIcon}
                />
                <Text style={styles.likesText}>Liked by </Text>
                <Text style={[styles.userName, styles.bold]}>craig_love</Text>
                <Text style={styles.likesText}> and </Text>
                <Text style={[styles.userName, styles.bold]}>
                  44,565 others
                </Text>
              </View>
              <View style={styles.lineTwo}>
                <Text style={styles.captionText}>
                  {' '}
                  <Text style={[styles.userName, styles.bold]}>joshua_l </Text>
                  The game in Japan was amazing, and I want to share some
                  photos.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.postContainer}>
          <View style={styles.top}>
            <View style={styles.left}>
              <View style={styles.profile}>
                <Image source={require('../images/profile.png')} />
              </View>
              <View>
                <Text style={[styles.userName, styles.bold]}>joshua_l</Text>
                <Text style={styles.location}>Tokyo, Japan</Text>
              </View>
            </View>
            <View style={styles.right}>
              <Image source={require('../images/Shape.jpg')} />
            </View>
          </View>
          <View>
            <Image
              source={require('../images/post3.png')}
              style={styles.mainImage}
            />
          </View>

          <View style={styles.bottom}>
            <View style={styles.iconContainer}>
              <View style={styles.icons}>
                <Image
                  source={require('../images/Shape-2.png')}
                  style={styles.icon}
                />
                <Image
                  source={require('../images/Shape-1.png')}
                  style={[styles.icon, styles.jugad]}
                />
                <Image
                  source={require('../images/Sent.png')}
                  style={[styles.icon, styles.jugad]}
                />
              </View>
              <Image
                source={require('../images/Shape-3.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.captionContainer}>
              <View style={styles.lineOne}>
                <Image
                  source={require('../images/profile.png')}
                  style={styles.captionIcon}
                />
                <Text style={styles.likesText}>Liked by </Text>
                <Text style={[styles.userName, styles.bold]}>craig_love</Text>
                <Text style={styles.likesText}> and </Text>
                <Text style={[styles.userName, styles.bold]}>
                  44,565 others
                </Text>
              </View>
              <View style={styles.lineTwo}>
                <Text style={styles.captionText}>
                  {' '}
                  <Text style={[styles.userName, styles.bold]}>joshua_l </Text>
                  The game in Japan was amazing, and I want to share some
                  photos.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}



const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image source={require('../images/Home.png')} />
      <Image source={require('../images/Search.png')} />
      <Image source={require('../images/Create.png')} />
      <Image source={require('../images/Like.png')} />
      {/* <Image source={require('../images/Dope.png')} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
  },
  scrollView: {
    flex: 1,
  },
  postContainer: {
    marginBottom: 20,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    padding: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1e1e1e',
  },
  location: {
    color: '#666',
  },
  right: {
    marginRight: 15,
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: '#262626',
  },
  mainImage: {
    width: '100%',
    resizeMode: 'cover',
    height: 350,
  },
  bold: {
    fontWeight: 'bold',
  },
  bottom: {
    padding: 14,
    flex: 1,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 14,
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  jugad: {
    marginLeft: 16,
  },
  captionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  lineOne: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#000000',
  },
  lineTwo: {
    color: '#000000',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  captionIcon: {
    width: 22,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
    tintColor: '#000000',
  },
  likesText: {
    color: '#000000',
  },
  captionText: {
    color: '#000000',
  },
  footerContainer: {
    height: 50,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    marginTop: 1500,
    // bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});
