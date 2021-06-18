import React, { useState } from "react"
import { View, ScrollView, Text, Button, TextInput, StyleSheet } from "react-native"

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [item, setItem] = useState("")
    const onAddItem = () => {
        const newTodos = [...todos];
        newTodos.push(item)
        setTodos(newTodos)
    }

    const onInputChange = (value) => {
        console.log(value)
        setItem(value)
    }
    return (
        <View style={styles.todoContainer}>
            <View style={styles.todoForm}>
                <Text>Todo App</Text>
                <TextInput onChangeText={onInputChange} style={{
                    width: 200, height: 30,
                    borderWidth: 1,
                    borderColor: "gray",
                }} />
            </View>
            {/* <ScrollView  horizontal={true} style={styles.todoItems} showsVerticalScrollIndicator={false}> */}
                {todos.map((item) => <View style={styles.todoItem}>
                    <Text>{item}</Text>
                </View>)}
            {/* </ScrollView> */}
            <View style={styles.todoButton}>
                <Button title="Add" onPress={onAddItem} />
            </View>
        </View>
    )
}

// const styles = {
//     todoContainer: {
//         flex: 1,
//         // backgroundColor: "red",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     todoForm: {
//         flex: 0.3
//     },
//     todoItems: {
//         flex: 2,
//         // width: "100%"
//     },
//     todoButton: {
//         flex: 0.2
//     },
//     todoItem: {
//         padding
//     }
// }

const styles = StyleSheet.create(
    {
        todoContainer: {
            flex: 1,
            // backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center"
        },
        todoForm: {
            flex: 0.3
        },
        todoItems: {
            flex: 2,
            // width: "100%"
            flexWrap:'wrap'
          
        },
        todoButton: {
            flex: 0.2
        },
        todoItem: {
            paddingVertical: 10,
            flex:1,
            flexDirection:'row',
            flexWrap:'wrap'
        }
    }

)

export default Todo;