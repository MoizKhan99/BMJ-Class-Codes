import React, { useState } from "react"
import {
    DatePicker,
    Container, Header, Body, Text, Content, List, ListItem, Left, Right, Button, Icon
} from "native-base";

const Settings = ({ navigation, route }) => {
    const { title } = route.params
    const [selectedDate, setSelectedDate] = useState(new Date())

    const onDateSelect = (newDate) => {
        setSelectedDate(newDate)
    }
    return (
        <Container>
            <Header>
                <Body>
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 20
                        }}
                    >{title}</Text>
                </Body>
            </Header>
            <Content>
                {/* <DatePicker

                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    disabled={false}
                    onDateChange={onDateSelect}
                />

                <Text>{selectedDate.toString()}</Text> */}
                <List leftOpenValue={75}
                    renderLeftHiddenRow={data =>
                        <Button full onPress={() => alert(data)}>
                            <Icon active name="information-circle" />
                        </Button>}>
                    <ListItem itemDivider>
                        <Text>Count</Text>
                    </ListItem>
                    {[1, 2, 3, 4, 5,].map((num, index) => <ListItem key={num}
                        selected={index % 2 === 0}
                    >
                        <Left>
                            <Text>{num}</Text>
                        </Left>
                        <Right>
                            <Button transparent>
                                <Icon name='arrow-forward' />
                            </Button>
                        </Right>
                    </ListItem>)}
                    <ListItem itemDivider>
                        <Text>Alphabet</Text>
                    </ListItem>
                    {["a", "b", "c", "d", "e"].map((char, index) => <ListItem
                    onPress={() => navigation.setOptions({
                        title: `Clicked on ${char}`
                    })}
                    key={char}
                        selected={index % 2 === 0}>
                        <Text>{char}</Text>
                    </ListItem>)}

                    <ListItem>
                        <Button onPress={() => navigation.navigate("Home")}>
                            <Text>Home</Text>
                        </Button>
                    </ListItem>
                </List>

            </Content>
        </Container>
    )
}


export default Settings