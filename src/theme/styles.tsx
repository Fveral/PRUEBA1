import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
      flex: 1,
      padding: 20,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 8,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    total: {
      marginTop: 20,
      padding: 10,
      borderTopWidth: 1,
      borderColor: '#ddd',
    },
    totalText: {
      fontSize: 18,
      fontWeight: 'bold',
    },

    container2: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
      },
      error: {
        color: 'red',
        marginTop: 10,
      },
  });

    export default styles;