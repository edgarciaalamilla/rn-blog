import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  /*  When you use a function passed through context,
      apparently you do not need to pass in an arrow function.
      just call it by its name, like the way done in the button onPress.
  */

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
