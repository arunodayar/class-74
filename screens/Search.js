import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import db from "../config";

export default class SearchScreen extends Component {
  constructor() {
    super();
    this.state = {
      allTransaction: [],
      searchText: "",
    };
  }

  getTransactions = () => {
    db.collection("transactions")
      .get()
      .then((snapShot) => {
        snapShot.docs.map((doc) => {
          this.setState({
            allTransactions: [...this.state.allTransactions, doc.data()],
          });
        });
      });
  };

  handleSearch = async (text) => {};

  render() {
    const { allTransactions } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.textinputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => {
                this.setState({ searchText: text });
              }}
              placeholder={"Type Here"}
              placeholderTextColor={"#ffffff"}
            />
            <TouchableOpacity
              style={styles.scanbutton}
              onPress={() => {
                this.handleSearch(searchText);
              }}
            >
              <Text style={styles.scanbuttonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList data={allTransactions} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5653D4",
  },
  upperContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#9DFD24",
    borderColor: "#FFFFFF",
  },
  textinput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#5653D4",
    fontFamily: "Rajdhani_600SemiBold",
    color: "#FFFFFF",
  },
  scanbutton: {
    width: 100,
    height: 50,
    backgroundColor: "#9DFD24",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  scanbuttonText: {
    fontSize: 24,
    color: "#0A0101",
    fontFamily: "Rajdhani_600SemiBold",
  },
  lowerContainer: {
    flex: 0.8,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 20,
    fontFamily: "Rajdhani_600SemiBold",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Rajdhani_600SemiBold",
  },
  lowerLeftContaiiner: {
    alignSelf: "flex-end",
    marginTop: -40,
  },
  transactionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  transactionText: {
    fontSize: 20,

    fontFamily: "Rajdhani_600SemiBold",
  },
  date: {
    fontSize: 12,
    fontFamily: "Rajdhani_600SemiBold",
    paddingTop: 5,
  },
});
