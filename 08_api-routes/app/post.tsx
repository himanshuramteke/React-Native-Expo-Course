import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

type PostItem = {
  id: number;
  title: string;
  body: string;
};

const Post = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data: PostItem[] = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("error fetching posts", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size={"large"} />;
  }
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ margin: 8 }}>
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
