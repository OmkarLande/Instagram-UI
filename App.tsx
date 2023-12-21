import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Nav from './components/Nav'
import Story from './components/Story'
import Post from './components/Post'
import Footer from './components/Footer'

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
        <Nav />
      <ScrollView>
        <Story />
        <Post />
      </ScrollView>
        <Footer />
    </SafeAreaView>
  )
}

export default App