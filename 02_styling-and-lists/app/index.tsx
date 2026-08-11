// import React from "react";
// import { FlatList, Image, StyleSheet, Text, View } from "react-native";

// // const Index = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>React Native Styling</Text>

// //       <View style={styles.card}>
// //         <Text style={styles.text}>This is a card</Text>
// //       </View>
// //     </View>
// //   );
// // };

// // export default Index;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#f5f5f5",
// //     padding: 20,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   title: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     marginBottom: 20,
// //   },
// //   card: {
// //     backgroundColor: "#f38d08",
// //     padding: 16,
// //     borderRadius: 10,
// //     alignItems: "center", //horizontal alignment
// //     justifyContent: "center",
// //   },
// //   text: {
// //     fontSize: 16,
// //   },
// // });

// //FlatList

// const vegetables = [
//   {
//     id: 1,
//     name: "Carrot",
//     image: "https://reactnative.dev/img/tiny_logo.png",
//   },
//   {
//     id: 2,
//     name: "Cabbage",
//     image: "https://reactnative.dev/img/tiny_logo.png",
//   },
//   {
//     id: 3,
//     name: "Tomato",
//     image: "https://reactnative.dev/img/tiny_logo.png",
//   },
// ];

// const Index = () => {
//   return (
//     <View>
//       <FlatList
//         data={vegetables}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Image source={{ uri: item.image }} style={styles.image} />
//             <Text style={styles.title}>{item.name}</Text>
//           </View>
//         )}
//         // horizontal={true}
//         ListHeaderComponent={() => <Text>Header</Text>}
//         ListFooterComponent={() => <Text>Footer</Text>}
//         ItemSeparatorComponent={() => (
//           <View style={{ height: 1, backgroundColor: "#ccc" }}></View>
//         )}
//       />
//     </View>
//   );
// };

// export default Index;
// const styles = StyleSheet.create({
//   card: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 12,
//     margin: 8,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//   },
//   image: { width: 40, height: 40, marginRight: 12 },
//   title: { fontSize: 18 },
// });

//Section-List

import React from "react";
import { Image, SectionList, StyleSheet, Text, View } from "react-native";

const vegSections = [
  {
    title: "Leafy greens",
    data: [
      {
        id: "1",
        name: "Spinach",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
      {
        id: "1",
        name: "Cabbage",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
    ],
  },
  {
    title: "Root veggies",
    data: [
      {
        id: "3",
        name: "Carrot",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
      {
        id: "4",
        name: "Beetroot",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
    ],
  },
];

const Index = () => {
  return (
    <SectionList
      sections={vegSections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.header}>{section.title}</Text>
      )}
    />
  );
};

export default Index;

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 8,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  image: { width: 35, height: 35, marginRight: 10 },
  title: { fontSize: 18 },
});
